// get the client
// const mysql = require('mysql2');
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "sern",
});

const handleHomeController = (req, res) => {
  return res.render("home.ejs");
};
const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
  const { username, email, password } = req.body;

  connection.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?);",
    [username, email, password],

    function (err, results, fields) {
      console.log(err); // results contains rows returned by server;
    }
  );
  res.send("handle create new user");
};
export { handleHomeController, handleUserPage, handleCreateNewUser };
