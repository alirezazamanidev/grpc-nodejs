require('./config/db.connection');
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const { DeleteProduct, UpdateProduct, CreateProduct, GetProduct, ListProduct } = require('./functions/product.grpc');
const protoPath = path.join(__dirname, "..", "..", "protos", "product.proto");
console.log(protoPath);
const productProto = protoLoader.loadSync(protoPath);
const {productPackage}  = grpc.loadPackageDefinition(productProto);
const productServiceURL = "localhost:4001";

function main(){
    const server = new grpc.Server();
    server.addService(productPackage.ProductService.service, {
        DeleteProduct,
        UpdateProduct,
        CreateProduct,
        GetProduct,
        ListProduct
    })
    server.bindAsync(productServiceURL, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if(err) return console.log(err.message)
        console.log("gRPC ProductService Runing over port " + port);
        server.start()
    })
}
main()