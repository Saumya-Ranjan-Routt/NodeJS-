"use strict";
exports.__esModule = true;
var express = require("express");
var transactions = express.Router();
transactions.get("/", function (req, res) {
    res.status(200).json({ message: "transcation soon---!" });
});
transactions.get("/user", function (req, res) {
    res.status(200).json({ message: "welcome to typescript user --!" });
});
exports["default"] = transactions;
