const { ProductModel } = require("../model/product.model")

async function ListProduct(call,callBack){
   try {
    const products=await ProductModel.find({});
    callBack(null,{
        products
    })
   } catch (error) {
    callBack(error,null);
   }
}
async function GetProduct(call,callBack){}
async function CreateProduct(call,callBack){
    try {
        const {title,price}=call.request;
        await ProductModel.create({title,price});
        callBack(null,{status:"Created"});
        
    } catch (error) {
        callBack(error,null);
    }
}
async function UpdateProduct(call,callBack){}
async function DeleteProduct(call,callBack){}

module.exports={
    ListProduct,
    GetProduct,
    CreateProduct,
    UpdateProduct,
    DeleteProduct
}