
const Products = require("../models/Products");

exports.addProducts = async (req, res) => {
    try {
        const product = req.body.product;
        const newProduct = new Products({
            name: product.name,
            brand: product.brand,
            price: product.price,
            maxQuantity: product.maxQuantity,
            description: product.description,
            keywords: product.keywords,
            sizes: product.sizes,
            image: product.image,
            isFeatured: product.isFeatured,
            isRecommended: product.isRecommended,
            availableColors: product.availableColors,
            imageCollection: product.imageCollection
        });

        const savedProduct = await newProduct.save();

        if (!savedProduct)
            return res.status(400).json({ error: "Feed Save failed" });

        res.status(201).json({
            product: savedProduct,
            message: "Feed save successfully",
        });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}

exports.getProducts = async (req, res) => {
    try {
        const query = req.query;
        const products = await Products.find(query).sort({ createdAt: -1 }).limit(parseInt(query.limit));
        res.json(products);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}
exports.getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const products = await Products.findById(id);
        res.json(products);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}