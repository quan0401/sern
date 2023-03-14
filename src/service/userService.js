// import mysql from "mysql2";
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
import mysql from 'mysql2/promise';
import db from '../models';

// get the promise implementation, we will use bluebird
const bluebird = require('bluebird');

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
  // const connection = await mysql.createConnection({
  //   host: 'localhost',
  //   user: 'root',
  //   database: 'sern',
  //   Promise: bluebird,
  // });

  try {
    await db.User.create({
      username: username,
      email: email,
      password: userPass,
    });
    // const [rows, fields] = await connection.execute('INSERT INTO user (username, email, password) VALUES (?, ?, ?);', [
    //   username,
    //   email,
    //   userPass,
    // ]);
    // return rows;
  } catch (error) {
    console.log(error);
  }

  // connection.query(
  //   "INSERT INTO user (username, email, password) VALUES (?, ?, ?);",
  //   [username, email, userPass],

  //   function (err, results, fields) {
  //     if (err) {
  //       console.log(err); // results contains rows returned by server;
  //     }
  //   }
  // );
};

const getUserList = async () => {
  let users = [];
  users = await db.User.findAll();

  return users;

  // const connection = await mysql.createConnection({
  //   host: 'localhost',
  //   user: 'root',
  //   database: 'sern',
  //   Promise: bluebird,
  // });
  // // return connection.query(
  // //   "Select * From user",
  // //   function (err, results, fields) {
  // //     if (err) {
  // //       console.log(err);
  // //     }
  // //     userList = results;
  // //     return userList;
  // //   }
  // // );

  // try {
  //   const [rows, fields] = await connection.execute('SELECT * FROM user');
  //   return rows;
  // } catch (error) {
  //   console.log(error);
  // }
};

const deleteUser = async (userId) => {
  await db.User.destroy({
    where: {
      id: userId,
    },
  });
  // const connection = await mysql.createConnection({
  //   host: 'localhost',
  //   user: 'root',
  //   database: 'sern',
  //   Promise: bluebird,
  // });
  // try {
  //   const [rows, fields] = await connection.execute('DELETE FROM user WHERE id = ?', [id]);
  //   return rows;
  // } catch (error) {
  //   console.log(error);
  // }
};

const getUserById = async (userId) => {
  const user = await db.User.findOne({ where: { id: userId } });
  return user;
  // const connection = await mysql.createConnection({
  //   host: 'localhost',
  //   user: 'root',
  //   database: 'sern',
  //   Promise: bluebird,
  // });
  // try {
  //   const [rows, fields] = await connection.execute('Select * FROM user WHERE id = ?', [userId]);
  //   return rows;
  // } catch (error) {
  //   console.log(error);
  // }
};

const updateUserInfo = async (username, email, id) => {
  await db.User.update(
    { username: username, email: email },
    {
      where: {
        id: id,
      },
    },
  );
  // const connection = await mysql.createConnection({
  //   host: 'localhost',
  //   user: 'root',
  //   database: 'sern',
  //   Promise: bluebird,
  // });

  // try {
  //   const [rows, fields] = await connection.execute('UPDATE user SET username = ?, email = ? WHERE id = ?', [
  //     username,
  //     email,
  //     id,
  //   ]);
  // } catch (error) {
  //   console.log(error);
  // }
};

export { createNewUser, hashPassword, getUserList, deleteUser, getUserById, updateUserInfo };
