import React, { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
    });

    const [err, setErr] = useState(null);
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs);
        } catch (err) {
            setErr(err.response);
        }
    };

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Harbor Register</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente ratione nam veniam corrupti cupiditate repellat
                        autem odit aspernatur doloribus eveniet.
                    </p>
                    <span>Already have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                        />
                        <input
                            type="name"
                            placeholder="Name"
                            name="name"
                            onChange={handleChange}
                        />
                        {err && err}
                        <button onClick={handleClick}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
