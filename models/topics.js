const mongoose = require('mongoose');
const freeVideoLinks = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
];
const getran=()=>{
  const ran = Math.floor((Math.random()*10 ) )
  if( ran < freeVideoLinks.length) {return ran}  
  getran()

}
const getlink =()=>{
  // console.log(ran + " is random")
  return freeVideoLinks[getran()]

}
console.log(getlink() + "  is free random video link")
const topicSchema = new mongoose.Schema({
  allstudents: Number,
  name: String,
  cname: String,

  cid: String,
  videoid: {type:String,default:process.env.videoid},
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
  vlink: {type:String,default:getlink()},
  serial: Number,
  sn: Number,
});

module.exports = new mongoose.model('topic', topicSchema);
