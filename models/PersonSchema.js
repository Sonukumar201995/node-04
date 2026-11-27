const bcrypt=require("bcrypt");
const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        min: 18
    },
    role: {
        type: String,
        enum: ["Librarian","Manager", "Assistant", "Accountant", "Security", "Other"],
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    salary: {
        type: Number,
        min: 0
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},
{
    timestamps: true
});

// password hashing
personSchema.pre("save",async function(){
    const person=this;
    if(!person.isModified("password")) return;
    try
    {
        const salt=await bcrypt.genSalt(10);
        const hashedPass=await bcrypt.hash(person.password,salt);
        person.password=hashedPass
    }catch(error)
    {
        throw error
    }
})

// compare function password
personSchema.methods.comparePassword=async function(candidatePassword)
{
   try
   {
    const isMatch=await bcrypt.compare(candidatePassword,this.password)
    return isMatch

   }catch(error)
   {
    throw error
   }
}

const person = mongoose.model("Person", personSchema);
module.exports = person;


