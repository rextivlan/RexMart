const express = require("express");
const products = require("./data/products");

const app = express();

app.get("/", (req, res) => {
  res.send("API is working");
});

app.get("/products/getProducts", (req, res) => {
  res.json(products);
});

app.get("/products/getProduct/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(8080, console.log("Server running on port 8080"));
