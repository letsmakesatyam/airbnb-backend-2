const express = require("express");
const app = express();
const {userRouter} = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");

const rootDir = require("./utils/pathUtil");
const path = require("path");
app.set("view engine" , "ejs");
app.set("views" , "views");
app.use(express.urlencoded());
app.use(express.static(path.join(rootDir , "public")))
app.use((req , res , next)=>{
    console.log(req.method , req.url);
    next();
});


app.use( "",   userRouter);
app.use( "/home",hostRouter)
app.use((req , res )=>{
    res.send("<h1>404<h1>");
});
app.listen(3004 , ()=>{
    console.log("server started");
})