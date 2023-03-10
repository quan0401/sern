import mysql from "mysql2";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "sern",
});

const hashPassword = (password) => {
  const hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

const createNewUser = (username, email, password) => {
  const userPass = hashPassword(password);
  connection.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?);",
    [username, email, userPass],

    function (err, results, fields) {
      console.log(err); // results contains rows returned by server;
    }
  );
};

const getUserList = () => {
  connection.query("Select * From users", function (err, results, fields) {
    console.log(">>> Check: ", results);
  });
};

export { createNewUser, hashPassword, getUserList };
