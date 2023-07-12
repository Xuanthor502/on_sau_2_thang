const express = require('express')
const fileUpload = require('express-fileupload');
const app = express()
require("dotenv").config()

const controlViewEngine = require("./config/ViewEngine.js");
const routerWeb = require('./routes/routerWeb.js');
const routerApi = require('./routes/routerApi.js');
const connection = require('./config/database.js')
const hostname = process.env.HOST_NAME
const port = process.env.PORT|| 8000
// default options
app.use(fileUpload());
// config req.body
app.use(express.json());
app.use(express.urlencoded());
//config viewEngine
controlViewEngine(app);

// router
app.use("/",routerWeb)
app.use('/v1/api/',routerApi)
// connection database
connection()
app.listen(port, () => {
  console.log(`http://${hostname}:${port}`)
})