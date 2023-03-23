//** Dependencies ***//
//===================//
var mysql = require('mysql2');

//*** MySQL Pool Connection ***//
//=============================//
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Anxbhxv@7',
    database: 'employee_db'
});

module.exports = pool;