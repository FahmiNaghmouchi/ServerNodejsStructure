const Product = require('../models/productModel');
const productService = require('../services/productServices');

const getAllProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.json(products);
}
const getProductById = (req, res) => {
  const { id } = req.params;
  const product = productService.getProductById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Produit non trouvé' });
  }
};
/*const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  if (!name || !price || !stock) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }
  try {
    const newProduct = new Product({
      name,
      price,
      stock,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du produit', error });
  }
}*/

//create a static create product function
async function createProduct() {
 try {
 const newProduct = new Product({
 name: 'coka',
 price: '0.99',
 stock: '0.99',
 });
 const savedProduct = await newProduct.save();
 console.log('Product créé :', savedProduct);
 } catch (error) {
 console.error('Erreur lors de la création du produit :',
error);
 }
}
createProduct();

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id,
        { name, price, stock },
        { new: true });
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Produit non trouvé' });
    }
    } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du produit', error });
  }
}
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (deletedProduct) {
        res.json({ message: 'Produit supprimé avec succès' });
        } else {
        res.status(404).json({ message: 'Produit non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression du produit', error });
    }
    }
module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };