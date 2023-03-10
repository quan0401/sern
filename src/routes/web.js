import express from "express";
import {
  handleCreateNewUser,
  handleHomeController,
  handleUserPage,
} from "../controller/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", handleHomeController);
  router.get("/user", handleUserPage);
  router.post("/users/create-user", handleCreateNewUser);
  return app.use("/", router);
};
export default initWebRoutes;
