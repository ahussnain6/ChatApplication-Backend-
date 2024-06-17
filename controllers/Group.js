 const Groups = require("../models/Group");
const GroupMessages = require("../models/GroupMsg");

const createGroup = async (req, res) => {
  const { Groupname, adminId, groupmembers } = req.body;
  try {
    const response = await Groups.create({ Groupname, adminId, groupmembers });
    res.status(201).send({ res: response });
  } catch (error) {
    console.log(error);
  }
};
const getGroup = async (req, res) => {
  const { id } = req.params;
  console.log(id, "id");
  try {
    const response = await Groups.findOne({ _id: id });
    console.log(response, "response");
    res.status(201).send({ res: response });
  } catch (error) {
    console.log(error);
  }
};
const AllGroups = async (req, res) => {
  try {
    const response = await Groups.find({});
    // console.log(response, "response");
    res.status(201).send({ res: response });
  } catch (error) {
    console.log(error);
  }
};
const sendGmsg = async (req, res) => {
  const { receiverId, GroupId, senderId,sendername, msg } = req.body;
  try {
    const users = await GroupMessages.create({
      receiverId, GroupId, senderId,sendername, msg
    });
    return res.status(200).send({ response: users });
  } catch (error) {
    console.log(error);}};
const delgmsg = async (req, res) => {
  const id = req.params.id;
  try {
    const msg = await GroupMessages.deleteOne({ _id: id });
    res.status(200).send({ response: `${id} Message Deleted` });
  } catch (error) {
    console.log(error);
  }
};
const editGmsg = async (req, res) => {
  const { message } = req.body;
  const id = req.params.id;
  try {const updatemsg = await GroupMessages.updateOne(
      {_id:id},{$set: { msg: message },} );
    res.status(200).send({ response: updatemsg });
  } catch (error) { console.log(error); }};
  const Allgmsgs = async(req, res) => {
    try {
      const response = await GroupMessages.find({});
      console.log(response, "response");
      res.status(201).send({ res: response });
    } catch (error) {
      console.log(error);
    }
  };
module.exports = {
  delgmsg,
  Allgmsgs,
  editGmsg,
  AllGroups,
  sendGmsg,
  getGroup,
  
  createGroup,
};
