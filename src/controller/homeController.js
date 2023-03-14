import * as userService from '../service/userService';

const handleHomeController = (req, res) => {
  return res.render('home.ejs');
};

const handleUserPage = async (req, res) => {
  let userList = await userService.getUserList();
  return res.render('user.ejs', { userList });
};

const handleCreateNewUser = async (req, res) => {
  const { username, email, password } = req.body;
  await userService.createNewUser(username, email, password);
  res.redirect('/user');
};

const handleDeleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);

  res.redirect('/user');
};

const handleUpdateUserPage = async (req, res) => {
  const id = req.params.id;
  let userData = await userService.getUserById(id);

  // if (user && user.length > 0) {
  //   userData = { ...user[0] };
  // }
  res.render('updateUser.ejs', { userData });
};

const handleUpdateUser = async (req, res) => {
  const { username, email, id } = req.body;
  await userService.updateUserInfo(username, email, id);
  res.redirect('/user');
};

export {
  handleHomeController,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
  handleUpdateUserPage,
  handleUpdateUser,
};
