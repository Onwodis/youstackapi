const mongoose = require('mongoose');
function money(amount) {
  var moneyFormat = Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'NGN',
  });
  const dr = '₦' + moneyFormat.split('NGN')[1];

  return dr;
}
const courseSchema = new mongoose.Schema({
  allstudents:{type:Number,default:0},
  students:{type:Number,default:0},

  name: String,
  batches:{type:Number,default:0},
  category:String,
  catid: String,
  ccid:Number,
  students:{type:Number,default:0},
  topics:{type:Number,default:0},
  addedby: String,
  addedbyid: String,
  addedbytype: String,
  cid: String,
  intro: String,
  introlink: String,
  
  teacher: String,
  teacherid: String,
  profit:{type:Number,default:0},
  topics:{type:Number,default:0},

  editedby: String,
  lastedit: String,
  lasteditby: String,
  lastedittime: String,
  dummy:{type:Boolean,default:false},
  timesedited:{type:Number,default:0},
  leads:{type:Number,default:0},
  durationm: String,
  duration:{type:Number,default:0},
  expiredstudents:{type:Number,default:0},
  preexpiredstudents:{type:Number,default:0},
  dprofit: String,
  tid: String,
  teacherid: String,
  mandystudents:{type:Number,default:0},
  mstudents:{type:Number,default:0},
  rev: {type:Number,default:0},
  mrev: {type:Number,default:0},
  drev: {type:String ,default:money(0)},
  mdrev: {type:String ,default:money(0)},
  mandyleads:{type:Number,default:0},
  image: String,
  desc: String,
  sdesc: String,
  draw: String,
  price:{type:Number,default:0},
  attendance:{type:Number,default:0},
  dprice: String,
  ordstring: Date,
  created: Date,
  createddate: String,
  lastpaid: String,
  sn:{type:Number,default:0},
  deployed: Boolean,
  locked: Boolean,
  rating:{type:Number,default:3},
  reviews:{type:Number,default:500},
});

module.exports = new mongoose.model('course', courseSchema);
