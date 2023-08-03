"use strict";
exports.__esModule = true;
var express = require("express");
var accounts = express.Router();
accounts.get("/", function (req, res) {
    res.status(200).json({ message: "create account soon" });
});
accounts.post("/posts", function (req, res) {
    res.status(200).json({ message: "server account is created" });
});
exports["default"] = accounts;
