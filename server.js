const express=require("express");
const app=express();

// import database connnection...
const db=require("./db")  

app.get("/",(req,res)=>{
    res.send("welcome to our voting system")
})

app.listen(3000,()=>{
    console.log("server is live")
})