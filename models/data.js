const mongoose = require("mongoose");
function money(amount) {
  var moneyFormat = Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "NGN",
  });
  const dr = "₦" + moneyFormat.split("NGN")[1];

  return dr;
}

const dataSchema = new mongoose.Schema({
  name: { type: String, default: "nil" },
  newestclient: { type: String, default: "nil" },
  absolute: { type: String, default: "nil" },
  laststudentsignuptime: { type: String, default: "yet to " },
  lastteachersignuptime: { type: String, default: "yet to " },
  laststudentsignup: { type: String, default: "yet to " },
  lastteachersignup: { type: String, default: "yet to " },
  launchedparam: { type: String, default: "nil" },
  videoid: { type: String, default: "1066628950" },
  newestclienttime: { type: String, default: "nil" },
  newestmarketertime: { type: String, default: "nil" },
  newestmarketer: { type: String, default: "nil" },
  dmininstallment: { type: String, default: "nil" },
  lastreset: { type: String, default: "nil" },
  mandy: { type: String, default: "nil" },
  lastresetby: { type: String, default: "nil" },
  dtotal: { type: String, default: money(0) },
  total: { type: Number, default: 0 },
  adminprofit: { type: Number, default: 0 },
  teacherprofit: { type: Number, default: 0 },
  inflow: { type: Number, default: 0 },
  dadminprofit: { type: String, default: money(0) },
  dteacherprofit: { type: String, default: money(0) },
  dinflow: { type: String, default: money(0) },
  // month
  adminprofit_mandy: { type: Number, default: 0 },
  teacherprofit_mandy: { type: Number, default: 0 },
  inflow_mandy: { type: Number, default: 0 },
  dadminprofit_mandy: { type: String, default: money(0) },
  dteacherprofit_mandy: { type: String, default: money(0) },
  dinflow_mandy: { type: String, default: money(0) },


  dtotalmonth: { type: String, default: money(0) },
  checkmandy: { type: String, default: "" },
  totalmonth: { type: Number, default: 0 },
  usereset: { type: Number, default: 0 },
  youcent: { type: Number, default: 20 },
  timeout: { type: Number, default: 5 },
  courseauto: {
    type: Boolean,
    default: false,

  },
  tveri:{type: Boolean,default:false},

  maintenance: {
    type: Boolean,
    default: false,
  },
  online: {
    type: Boolean,
    default: false,
  },
  isdata: {
    type: Boolean,
    default: false,
  },
  plive: {
    type: Boolean,
    default: false,
  },
  allowide: {
    type: Boolean,
    default: false,
  },
  myide: {
    type: String,
    default: "welcome to codar institute integerated develpoment environment",
  },
});

module.exports = new mongoose.model("data", dataSchema);
