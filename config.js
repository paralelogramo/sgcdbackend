import { config } from "dotenv";
config();

export const SERVER_PORT = process.env.SGCD_PORT || 3000;
export const DB_HOST = process.env.SGCD_DB_HOST || "localhost";
export const DB_USER = process.env.SGCD_DB_USER || "root";
export const DB_PASSWORD = process.env.SGCD_DB_PASSWORD || "12345";
export const DB_DATABASE = process.env.SGCD_DB_DATABASE || "sgcd";
export const DB_PORT = process.env.SGCD_DB_PORT || 3306;