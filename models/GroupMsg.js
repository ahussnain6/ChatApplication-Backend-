const mongoose = require("mongoose");
const gMsgSchema = new mongoose.Schema({
    receiverId:{
        type:Array,
        require:true
    },
    GroupId:{
        type:String,
        require:true
    }, 
    sendername:{
        type:String,
        require:true
    },
    senderId:{
        type:String,
        require:true
    },
    msg:{
        type:String,
        require:true
    }
    })
const GroupMessages = new mongoose.model("GroupMessage",gMsgSchema);
module.exports = GroupMessages;