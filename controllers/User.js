const Signup = require("../models/Signup");
const bcrypt = require("bcryptjs");
const UploadPic = require("../models/uploadpic");
const SignUP = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const emailexist = await Signup.findOne({ email });
      if (emailexist){ return res.status(400).json({ msg: "Email Exist Already" });}
      const usersign = await Signup.create({ username, email, password });
      return res.status(201).json({
        email: usersign.email,
        token: await usersign.generateToken(),
        id: usersign._id.toString(), 
    });
    } catch (error) {
      console.log(error);}
  };
  
const Signin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const emailexis = await Signup.findOne({ email });
      if (!emailexis) {
        res.status(201).json({ msg: "Invalid Credentials" });
      } else {
        const isverify = await bcrypt.compare(password, emailexis.password);
        if (isverify) {
          res.status(200).json({
            email: emailexis.email,
            token: await emailexis.generateToken(),
            id: emailexis._id.toString(),
            msg: "Login Successfully",
          });
        } else {
          res.status(201).json({ msg: "Invalid Credentials" });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const UploadProfile = async (req, res) => {
    const { imgurl, userId } = req.body;
    try {
      const uploadpic = await UploadPic.create({ imgurl, userId });
      res.status(201).json({ msg: "Uploaded Photo" });
    } catch (error) {
      console.log(error);}};


      const editProfile = async (req, res) => {
        const { Url } = req.body;
        const id = req.params.id;
        console.log(Url);
        try {
          const updatemsg = await UploadPic.updateOne(
            { _id: id },
            { $set: { imgurl: Url } }
          );
          res.status(200).send({ response: updatemsg });
        } catch (error) {
          console.log(error);
        }
      };




      module.exports = {
        
        SignUP,
        Signin,
        UploadProfile,
        
        editProfile,
       
      };
      
