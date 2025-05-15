import {createPool} from 'mysql2/promise';
import { DB_HOST,DB_PORT,DB_PASSWORD,DB_DATABASE, DB_USER } from './config.js';

export const pool = createPool({
    host: DB_HOST,
    port: DB_PORT,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    user: DB_USER,
})