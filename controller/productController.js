const productModel = require("../models/productModel");

/**
 * create : upload product
 * get all :
 * get pne
 * update : update product(stock)
 * delete : delete product
 */

//create / upload product

const uploadProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock, quantity, image } = req.body;

        const product = await productModel.create(
            {
                name, description, price, category, stock, quantity, image
            })

    return res.status(201).json(
        {
            message: "Product uploaded successfully", product
        })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

// get all products

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        return res.status(200).json({ message: "All products retrieved successfully", products })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports = {
    uploadProduct,
    getAllProducts
}