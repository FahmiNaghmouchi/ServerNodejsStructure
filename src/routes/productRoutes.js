const express = require('express');
const router = express.Router();

const { getAllProducts} = require('../controllers/productController');
const { createProduct} = require('../controllers/productController');
const { updateProduct} = require('../controllers/productController');

router.get('/products', getAllProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);

module.exports = router;