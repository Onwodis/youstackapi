const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  title: String,
  type: {
    type: String,
  },

  name: String,
 
  cname: String,
  cid: String,
  email: String,
  date: String,
  ordstring: Date,
  deposit: Boolean,
  withdrawal: Boolean,
  finaltotal: Number,
  courses: Number,
  initialtotal: Number,
  amount: Number,
  damount: String,
  reference: String,
  transid: String,
  teatransid: String,
  dmy: String,
  ip: String,
  cdmy: String,
  userid: String,
  mandy: String,
  update: Boolean,
  inflow: Boolean,
  outflow: Boolean,
  updateamount: Number,
  updateamountf: String,
  firstamount: String,
  updatetime: Date,
  updateby: String,
  updatebyemail: String,
  updatebyfirstemail: String,
  oldamount: Number,
  doldamount: String,
  aprofit: Number,
  tprofit: Number,
  amount: Number,
  damount: String,
  updatetimupdatetimes: Number,
  updateordstring: Date,
  firstpayment: Boolean,
  moved: Boolean,
  movequery: String,
  approvedby: String,
  former: Boolean,
  formername: String,
  formerchangeby: String,
  formertime: String,
  formeremail: String,
  timesbiodatachanged: Number,
  order: Number,
  orderb: String,
  student: String,
  ccid: String,
  studentid: String,
  paidby: String,
  matno: String,
  paidbyid: String,
  other: String,
  cmandy: String,youcent:String,
  teacherid:String,
  teacher:String,

  salesid: String,
});

module.exports = mongoose.model('Teatransaction', transactionSchema);















