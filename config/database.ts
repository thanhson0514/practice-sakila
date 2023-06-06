import mysql, { Pool } from "mysql2";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

export const pool: Pool = mysql.createPool({
  host: process.env["HOST_DB"],
  user: process.env["USER_DB"],
  password: process.env["PASSWORD_DB"],
  database: process.env["NAME_DB"],
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
