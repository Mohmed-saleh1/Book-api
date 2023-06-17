import { Pool } from 'pg'
const dotenv = require('dotenv');

const db_config = {
  
    connectionString:process.env.DATABASE_URL,
    connectionTimeoutMillis: 300,
    idleTimeoutMillis: 200,
    max: 20, 
  }

  pool.on('connect', (client) => {
    console.log('database is connected');
  })

  pool.on('remove', (client) => {
    console.log('database connection removed');
  })
  module.exports=pool;