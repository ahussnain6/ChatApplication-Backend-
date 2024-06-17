const mongoose = require("mongoose");
const uploadSchema = new mongoose.Schema({
    imgurl:{
        type:String,
        require:true
    },
    userId:[{
        type: mongoose.Types.ObjectId,
        ref:"User"
    }]
 
    })
const UploadPic = new mongoose.model("UploadPic",uploadSchema);
module.exports = UploadPic;