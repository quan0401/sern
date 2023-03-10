import { createNewUser, getUserList } from "../service/userService";

const handleHomeController = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
  const { username, email, password } = req.body;
  createNewUser(username, email, password);
  getUserList();
  res.send("handle create new user");
};
export { handleHomeController, handleUserPage, handleCreateNewUser };
