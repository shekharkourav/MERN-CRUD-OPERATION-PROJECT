const express=require("express");
const app=express();

const bodyParser=require('body-parser');
post_route.use(bodyParser.json());
post_route.use(bodyParser.urlencoded({extended:true}));