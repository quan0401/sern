import * as userService from '../service/userService';

const handleHomeController = (req, res) => {
  return res.render('home.ejs');
};

const handleUserPage = async (req, res) => {
  let userList = await userService.getUserList();
  // userList = JSON.stringify(userList);
  return res.render('user.ejs', { userList });
};

const handleCreateNewUser = async (req, res) => {
  const { username, email, password } = req.body;

  userService.createNewUser(username, email, password);
  res.send('handle create new user');
};

export { handleHomeController, handleUserPage, handleCreateNewUser };
