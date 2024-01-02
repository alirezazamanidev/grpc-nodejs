const { ProductModel } = require("../model/product.model");

async function ListProduct(call, callBack) {
  try {
    const products = await ProductModel.find({});
    callBack(null, {
      products,
    });
  } catch (error) {
    callBack(error, null);
  }
}
async function GetProduct(call, callBack) {
  try {
    const { id } = call.request;

    const product = await ProductModel.findById(id);
    if (!product) return console.log("Product not founded");
    callBack(null, {
      id: product.id,
      title: product.title,
      price: product.price,
    });
  } catch (error) {
    callBack(error, null);
  }
}
async function CreateProduct(call, callBack) {
  try {
    const { title, price } = call.request;
    await ProductModel.create({ title, price });
    callBack(null, { status: "Created" });
  } catch (error) {
    callBack(error, null);
  }
}
async function UpdateProduct(call, callBack) {
  try {
    const { id } = call.request;
    const data = call.request;
    delete data.id;
    const product = await ProductModel.findById(id);
    if (!product) return callBack({ message: "Product not found" }, null);
    product.updateOne({ $set: data });
    callBack(null, { status: "updated" });
  } catch (error) {
    callBack(error, null);
  }
}
async function DeleteProduct(call, callBack) {
  try {
    const {id}=call.request;
    const resultdelete = await ProductModel.findByIdAndDelete(id);
    callBack(null,{status:'success'});
  } catch (error) {
    callBack(error, null);
  }
}

module.exports = {
  ListProduct,
  GetProduct,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
};
