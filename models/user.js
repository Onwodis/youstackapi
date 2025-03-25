const mongoose = require('mongoose')
function money(amount) {
  var moneyFormat = Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'NGN',
  });
  const dr = '₦' + moneyFormat.split('NGN')[1];

  return dr;
}
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  registeredon: String,
  passwordb: String,
  email: { type: String, lowercase: true },
  type: String,
  desc: String,
  ifalert: Boolean,
  isTeacher: Boolean,
  studentoo: Boolean,
  allowinstallments: Boolean,
  mininstallment: Number,
  dmininstallment: String,
  fromsales: Boolean,
  fromid: String,
  biz: String,
  firsttransid: String,
  firstcids: String,
  from: String,
  fromadmin: Boolean,
  fromself: Boolean,
  spent: {type:Number,default:0},
  dspent: {type:String,default:money(0)},
  cgpa: {type:Number,default:0},
  withdrawn: {type:Number,default:0},
  dwithdrawn: {type:String,default:money(0)},
  rating: Number,
  matno :String,
  progress: Number,
  test: Number,
  exam: Number,tempcode:String,

  batchname: String,
  cname: String,
  cid: String,
  enddate: String,
  bid: String,
  dobstring: Date,
  ttt: Number, //total topics taught
  totaltopics: Number, //total topics taught
  ttm: Number, //total topics taught this month
  ttmandy: String, // reference string that carries month and year to check current month before computing ttt and ttm
  cname: String,
  courseupdate: String,
  cimage: String,
  teacher: String,
  teacherid: String,
  cdesc: String,
  attendance: Number,
  comp: Number,
  uncomp: Number,
  idle: Number,
  topics: Number,
  batches: Number,
  courses: Number,
  specialty: String,
  type: String,
  education: String,
  lastlogin: String,
  motivate: String,
  motivatedmy: String,
  addedby: String,
  physical: String,
  addedbyid: String,
  licenseid: String,
  branch: String,
  level: String,
  level: String,
  alert: String,
  ordstring: Date,
  lordstring: Date,
  created: String,
  pwrd: String,
  promokey: String,
  hpwrd: String,
  pwrdb: String,
  regdate: String,
  profit: Number,
  dprofit: String,
  initials: String,
  profit_mandy:String,
  dprofit_mandy: String,
  username: String,
  lmonths: Number,
  humanexpiry: String,
  javexpiry: Date,
  paytime: String,
  logindmy: String,
  logindmytimes: Number,
  bcourses: {type:Number,default:0},

  mode: String,
  regmonthandyear: String,
  host: Boolean,
  acos: Boolean,
  licensed: Boolean,

  converted: Number,
  weight: Number,
  failedaccess: Number,

  image: String,
  education: String,
  gender: String,
  registered: String,
  regDate: Date,
  lastchargeupdate: String,
  isAdmin: Boolean,
  admin: Boolean,
  isBuyer: Boolean,
  onlinecourses: Boolean,

  isturn: Boolean,
  isSeller: Boolean,
  isInvestor: Boolean,
  restrict: Boolean,
  cfm: Boolean,
  matricno: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course",
  },
  realattendance: String,
  rating: Number,
  cc: { type: Number, default: 0 },
  salesindex: Number,
  indexid: String,
  ticked: { type: Boolean, default: false },
  tickeddmy: { type: String, default: "nil" },
  attendtime: { type: String, default: "nil" },
  teacher: String,
  teacherid: String,
  tid: String,
  religion: String,
  dateofbirth: Date,
  nationality: String,
  stateoforigin: String,
  dateenrolled: Date,
  address: String,
  city: String,
  phone: String,
  // gender: String,
  state: String,
  age: Number,

  lastseen: String,
  country: String,
  tickday: String,
  reglink: String,
  regpin: String,
  regref: String,
  category: String,
  categoryid: String,
  name: String,
  registered: Boolean,
  firstpayment: Boolean,
  subscribed: Boolean,
  expiredate: String,
  expiredatestring: Date,
  payedfor: String,
  bankname: String,
  sortcode: String,
  accountnumber: Number,
  feestatus: String,
  paytime: String,
  paydate: String,
  signupmonth: String,
  clientlink: String,
  sn: Number,
  gsn: Number,
  signedup: Number,
  fee: Number,
  dfee: String,
  paid: Number,
  dpaid: String,
  indebt: Boolean,
  masterimage: String,
  cimage: String,
  slaveimage: String,
  newlogin: String,
  fname: String,
  lname: String,
  gender: String,
  firstemail: String,
  host: Boolean,
  isMarketer: Boolean,
  male: Boolean,
  female: Boolean,
  rwaccess: Boolean,
  cudaccess: Boolean,
  isSales: Boolean,
  isBiz: Boolean,
  rwaccess: Boolean,
  isCustomer: Boolean,
  isInvestor: Boolean,
  isAfl: Boolean,
  remember: Boolean,
  inprogress: Boolean,
  logintimes: {type:Number,default:0},
  newleads: Number,
  leads: Number,
  mandyleads: Number,
  dmyleads: Number,
  dmyconversions: Number,
  mandyconversions: Number,
  moment: String,
  momentago: String,
  fe: String,
  cid: String,
  questid: String,
  questadmin: Boolean,
  gamestarted: Boolean,
  preexpired: Boolean,
  expired: Boolean,
  ingame: Boolean,
  rollsn: Number,
  questhold: Number,
  dquesthold: String,
  questexpirestring: Date,
  questcreated: Date,
  questordstring: Date,

  loginord: Date,
  regdate: String,
  paymentref: String,
  payamount: Number,
  adminid: Number,
  tocash: Number,
  pick6loss: Number,
  pick6win: Number,
  totalloss: Number,
  totalwin: Number,
  total: Number,
  dtotal: String,
  singlelastseen: String,
  userid: String,
  playedget6: Boolean,
  ip: String,
  isClient: Boolean,
  firststoreid: String,
  firststore: String,
  isfirststore: Boolean,
  placedorder: Boolean,
  ipcountry: String,
  mandy: String,
  dmy: String,
  tblink: String,
  sellon: String,
  currentbizid: String,
  bizname: String,
  occupation: String,
  bizid: String,
  vision: String,
  address: String,
  clients: Number,
  salesearn: Number,
  nocat: Boolean,
  fromsales: Boolean,
  salesid: String,
  products: Number,
  presence: Number,
  subcats: Number,
  client: Boolean,
  pending: Boolean,
  clients: Number,
  reported: Boolean,
  reportedtimes: Number,
  rating: Number,
  trained: Boolean,
  userid: String,
  regfee: Number,
  paidregfee: Boolean,
  ifstore: Boolean,
  completedtraining: Boolean,
  completedtrainingdate: String,
  initt: Boolean,
  linkgenerated: String,
  saleslink: String,
  uri: String,
  dob: String,
  medium: String,
  dprogress: String,
  ordstring: Date,
  couponcode: Number,
  signedup: Number,
  wins: Number,
  dwins: String,
  losses: Number,
  students: Number,
  admin: Boolean,
  sadmin: Boolean,
  dlosses: String,
  registered: String,
  firstlogin: Boolean,
  accept: Boolean,
  aflname: String,
  promokey: String,
  aflid: String,
  
  fromafl: Boolean,
  firstsub: Boolean,
  discount: Boolean,
  isStudent: Boolean,
  dowe: String,
  tid: String,
  teacherid: String,
  owe: Number,
  transactions: Number,
  ifowe: Boolean,
  dobpassed: Boolean,
  allowcc: Boolean,

  formerbatch: String,
  lastmovedby: String,
  lastmovedate: String,
  movequery: String,
  moved: Boolean,
  vpending: Boolean,
  edited: Boolean,
  restricted: Boolean,
  editquery: String,
  timesmoved: Number,
  timesedited: Number,
  cc: Number,
  lastpayment: Number,
  dlastpayment: String,
  tableitems: Number,
  grace: Number,
  lastpaymentdate: String,
  lastpaymentstring: Date,
  duestring: Date,
  due: String,
  lastcron: String,
  twd: {
    type: Number,
    default: 0,
  },
  mwd: {
    type: Number,
    default: 0,
  },
  awd: {
    type: Number,
    default: 0,
  },
  leadsort: {
    type: String,
    default: "asc",
    enum: ["oldest", "newest", "asc", "desc"], //sorting orders specific to each user
  },
  transort: {
    //sorting order for transactions
    type: String,
    default: "newest",
    enum: ["oldest", "newest", "asc", "desc"],
  },
  studsort: {
    //sorting order for students
    type: String,
    default: "asc",
    enum: ["oldest", "newest", "asc", "desc"],
  },
  dreg: { type: String, default: "today" },
  lid: String,
  cmandy: String,
  branch: String,
  brid: String,
  sales: String,
  salesid: String,
  changedemailtimes: {type:Number,default:0},
  accountnumber: {type:Number,default:0},
  bank: {type:String,default:"nil"},
  bankid: {type:String,default:"nil"},
  compliance: {type:String,default:"nil"},
  useractions: {type:String,default:"nil"},
  changedemailstory: {type:String,default:"nil"},
  changednametimes: {type:Number,default:0},
  changednamestory: {type:String,default:"nil"},
  changedphonetimes: {type:Number,default:0},
  changedphonestory: {type:String,default:"nil"},
  cdmy: String,
  

  sdmy: String,
  smandy: String,
  newref: String,
  tpay: Number,
  ccode: Number,
  rating: Number,
  passwordupdated: Boolean,
  boughtcourses:{type: Number,default:0},
  lectures:{type: Number,default:0},
  host:{type: Boolean,default:false},
  verified:{type: Boolean,default:false},
  tveri:{type: Boolean,default:false},
  coursesort:{type: String,default:"asc"},
  teachersort:{type: String,default:"asc"},
  catsort:{type: String,default:"asc"},
  pwrdb: String,
  pwrd: String,
  ballowide: {
    type: Boolean,
    default: true,
  },
  allowide: {
    type: Boolean,
    default: false,
  },
  lasttestdmy: {
    type: String,
    default: "",
  },
  idetime: {
    type: String,
    default: "",
  },
  myide: {
    type: String,
    default: "welcome to YOUSTACK integerated development environment",
  },
  restricted: {
    type: Boolean,
    default: false,
  },
  online: {
    type: Boolean,
    default: false,
  },
  lastpwrdupdate: String,
  passtimes: { type: Number, default: 0 }
  
  //schema b starts below
});

module.exports = new mongoose.model('User', userSchema)