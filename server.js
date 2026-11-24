const express=require("express");
const app=express();

// import database connnection...
const db=require("./db")  
const person=require("./models/PersonSchema")

// body-parser middleware
app.use(express.json())



app.get("/",(req,res)=>{
    res.send("welcome to our Employee Information system")
})

app.listen(3000,()=>{
    console.log("server is live")
})