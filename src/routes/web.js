import express from "express";
import * as homeController from "../controller/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.handleHomeController);

  router.get("/user", homeController.handleUserPage);

  router.post("/users/create-user", homeController.handleCreateNewUser);

  router.post("/user/delete-user/:id", homeController.handleDeleteUser);

  router.get("/user/update-user/:id", homeController.handleUpdateUserPage);

  router.post("/user/update-user", homeController.handleUpdateUser);

  return app.use("/", router);
};
export default initWebRoutes;
