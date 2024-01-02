const mongoose=require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String},
    price: {type: String}
})

module.exports = {
    ProductModel : mongoose.model("product", ProductSchema)
}