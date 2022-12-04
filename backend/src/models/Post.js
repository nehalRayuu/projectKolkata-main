const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
     name:{
        type:String,

     },
     email:{
        type:String
     },
     massage:{
        type:String
     }

});
module.exports = mongoose.model("Post",PostSchema);