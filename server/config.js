'use strict';


var mysql = require('mysql');


const pool = mysql.createPool({
      connectionLimit   :     100,
      host    :    "localhost",
      port    :    33061,
      user    :    "root",
      password:    "admin123",
      database:    "mydb",
      debug   :    false
});

const PORT= 8080;

module.exports = {dbPool : pool,  port : PORT};
