const {ListProduct}=require('./../controllers/product.controller');
const router=require('express').Router();

router.get('/list',ListProduct);
// router.get('/add',CreateProduct);
// router.get('/update/:',UpdateProduct);
// router.get('/lit',ListProduct);
// router.get('/list',ListProduct);

module.exports={
    ProductRoutes:router
}