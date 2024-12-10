const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'host',
    user: 'user',
    password: 'pass',
    database: 'db_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool; 