const express=require("express");
const app=express();

// import database connnection...
const db=require("./db")  
const person=require("./models/PersonSchema")


// passport implement
const passport = require("./auth");
app.use(passport.initialize());
const local = passport.authenticate("local", {session: false});

// body-parser middleware
app.use(express.json())

// import router crud operation
const personRoutes=require("./routes/PersonRoutes");
app.use("/",personRoutes)


// login Request middleware


const logRequest = (req, res, next) => {
    console.log(`${new Date().toLocaleString()}
    Request Method: ${req.method}
    URL: ${req.originalUrl}`);

    next();
};

app.use(logRequest);

app.get("/",local,(req,res)=>{
    res.send("welcome to our Employee Information system")
})

app.listen(3000,()=>{
    console.log("server is live")
})