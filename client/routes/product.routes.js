const {ListProduct, CreateProduct}=require('./../controllers/product.controller');
const router=require('express').Router();

router.get('/list',ListProduct);
router.post('/add',CreateProduct);
// router.get('/update/:',UpdateProduct);
// router.get('/lit',ListProduct);
// router.get('/list',ListProduct);

module.exports={
    ProductRoutes:router
}