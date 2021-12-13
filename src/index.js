const express = require('express');

const app = express();

app.use(express.json());

const userController = require("./controller/user.controller");

//const gallaryController = require("./controller/gallary.controller");

app.use("/user",userController);

//app.use("/gallary",gallaryController);




module.exports = app;