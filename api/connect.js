import { DBN, DBU, DBP } from "./AppConfig.js";
import pg from "pg";
import express from "express";
export const db = new pg.Pool({
    host: "localhost",
    user: DBU,
    database: DBN,
    password: DBP,
    port: 5432,
});
