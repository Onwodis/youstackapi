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
  launchedparam: { type: String, default: "nil" },
  newestclienttime: { type: String, default: "nil" },
  newestmarketertime: { type: String, default: "nil" },
  newestmarketer: { type: String, default: "nil" },
  dmininstallment: { type: String, default: "nil" },
  lastreset: { type: String, default: "nil" },
  lastresetby: { type: String, default: "nil" },
  dtotal: { type: String, default: money(0) },
  total: { type: Number, default: 0 },
  dtotalmonth: { type: String, default: money(0) },
  checkmandy: { type: String, default: "" },
  totalmonth: { type: Number, default: 0 },
  usereset: { type: Number, default: 0 },
  youcent: { type: Number, default: 20 },
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
