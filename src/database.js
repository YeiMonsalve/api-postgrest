const dotenv = require('dotenv');
const { Client } = require('pg');

dotenv.config();

const connectDb = async () => {
    const client = new Client({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT
    });

    try {
        await client.connect();
        console.log('Connected to the database');
        return client;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error; 
    }
};

module.exports = {
    connectDb
};
