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
async function GetProduct(req,res,next){
    const {id}=req.params;
    productClient.GetProduct({id},(err,data)=>{
        if(err) return console.log(err);
        res.status(200).json(data);
    })
}
async function CreateProduct(req,res,next){
    const {title,price}=req.body;
    productClient.CreateProduct({title,price},(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
}
async function UpdateProduct(req,res,next){
    const data= {
        id:req.params.id,
        ...req.body

    }
    productClient.UpdateProduct(data,(err,data)=>{
        if(err) return console.log(err);
        res.status(200).json({
            data
        })
    })
}
async function DeleteProduct(req,res,next){

    const {id}=req.params;

    productClient.DeleteProduct({id},(err,data)=>{
        if(err) return console.log(err);
        res.json(data)
    })
}
module.exports= {
    ListProduct,
    GetProduct,
    CreateProduct,
    UpdateProduct,
    DeleteProduct
}