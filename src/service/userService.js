// import mysql from "mysql2";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
import mysql from "mysql2/promise";

import mysql1 from "mysql2";

// get the promise implementation, we will use bluebird
const bluebird = require("bluebird");

// create the connection, specify bluebird as Promise

const connection1 = mysql1.createConnection({
  host: "localhost",
  user: "root",
  database: "sern",
});

const hashPassword = (password) => {
  const hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
  ``;
};

const createNewUser = (username, email, password) => {
  const userPass = hashPassword(password);
  connection1.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?);",
    [username, email, userPass],

    function (err, results, fields) {
      if (err) {
        console.log(err); // results contains rows returned by server;
      }
    }
  );
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "sern",
    Promise: bluebird,
  });
  let userList;
  // return connection.query(
  //   "Select * From users",
  //   function (err, results, fields) {
  //     if (err) {
  //       console.log(err);
  //     }
  //     userList = results;
  //     return userList;
  //   }
  // );

  try {
    const [rows, fields] = await connection.execute("SELECT * FROM users");
    return rows;
  } catch (error) {
    console.log(error);
  }

  // query database
};

export { createNewUser, hashPassword, getUserList };
