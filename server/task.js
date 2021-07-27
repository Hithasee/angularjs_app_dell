'use strict';

//Connect to the DB
const path = require('path');
const config = require(path.join(__dirname +'/config'));

const db_config = config.dbPool;


var Task = {
  addRequest: (data) => {
    return new Promise((resolve, reject) => {
      console.log("Inside task.js: addRequest");
      console.log("\n\n");
      console.log("Data IS:", data);
      var input1 = data.num1;
      var input2 = data.num2;

          db_config.query('SELECT * FROM calc_table WHERE num1 = ? AND num2 = ? ;', [input1,input2], (dbErr, dbRes) => {
            if (!dbErr) {
              //console.log("dbRes length",dbRes.length);
              if (dbRes.length === 0) {	//Data not exists.
                db_config.query('INSERT INTO calc_table SET ?;', data, (insErr, insRes) => {
                  if (!insErr) {
                    resolve({ db_res: insRes });
                  } else {
                    reject({ db_err: insErr });
                  }
                });
              } else {
                  reject({ err_code: 'DATA_EXISTS', err: dbRes });
              }
            } else {
              reject({ db_err: dbErr });
            }
          });
    });
  },

  getAllDataResults: () => {
    return new Promise((resolve, reject) => {
      console.log("Inside task.js: getAllDataResults");
      console.log("\n\n");

      db_config.query('SELECT * FROM calc_table;', (dbErr, dbRes) => {
        if (!dbErr) {
          resolve({ db_res: dbRes });
        } else {
          reject({ err_code: 'DB_ERROR', err: dbErr });
        }
      });
    });
}

};
module.exports=Task;
