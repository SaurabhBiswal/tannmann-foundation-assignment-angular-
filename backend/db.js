const mysql = require('mysql2');
require('dotenv').config();

// Conditional SSL: only for TiDB Cloud (not localhost)
const isCloud = process.env.DB_HOST && process.env.DB_HOST !== 'localhost';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'tannmann_db',
  port: process.env.DB_PORT || 3306,
  ssl: isCloud ? {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  } : false,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
