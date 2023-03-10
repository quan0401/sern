import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = express();

// Config view engine
configViewEngine(app);

// Init web routes;
initWebRoutes(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(">>> SERN is running on the port", PORT);
});
