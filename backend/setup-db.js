const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupDatabase() {
    const dbConfig = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'password',
    };

    console.log(`Connecting to MySQL at ${dbConfig.host} as ${dbConfig.user}...`);

    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);

        console.log('Connected.');

        // Create Database
        const dbName = process.env.DB_NAME || 'tannmann_db';
        console.log(`Creating database '${dbName}' if not exists...`);
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
        console.log('Database created/verified.');

        // Switch to database
        await connection.changeUser({ database: dbName });

        // Create Table
        console.log('Creating users table...');
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
        await connection.query(createTableQuery);
        console.log('Table users created/verified.');

        console.log('✅ Database setup completed successfully!');

    } catch (error) {
        console.error('❌ Error setting up database:', error.message);
        if (error.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error('\n--> Please check your MySQL Username and Password in backend/.env file.');
            console.error('--> Make sure your local MySQL server is running.');
        }
    } finally {
        if (connection) await connection.end();
    }
}

setupDatabase();
