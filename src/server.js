import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
// import connection from './config/connectDB';

require('dotenv').config();

import bodyParser from 'body-parser';

const app = express();

// Config view engine
configViewEngine(app);

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test connection
// connection();

// Init web routes;
initWebRoutes(app);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log('>>> SERN is running on the port', PORT);
});
