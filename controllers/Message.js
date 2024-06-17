const UploadPic = require("../models/uploadpic");
const Messages = require("../models/Msg");

const getMsg = async (req, res) => {
  try {
    const msgs = await Messages.find({});
    return res.status(200).send({ response: msgs });
  } catch (error) {
    console.log(error);
  }
};

const editmsg = async (req, res) => {
  const { message } = req.body;
  const id = req.params.id;
  try {
    const updatemsg = await Messages.updateOne(
      { _id: id },
      {
        $set: { msg: message },
      }
    );
    res.status(200).send({ response: updatemsg });
  } catch (error) {
    console.log(error);
  }
};

const delmsg = async (req, res) => {
  const id = req.params.id;
  try {
    const msg = await Messages.deleteOne({ _id: id });
    res.status(200).send({ response: `${id} Message Deleted` });
  } catch (error) {
    console.log(error);
  }
};

const sendmsg = async (req, res) => {
  const { receivername, receiverId, conversationId, senderId, msg } = req.body;
  try {
    const users = await Messages.create({
      receivername,
      receiverId,
      conversationId,
      senderId,
      msg,
    });
    return res.status(200).send({ response: users });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMsg,

  sendmsg,
  delmsg,
  editmsg,
};
