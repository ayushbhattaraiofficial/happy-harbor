import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = (req, res) => {
    const q = "SELECT * FROM social.users WHERE username = $1 OR email = $2";
    db.query(q, [req.body.username, req.body.email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.rows.length)
            return res.status(409).json("User already exists!");
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        const q =
            "INSERT INTO social.users(username, email, password, name) VALUES ($1, $2, $3, $4)";
        const values = [
            req.body.username,
            req.body.email,
            hashedPassword,
            req.body.name,
        ];

        db.query(q, values, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User has been created.");
        });
    });
};
export const login = (req, res) => {
    const q = "SELECT * FROM social.users WHERE username = $1";

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.rows.length === 0)
            return res.status(404).json("User not found!");

        const checkPassword = bcrypt.compareSync(
            req.body.password,
            data.rows[0].password
        );

        if (!checkPassword) {
            return res.status(400).json("Wrong password or username!");
        }

        const token = jwt.sign({ id: data.rows[0].id }, "secretkey");

        const { password, ...others } = data.rows[0];

        res.cookie("access_token", token, {
            httpOnly: true,
        })
            .status(200)
            .json(others);
    });
};
export const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true,
    })
        .status(200)
        .json("Logged out successfully!");
};
