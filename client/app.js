const express=require('express');
const { MainRoutes } = require('./routes/index.routes');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(MainRoutes);
app.listen(4000,()=>{
    console.log("Client runnig over port 4000");
})