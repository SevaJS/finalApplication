const {Schema, model} = require("mongoose");
const userSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activatedLink: {type: String},
    role: {type: String, default:"USER"}


})

module.exports = model("User", userSchema);