//use mongoose to create schemas and validations
const mongoose = require("mongoose")

const uniqueValidator = require('mongoose-unique-validator')

const PetSchema = mongoose.Schema({
    name : {
        type : String,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet name must be at least 3 characters"],
        unique: [true, "Pet name already in shelter. Must be unique."]
    },
    type : {
        type : String,
        required: [true, "Pet type is required"],
        minlength : [3, "Pet type must be at least 3 characters."]
    },
    description : {
        type: String,
        required: [true, "Pet description required"],
        minlength: [3, "Pet description must be at least 3 characters"]
    },
    skill1 : {
        type: String,
        // minlength: [3, "Skill must be at least 3 characters"]
    },
    skill2 : {
        type: String,
        // minlength: [3, "Skill must be at least 3 characters"]
    },
    skill3 : {
        type: String,
        // minlength: [3, "Skill must be at least 3 characters"]
    }
    // skills : {
    //     type : [String],
    //     //custom validation 0-3 skills not required
    // },
}, {timestamps:true})

PetSchema.plugin(uniqueValidator)

module.exports.Pet = mongoose.model("Pet", PetSchema) //returns an object - CRUD operations possible

