// db.js - conexão PostgreSQL via Railway
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // necessário para Railway
});

module.exports = pool;
