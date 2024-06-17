const mongoose = require("mongoose");
const msgSchema = new mongoose.Schema({
    receivername:{
        type:String,
        require:true
    },
    receiverId:{
        type:String,
        require:true
    },
    conversationId:{
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
const Messages = new mongoose.model("Message",msgSchema);
module.exports = Messages;