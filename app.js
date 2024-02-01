const express = require('express');
const app=express();
require("./conn/conn");
const cors =require("cors");
const auth = require("./routes/auth")
const list = require("./routes/list")
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("hello")
});
app.use("/api/v1",auth);
app.use("/api/v2",list);
app.listen(3001,()=>{
    console.log("server start")
})
