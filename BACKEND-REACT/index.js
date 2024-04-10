const express=require("express");
const app=express();
const cors=require('cors');

app.use(cors({
    origin:'*',
}))

const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/BACKEND_REACT");

const post_route=require('./routes/postRoute');
app.use('/api',post_route);

app.listen(8080,function(){
    console.log("server is running");
});