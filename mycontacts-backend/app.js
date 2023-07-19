
const  express = require ("express");
const connectDb = require("./cofig/dbConnection");
connectDb();

const errorHandler = require("./middleware/errorHandler");

const app = express();
const basePath = '/api/v1'
app.use(express.json());
app.use(`${basePath}/contacts`, require("./routes/contactRoutes"));
app.use(`${basePath}/users`, require("./routes/userRoutes"));
app.get(`${basePath}/docs`, (req, res) => {

    res.redirect('https://documenter.getpostman.com/view/4330325/2s946fdsQU')
  });
  
app.use(errorHandler);

module.exports = app;

//app.use("/api/contacts", require("./routes/contactRoutes"));
 