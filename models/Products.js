const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        maxQuantity: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        keywords: {
            type: [],
            required: true
        },
        sizes: {
            type: [],
            required: true
        },
        image: {
            type: String,
            required: true
        },
        isFeatured: {
            type: Boolean,
            required: true
        },
        isRecommended: {
            type: Boolean,
            required: true
        },
        availableColors: {
            type: [],
            required: true
        },
        imageCollection: {
            type: [],
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const token = mongoose.model("Products", productsSchema);
module.exports = token;