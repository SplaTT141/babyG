import mysql from "mysql2/promise";
import { DB_HOST, DB_PORT, DB_DATABASE, DB_PASSWORD, DB_USER } from "./env.js";

export const connection = await mysql.createConnection({
    database: DB_DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
})