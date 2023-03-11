// import mysql from "mysql2";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
import mysql from "mysql2/promise";

import mysql1 from "mysql2";

// get the promise implementation, we will use bluebird
const bluebird = require("bluebird");

// create the connection, specify bluebird as Promise

// const connection1 = mysql1.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "sern",
// });

const hashPassword = (password) => {
  const hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
  ``;
};

const createNewUser = async (username, email, password) => {
  const userPass = hashPassword(password);
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "sern",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?);",
      [username, email, userPass]
    );
    return rows;
  } catch (error) {
    console.log(error);
  }

  // connection.query(
  //   "INSERT INTO users (username, email, password) VALUES (?, ?, ?);",
  //   [username, email, userPass],

  //   function (err, results, fields) {
  //     if (err) {
  //       console.log(err); // results contains rows returned by server;
  //     }
  //   }
  // );
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "sern",
    Promise: bluebird,
  });
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
};

const deleteUser = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "sern",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "DELETE FROM users WHERE id = ?",
      [id]
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export { createNewUser, hashPassword, getUserList, deleteUser };
