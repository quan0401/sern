import * as userService from "../service/userService";

const handleHomeController = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = async (req, res) => {
  let userList = await userService.getUserList();
  // userList = JSON.stringify(userList);
  userService.deleteUser(47);
  return res.render("user.ejs", { userList });
};

const handleCreateNewUser = async (req, res) => {
  const { username, email, password } = req.body;

  userService.createNewUser(username, email, password);
  res.redirect("/user");
};

const handleDeleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.redirect("/user");
};

export {
  handleHomeController,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
};
