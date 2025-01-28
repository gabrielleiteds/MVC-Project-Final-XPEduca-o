const express = require("express");
const ProductController = require("../controllers/productController");

const router = express.Router();

const productController = new ProductController();

router.get("/", productController.getAll);
router.get("/count", productController.count);
router.get("/search", productController.getByName);
router.get("/:id", productController.getById);
router.post("/", productController.create);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
