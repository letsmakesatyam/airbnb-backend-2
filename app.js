const express = require("express");
const app = express();
const {userRouter} = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");

const rootDir = require("./utils/pathUtil");
const path = require("path");
app.use(express.urlencoded());
app.use(express.static(path.join(rootDir , "public")))
app.use((req , res , next)=>{
    console.log(req.method , req.url);
    next();
});


app.use( "",   userRouter);
app.use( "/home",hostRouter)
app.listen(3004 , ()=>{
    console.log("server started");
})