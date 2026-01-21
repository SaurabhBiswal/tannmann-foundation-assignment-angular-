const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Good Morning! Backend is running.');
});

app.post('/api/users', async (req, res) => {
    const { name, phone, email } = req.body;

    if (!name || !phone || !email) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        const [result] = await db.execute(
            'INSERT INTO users (name, phone, email) VALUES (?, ?, ?)',
            [name, phone, email]
        );
        res.status(201).json({ success: true, message: 'User registered successfully', id: result.insertId });
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ success: false, message: 'Database error', details: error.message });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM users ORDER BY created_at DESC');
        res.json({ success: true, users: rows });
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ success: false, message: 'Database error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
