'use strict';

const express = require('express');
const path = require('path');
var router = express.Router();
var Task=require(path.join(__dirname +'/task'));


router.post('/saveData,',(req,res) => {
 console.log("Inside routes.js: router.post saveData");
 var db_res;
 console.log("Before calling Task.addRequest.");

 const db_result = async () => {
    console.log("req",req.body);
      db_res = await Task.addRequest(req.body);
   console.log("After calling Task.addRequest.");
     }
     db_result().then(() => {
      // console.log('db_res: '+JSON.stringify(db_res));
       console.log("db response here is:\n\n");
       console.log(db_res);
       console.log("\n\n");
       res.json({status_code: 201, status: 'success', result: db_res});

     }).catch (err => {
 
       console.log ("some error happened. The error is as below\n");
       console.log(err);
       if(err.err_code === "DATA_EXISTS") {

          res.json({status_code : 501, status : 'INPUT_EXISTS', error : err});
       } else {
          res.json({status_code : 500, status : 'failed', error : err});
       }
     });

});



//Get all Results
router.get('/getData',(req,res) => {
  var ls_res;

  console.log("Inside routes.js : router.get dataResults");
  console.log("Before calling Task.getAllDataResults.");
     const ls_result = async () => {
     	ls_res = await Task.getAllDataResults();

      }
      ls_result().then(() => {
      	console.log("db response here is:\n\n");
      	console.log(ls_res);
      	console.log("\n\n");
        res.json({status_code: 201, status: 'success', result: ls_res});

      }).catch (err => {

      		console.log(err);
      			res.json({status_code : 500, status : 'failed', error : err});
      });
});



module.exports = router;
