const ProductModel = require("../models/productModel");
const { v4: uuidv4 } = require("uuid");

const productModel = new ProductModel();

module.exports = class ProductController {
  getAll(req, res) {
    return res.json(productModel.findAll());
  }

  getById(req, res) {
    const product = productModel.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.json(product);
  }

  getByName(req, res) {
    const { name } = req.query;
    const products = productModel.findByName(name);
    return res.json(products);
  }

  create(req, res) {
    const { name, price } = req.body;
    if (!name || !price)
      return res.status(400).json({ message: "Name and Price are required" });
    const newProduct = { id: uuidv4(), name, price };
    return res.status(201).json(productModel.create(newProduct));
  }

  update(req, res) {
    const { id } = req.params;
    const updatedProduct = productModel.update(id, req.body);
    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });
    return res.json(updatedProduct);
  }

  delete(req, res) {
    const { id } = req.params;
    const deletedProduct = productModel.delete(id);
    if (!deletedProduct)
      return res.status(404).json({ message: "Product not found" });
    return res.status(204).send();
  }

  count(req, res) {
    return res.json({ count: productModel.count() });
  }
};
