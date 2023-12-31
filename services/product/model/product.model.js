const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    productID:{type:Number,unique:true,required:true},

    title:{type:String,required:true},
    price:{type:Number,required:true},
});

module.exports={
    ProductModel:mongoose.model('product',ProductSchema)
}