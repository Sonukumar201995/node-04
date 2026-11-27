const passport=require("passport");
const localStrategy=require("passport-local").Strategy;

const person=require("./models/PersonSchema");

passport.use(new localStrategy(async(username,password,done)=>{
    try
    {
        console.log("Recieved Credentiale :" ,username);
        const user =await person.findOne({username})

        if(!user )
        {
            return done(null,false, {message:"incorrect username"})
        }

        const isPassMatch=await user.comparePassword(password);
        if(!isPassMatch)
        {
            return done(null,false,{message :"incorrect password"})
        }
        return done(null,user)
    }
    catch(error)
    {
        return done(error)
    }
}))

module.exports=passport;