const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  allstudents: Number,

  name: String,
  cname: String,

  cid: String,
  tid: String,
  topid: String,
  title: String,
  subtopic: String,
  editedby: String,
  lastedit: String,
  lasteditby: String,
  lastedittime: String,
  createdby: String,
  timesedited: Number,

  ordstring: Date,
  created: Date,
  createddate: String,
  lastpaid: String,
  serial: Number,
  sn: Number,
});

module.exports = new mongoose.model('topic', topicSchema);
