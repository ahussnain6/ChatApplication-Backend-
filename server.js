require("dotenv").config();
const express = require("express");
const dbConnect = require("./utils/DB");
const cors = require("cors");
const errorMiddleware = require("./middleware/Error-middleware");
const { Socket } = require("socket.io");
const  Userroute  = require("./Routes/Userroute");
const  Grouproute  = require("./Routes/Grouproute");
const  Miscroute  = require("./Routes/Miscroute");
const  Messageroute  = require("./Routes/Messageroute");
const io = require("socket.io")(process.env.PORT || 3000,{
  cors:{  origin:`*`}});
const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin:"*",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",credentials: true,};
app.use(cors(corsOptions));
app.use(express.json());
app.get("/",async(req,res)=>{
  console.log("Successfully Server Running!");})
app.use("/user",Userroute);
app.use("/misc",Miscroute);
app.use("/message",Messageroute);
app.use("/group",Grouproute);
app.use(errorMiddleware);
dbConnect().then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);})  })
 let users = [];   
io.on("connection",socket=>{
  // console.log(socket.id);
  socket.on("adduser",(data)=>{
    const isExist = users.find(usr => usr.userID === data)
    if(!isExist){
    const user ={
      userID : data,
      socketID : socket.id
    };
    users.push(user);
    io.emit("getUsers",users);
   }
  } ) ;
  socket.on("disconnect",()=>{
    users = users.filter((elem)=> elem.socketID !== socket.id);
    io.emit("getUsers",users);
  } )
  } )