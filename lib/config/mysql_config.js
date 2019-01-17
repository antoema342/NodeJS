'use strict';

let mysql = require('mysql');
let connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'media'
});
connection.connect();
module.exports = connection;