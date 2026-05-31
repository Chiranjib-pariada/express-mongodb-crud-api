const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');
const { validateProduct } = require('../middleware/validateProduct');


// CREATE
router.post(
  '/',
  validateProduct,
  productController.createProduct
);


// READ ALL
router.get(
  '/',
  productController.getAllProducts
);


// READ ONE
router.get(
  '/:id',
  productController.getProductById
);


// UPDATE
router.put(
  '/:id',
  validateProduct,
  productController.updateProduct
);


// DELETE
router.delete(
  '/:id',
  productController.deleteProduct
);

module.exports = router;