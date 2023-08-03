"use strict";
exports.__esModule = true;
var express = require("express");
var transactions_1 = require("./transactions");
var accounts_1 = require("./accounts");
var app = express();
app.use("/saumya", transactions_1["default"]);
app.use("/pintu", accounts_1["default"]);
app.listen(9000, function () {
    console.log("server stated!!!");
});
