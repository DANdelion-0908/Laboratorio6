import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: "localhost",
    user: "dandelionWriter",
    database: "games_db",
    password: "0908072244!",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 1
})

export default pool