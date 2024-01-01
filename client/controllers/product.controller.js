const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path")
const productProtoPath = path.join(__dirname, "..","..", "protos", "product.proto");
const productProto = protoLoader.loadSync(productProtoPath);
const {productPackage}  = grpc.loadPackageDefinition(productProto);
const productServiceURL = "localhost:4001";
const productClient = new productPackage.ProductService(productServiceURL, grpc.credentials.createInsecure());

 function ListProduct(req,res){
    productClient.ListProduct(null, (err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
}
async function GetProduct(req,res,next){}
async function CreateProduct(req,res,next){}
async function UpdateProduct(req,res,next){}
async function DeleteProduct(req,res,next){}
module.exports= {
    ListProduct,
    GetProduct,
    CreateProduct,
    UpdateProduct,
    DeleteProduct
}