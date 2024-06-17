const Signup = require("../models/Signup");

const UploadPic = require("../models/uploadpic");

const getUsers = async (req, res) => {
  try {
    const AllUsers = await Signup.find({});
    return res.status(200).send({ data: AllUsers });
  } catch (error) {
    console.log(error);
  }
};

const getprofiles = async (req, res) => {
  try {
    const Profile = await UploadPic.find({}).populate("userId");
    return res.status(200).send({ response: Profile });
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
     
    getprofiles,
    
    getUsers,
    
  };
  