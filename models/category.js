const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  category: String,
  sn: Number,
  ccid: Number,
  boughtcourses:{type: Number,default:0},
  manager: String,
  catid: String,
  createdby: String,
  desc: String,
  image: String,
  mname: String,
  cmandy: String,
 
  mandy: String,
  dmy: String,
  courses:{type:Number,default:0},
  students:{type:Number,default:0},
  cdmy: String,
  address:String,
  dateadded:String,
  addedby:String,
  brid:String,
  added:String,
  ordstring:Date,
  lastupdate:String,
  batches: Number,
  leads: Number,

  progress: {type:Number,default:0},
  dprogress: String,
  oname: String,
  teacher: String,
  space: String,
  brid: String,
  mode: String,batches:Number,
  rev:Number,
  drev:String,
  mrev:Number,
  dmrev:String,
  
  ordstring: Date,
  locked: { type: Boolean, default: false },
});

module.exports = new mongoose.model("Category", categorySchema);
