const express = require('express')
const app = express()
require("dotenv").config()

const controlViewEngine = require("./config/ViewEngine.js");
const router = require('./routes/routerWeb.js');

const hostname = process.env.HOSTNAME
const port = process.env.PORT|| 8000
// config req.body
app.use(express.json());
app.use(express.urlencoded());
//config viewEngine
controlViewEngine(app);

// router
app.use("/",router)

app.listen(port, () => {
  console.log(`http://${hostname}:${port}`)
})