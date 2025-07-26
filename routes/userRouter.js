const express = require("express");
const path = require("path");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtil");
userRouter.get("/",(req , res  , next)=>{
    console.log("everything is fine ");
    res.sendFile(path.join(rootDir , "views" , "home.html"));
});

exports.userRouter = userRouter;