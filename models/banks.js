const mongoose = require('mongoose');
function money(amount) {
  var moneyFormat = Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'NGN',
  });
  const dr = '₦' + moneyFormat.split('NGN')[1];

  return dr;
}

const bankSchema = new mongoose.Schema({
  name: { type: String, default: 'nil' },
  sortcode: String,
  nuban: Boolean,
  bankid: String,
  ordstring: Date,
  created: String,
  
});
module.exports = new mongoose.model('bank', bankSchema);
