const {ListProduct, CreateProduct, GetProduct, UpdateProduct, DeleteProduct}=require('./../controllers/product.controller');
const router=require('express').Router();

router.get('/list',ListProduct);
router.post('/add',CreateProduct);
router.get('/:id',GetProduct);
router.put('/update/:id',UpdateProduct);
router.delete('/remove/:id',DeleteProduct);
module.exports={
    ProductRoutes:router
}