const express = require("express");
const router = express.Router();

const {
    addProducts,
    getProducts,
    getProduct
} = require("../controllers/products");

router.post("/products", addProducts);
router.get("/products/:id", getProduct);
router.get("/products/", getProducts);

module.exports = router;
