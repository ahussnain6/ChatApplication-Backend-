const mongoose = require("mongoose");
const groupSchema = new mongoose.Schema({
  Groupname: {
    type: String,
    require: true,
  },
  adminId: {
    type: String,
    require: true,
  },
  groupmembers: {
    type: Array,
    require: true,
  },
});
const Groups = new mongoose.model("Group", groupSchema);
module.exports = Groups;
