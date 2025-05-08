import {createPool} from 'mysql2/promise';
import {PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE} from './config.js';

export const pool = createPool({
  host: PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_HOST,
  database: DB_DATABASE,
})