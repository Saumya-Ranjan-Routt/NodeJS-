"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/saumya", function (req, res) {
    res.status(200).json({ "message": "welcome to typescript to nodejs" });
});
app.listen(9000, function () {
    console.log("server starte sucessfully !!!");
});
