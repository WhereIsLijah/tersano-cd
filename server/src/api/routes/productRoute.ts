import express from 'express';
const productController = require('../controllers/productController')
const router = express.Router();

router.post('/', productController.addProduct);
router.delete('/:id', productController.deleteProduct);

export default router;