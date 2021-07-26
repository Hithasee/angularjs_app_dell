# angularjs_app


<b>Getting started</b>


1) Clone repo -->  git clone git@github.com:Hithasee/angularjs_app_dell.git
2) cd to folder and run npm install
3) Change database settings- open server/config.js and do necessary changes
     const pool = mysql.createPool({
      connectionLimit   :     100,
      host    :    "localhost",
      port    :    3306,
      user    :    "root",
      password:    "admin123",
      database:    "mydb",
      debug   :    false
     });
   Create Statement:

    ```CREATE TABLE `mydb.calc_table` (
    `id` int NOT NULL AUTO_INCREMENT,
    `num1` int DEFAULT NULL,
    `num2` int DEFAULT NULL,
    `result` int DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;```

Note: Make sure you are using Mysql database

4) Run npm start and open http://localhost:8080/ in browser 
5) Open another cmd and test using npm test (which calls command karma start karma.conf.js)
6) It should run two test cases given as specs 1, 2.




