
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

const person = mongoose.model("Person", personSchema);

module.exports = person;
