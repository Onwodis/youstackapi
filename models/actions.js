const mongoose = require("mongoose");

const actionSchema = new mongoose.Schema({
  master: String,
  masterid: String,
  slave: String,
  slaveid: String,
  ip: String,
  story: String,
  actionid: String,
  opid: String,
  when: String,
  slavestory: String,
  mastertype: String,
  slavetype: String,
  masterstory: String,
  masterfirstemail: String,
  slavefirstemail: String,
  actiontype: String,
  dmy: String,
  mandy: String,
  ordstring: Date,
  ifhost: Boolean,
  serious: Boolean,
  fromhost: Boolean,
});

module.exports = mongoose.model("action", actionSchema);
