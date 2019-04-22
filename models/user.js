const mongoose = require("mongoose"),
      passportLocalMongoose = require("passport-local-mongoose");


var UserSchema = new  mongoose.Schema({
    name: String,
    company: String,
    username: String,
    password: String,
    admin: Boolean
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);