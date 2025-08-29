//create a service to handle product logic
const Product = require('../models/productModel');
const getAllProducts = () => {
    return Product.find();
}
const getProductById = (id) => {
    return Product.findById(id);
}
module.exports = { getAllProducts, getProductById };
