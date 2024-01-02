const {ListProduct, CreateProduct, GetProduct}=require('./../controllers/product.controller');
const router=require('express').Router();

router.get('/list',ListProduct);
router.post('/add',CreateProduct);
router.get('/:id',GetProduct);
module.exports={
    ProductRoutes:router
}