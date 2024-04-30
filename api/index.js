import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(8800, () => {
    console.log("Server is running on port 8800");
});
