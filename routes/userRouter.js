const express = require("express");
const path = require("path");
const userRouter = express.Router();

const {homes } = require("./hostRouter");
userRouter.get("/",(req , res  , next)=>{
    console.log("everything is fine ");
    console.log(homes)
    
    res.render("home" , {homes: homes});
});

exports.userRouter = userRouter;