const User = require("../models/user");
const Data = require("../models/data");

const Transact = require("../models/transaction");

const Category = require("../models/category");

function ord(number) {
  // Convert the number to a string
  const numStr = number.toString();

  // Get the last digit and the last two digits
  const lastDigit = numStr.slice(-1);
  const lastTwoDigits = numStr.slice(-2);

  // Determine the suffix based on the number
  if (
    lastTwoDigits === "11" ||
    lastTwoDigits === "12" ||
    lastTwoDigits === "13"
  ) {
    return number + "th";
  }

  switch (lastDigit) {
    case "1":
      return number + "st";
    case "2":
      return number + "nd";
    case "3":
      return number + "rd";
    default:
      return number + "th";
  }
}
const hasDateExpired = (dateString) => {
  // Parse the input date string into a Date object
  const inputDate = new Date(dateString);

  // Get the current date and time
  const now = new Date();

  // Compare the input date with the current date
  return inputDate < now;
};
function dmy() {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1);
  // const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  // const year = String(currentDate.getFullYear()).slice(-2);
  const year = String(currentDate.getFullYear());

  const formattedDate = `${day}:${month}:${year}`;
  return formattedDate;
}
function mandy() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1 to get the actual month
  const currentYear = currentDate.getFullYear();

  const my = currentMonth + ":" + currentYear;

  console.log(my);

  return my;

  // const uyu = await User.findOne({isturn:true})
  // return nextindexx;
}
function currentDate() {
  // Create a new Date object with the current time in UTC
  let ddate = new Date();

  // Adjust the timezone offset to your desired timezone
  // For example, GMT+1 (British Summer Time)
  ddate.setHours(ddate.getHours() + 1);

  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  // Format the date and time as a string
  const shortDateTime = weekday[ddate.getDay()] + "," + ddate.toLocaleString();

  return shortDateTime;
}
const greet = async(req, res, next) => {
  const obi = req.headers.apikey;
  console.log("new greeting request by " + new Date().toLocaleTimeString());

  if (obi == process.env.obi) {
    console.log("new greeting by " + new Date().toLocaleTimeString());
    const ddata = await Data.findOne({launchedparam : process.env.launchedparam})
 
        if(ddata){next()}
        else{
          console.log("moved to reset at" + new Date().toLocaleTimeString());
          
          res.json({ resetsystem: true });



        }

  } else {
    res.json({ bypass: true });
  }
};
const valid = (req, res, next) => {
  const obi = req.headers.apikey;
  if (obi == process.env.obi) {
    console.log("validated request by " + new Date().toLocaleTimeString());
    next();
  } else {
    res.json({ error: true });
  }
};
const adminvalid = async (req, res, next) => {
  const obi = req.headers.apikey;
  const userid = req.headers.userid;
  if (obi == process.env.obi) {
    console.log("validated request by " + new Date().toLocaleTimeString());
    const user = await User.findOne({userid,admin:true})
    if(user){
      next();
    }
    else{
      res.json({ error: true });

    }
  } else {
    res.json({ error: true });
  }
};


module.exports = {
  valid,greet,adminvalid
  
};
