const mongoose=require('mongoose');

module.exports=mongoose.connect('mongodb://127.0.0.1:27017/grpc-nodejs')
.then(()=>console.log('Connected to Db'))
.catch((err)=>console.log(err.message));