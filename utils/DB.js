const mongoose = require("mongoose");
const URI = process.env.MONGODBURI;
const dbConnect = async()=>{
try {
    await mongoose.connect(URI);
    console.log("Connection Successfully at DB");
} catch (error) {
    console.log("Connection failed");
}
}
module.exports = dbConnect;