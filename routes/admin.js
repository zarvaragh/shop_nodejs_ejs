//what the admins will see
const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = []; //storing req.body into this array

//admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title }); //extracting the title and sending it over to procut array
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
