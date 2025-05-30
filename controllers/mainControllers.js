const User = require('../models/user');
const { Vimeo } = require('vimeo');
const path = require('path');
const fs = require('fs');
const Transact = require('../models/transaction');
const Teatransact = require('../models/teatrans');
const Teacher = require('../models/teacher');
const Bank = require('../models/banks');
const Topic = require('../models/topics');
const client = new Vimeo(
  process.env.VIMEO_CLIENT_ID,
  process.env.VIMEO_CLIENT_SECRET,
  process.env.VIMEO_ACCESS_TOKEN
);
const Data = require('../models/data');
// const Support = require('../models/support');
const Paystack = require('paystack-node');
const axios = require('axios');
const Action = require('../models/actions');
const Actionb = require('../models/studactions');
const moment = require('moment');
const { nodem, nodemb } = require('../models/nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Course = require('../models/course');
const Mycourse = require('../models/mycourse');
const Category = require('../models/category');

const expiresIn = '2h'; // Token expiration time
// const expiresIn = 600; // Token expiration time
const plive = process.env.plive;
const paystackt = new Paystack(process.env.ptest);
const paystackk = new Paystack(process.env.plive);
const sec2 = process.env.sec2;
const api = process.env.api;
const WhatsAppLink = (val) => {
  const message = 'Hi, i am intrested in your products';

  const encodedMessage = encodeURIComponent(message);

  console.log('Encoded Message: ', encodedMessage + val);

  const dl = `https://wa.me/${val}?text=${encodedMessage}`;
  return dl;
};

function money(amount) {
  var moneyFormat = Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'NGN',
  });
  const dr = '₦' + moneyFormat.split('NGN')[1];

  return dr;
}
function addmonthsc(x) {
  const durationindays = 150;
  const dt = new Date();
  const dayy = dt.getDate();
  const monthh = dt.getMonth();
  const yearr = dt.getFullYear();
  const apogy = dayy + '.' + monthh + '.' + yearr;
  console.log(apogy + ' is apogy');
  let startdate = apogy;
  // startdate = '4.05.2023';
  var new_date = moment(startdate, 'DD-MM-YYYY').add(durationindays, 'days');
  var day = new_date.format('DD');
  var month = new_date.format('MM');
  var year = new_date.format('YYYY');

  const enddate = month + '/' + day + '/' + year;
  const formo = year + '/' + (Number(month) + 1) + '/' + Number(day);

  return enddate;
}

function addhumanmonths(x) {
  const durationindays = Number(x) * 30;
  const dt = new Date();
  const dayy = dt.getDate();
  const monthh = dt.getMonth();
  const yearr = dt.getFullYear();
  const apogy = dayy + '.' + monthh + '.' + yearr;
  console.log(apogy + ' is apogy');
  let startdate = apogy;
  // startdate = '4.05.2023';
  var new_date = moment(startdate, 'DD-MM-YYYY').add(durationindays, 'days');
  var day = new_date.format('DD');
  var month = new_date.format('MM');
  var year = new_date.format('YYYY');

  const enddate = Number(day) + '/' + (Number(month) + 1) + '/' + year;
  const formo = year + '/' + (Number(month) + 1) + '/' + Number(day);
  const fans = new Date(formo).toDateString();

  // console.log(day + '.' + month + '.' + year + ' from moment');

  return fans;
}
function sume(array, key) {
  // Use the reduce method to accumulate the sum
  return array.reduce((accumulator, currentObject) => {
    // Check if the current object has the specified key and its value is a number
    if (currentObject[key] && typeof currentObject[key] === 'number') {
      return accumulator + currentObject[key];
    }
    // If the key doesn't exist or the value is not a number, just return the accumulator
    return accumulator;
  }, 0);
}
function getserialnum(bh) {
  var oboi = Math.random() + 1;
  var num = Math.floor(oboi * bh);
  return num;
}
function ord(number) {
  // Convert the number to a string
  const numStr = number.toString();

  // Get the last digit and the last two digits
  const lastDigit = numStr.slice(-1);
  const lastTwoDigits = numStr.slice(-2);

  // Determine the suffix based on the number
  if (
    lastTwoDigits === '11' ||
    lastTwoDigits === '12' ||
    lastTwoDigits === '13'
  ) {
    return number + 'th';
  }

  switch (lastDigit) {
    case '1':
      return number + 'st';
    case '2':
      return number + 'nd';
    case '3':
      return number + 'rd';
    default:
      return number + 'th';
  }
}
function dmy() {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, '0');
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

  const my = currentMonth + ':' + currentYear;

  console.log(my);

  return my;

  // const uyu = await User.findOne({isturn:true})
  // return nextindexx;
}
// console.log('voucher  is ' + voucher());
function capitalise(x) {
  var b = x.charAt(0).toUpperCase() + x.slice(1);
  return b;
}
function cap(x) {
  var b = x.charAt(0).toUpperCase() + x.slice(1);
  return b;
}
function add30days() {
  const date = ifmonth();
  // console.log(date + " is date")
  return date;
}
function currentDate() {
  // Create a new Date object with the current time in UTC
  let ddate = new Date();

  // Adjust the timezone offset to your desired timezone
  // For example, GMT+1 (British Summer Time)
  ddate.setHours(ddate.getHours() + 1);

  const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  // Format the date and time as a string
  const shortDateTime = weekday[ddate.getDay()] + ',' + ddate.toLocaleString();

  return shortDateTime;
}
function sumof(a) {
  let totall = 0;
  let newa = [...a];
  // if (!Array.isArray(newa)) {
  //   newa = [newa];
  // }
  for (i = 0; i < a.length; i++) {
    totall = totall + a[i].totalpaid;
    // console.log(totall + " is totalpaid line 96");
  }
  // console.log(totall + ' is total paymentt');

  return totall;
  res.end();
}
function addMonths(monthsToAdd) {
  const currentDate = new Date();

  // Add months to the current date
  const futureDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + monthsToAdd,
    currentDate.getDate()
  );

  // Return the future date as a JavaScript Date object
  return futureDate;
}
const hasDateExpired = (dateString) => {
  // Parse the input date string into a Date object
  const inputDate = new Date(dateString);

  // Get the current date and time
  const now = new Date();

  // Compare the input date with the current date
  return inputDate < now;
};
const addMonthsToDate = (dateString, monthsToAdd) => {
  // Parse the input date string into a Date object
  const date = new Date(dateString);

  // Add the specified number of months
  date.setMonth(date.getMonth() + monthsToAdd);

  // Convert back to the required format
  return date.toISOString();
};
function checkexpiry(grabbedDate, monthsToAdd) {
  const currentDate = new Date();
  const grabbedDateObj = new Date(grabbedDate);

  // Check if the grabbed date has expired
  const baseDate = grabbedDateObj < currentDate ? currentDate : grabbedDateObj;

  // Add the specified number of months to the base date
  const futureDate = new Date(baseDate);
  futureDate.setMonth(futureDate.getMonth() + monthsToAdd);

  // Format the future date in ISO 8601 format with timezone offset
  return futureDate.toISOString();
}
const banks = [
  { name: 'Access Bank', sortCode: '044', nuban: true },
  { name: 'Citibank Nigeria', sortCode: '023', nuban: true },
  { name: 'Ecobank Nigeria', sortCode: '050', nuban: true },
  { name: 'Fidelity Bank', sortCode: '070', nuban: true },
  { name: 'First Bank of Nigeria', sortCode: '011', nuban: true },
  { name: 'First City Monument Bank (FCMB)', sortCode: '214', nuban: true },
  { name: 'Globus Bank', sortCode: '00103', nuban: true },
  { name: 'Guaranty Trust Bank (GTBank)', sortCode: '058', nuban: true },
  { name: 'Heritage Bank', sortCode: '030', nuban: true },
  { name: 'Keystone Bank', sortCode: '082', nuban: true },
  { name: 'Moniepoint Microfinance Bank', sortCode: '50931', nuban: true },
  { name: 'Opay Digital Services', sortCode: '105', nuban: true },
  { name: 'Optimus Bank', sortCode: '00121', nuban: true },
  { name: 'PalmPay', sortCode: '999991', nuban: true },
  { name: 'Parallex Bank', sortCode: '104', nuban: true },
  { name: 'Polaris Bank', sortCode: '076', nuban: true },
  { name: 'Providus Bank', sortCode: '101', nuban: true },
  { name: 'Stanbic IBTC Bank', sortCode: '221', nuban: true },
  { name: 'Standard Chartered Bank', sortCode: '068', nuban: true },
  { name: 'Sterling Bank', sortCode: '232', nuban: true },
  { name: 'SunTrust Bank', sortCode: '100', nuban: true },
  { name: 'Titan Trust Bank', sortCode: '102', nuban: true },
  { name: 'Union Bank of Nigeria', sortCode: '032', nuban: true },
  { name: 'United Bank for Africa (UBA)', sortCode: '033', nuban: true },
  { name: 'Unity Bank', sortCode: '215', nuban: true },
  { name: 'Wema Bank', sortCode: '035', nuban: true },
  { name: 'Zenith Bank', sortCode: '057', nuban: true },
];

function getDaysBetweenDates(start, end, dayName) {
  var result = [];
  var days = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
  var day = days[dayName.toLowerCase().substr(0, 3)];
  // Copy start date
  var current = new Date(start);
  // Shift to next of required days
  current.setDate(current.getDate() + ((day - current.getDay() + 7) % 7));
  // While less than end date, add dates to result array
  while (current < end) {
    result.push(new Date(+current));
    current.setDate(current.getDate() + 7);
  }
  return result;
}
function formatDateToCustomString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
function addMonths(startDate, months) {
  // Clone the start date to avoid mutating it
  let resultDate = new Date(startDate);

  // Add the months
  resultDate.setMonth(resultDate.getMonth() + months);

  // Return the result date in a custom format (YYYY-MM-DD)
  return formatDateToCustomString(resultDate);
}
function getRandomNumber() {
  return Math.floor(Math.random() * 600) + 1;
}
const motivationalStatements = [
  'Keep coding; every line brings you closer to mastery.',
  'Innovation begins with a single step. Take it today!',
  'Embrace challenges; they are your stepping stones to success.',
  'Your potential is limitless. Keep pushing boundaries.',
  'Every bug is a lesson. Learn and move forward.',
  'Success in tech is a marathon, not a sprint.',
  'Stay curious and keep exploring new technologies.',
  'Every problem has a solution. Keep searching.',
  'You are the future of technology. Make it bright!',
  'Believe in your code and yourself.',
  "Your perseverance today will shape tomorrow's innovations.",
  'The world needs your unique tech vision.',
  'Continuous learning is the key to tech success.',
  'Your dedication sets you apart. Keep going!',
  'Every project completed is a milestone achieved.',
  'Collaborate and grow together in this tech journey.',
  'Your creativity will drive technological advancements.',
  'Stay passionate about your tech goals.',
  'Keep your code clean and your dreams big.',
  'In tech, every failure is a step to success.',
  'Your hard work will redefine technology.',
  'Never stop learning and evolving in tech.',
  'You have the power to change the tech world.',
  'Each line of code is a step closer to innovation.',
  'Your determination will lead to groundbreaking solutions.',
  'Stay focused and keep building amazing things.',
  'Your skills will shape the future of technology.',
  'Believe in the impact of your tech work.',
  "Keep pushing the boundaries of what's possible.",
  'Your tech journey is unique and valuable.',
  'Stay inspired and keep coding with passion.',
  'Every tech challenge is an opportunity in disguise.',
  "Your tech skills will create tomorrow's solutions.",
  'Keep experimenting and discovering new tech paths.',
  'Your innovation will drive the tech industry forward.',
  'Stay committed to your tech aspirations.',
  'Every day coding brings new opportunities.',
  'Your vision will transform the tech landscape.',
  'Keep striving for excellence in every project.',
  'Your persistence will lead to tech breakthroughs.',
  'Stay curious and explore new tech possibilities.',
  'Your hard work in tech will pay off.',
  'Keep building, learning, and growing in tech.',
  'Your tech skills are your superpower.',
  'Every effort you make in tech matters.',
  'Stay motivated and keep your code evolving.',
  'Your dedication will create future tech innovations.',
  'Keep dreaming big in the tech world.',
  'Your passion for tech will lead to success.',
  'Stay focused and keep your code running.',
  'Every line of code is a step forward.',
  'Your tech journey is full of potential.',
  'Keep coding and keep believing in yourself.',
  'Your determination will lead to tech greatness.',
  'Stay positive and keep building amazing things.',
  'Your tech skills will change the world.',
  'Keep pushing forward and embrace every challenge.',
  'Your hard work will shape the future of tech.',
  'Stay motivated and keep your tech dreams alive.',
  'Your persistence will lead to tech success.',
  'Keep exploring and innovating in the tech world.',
  'Your vision will create a better tech future.',
  'Stay passionate and keep your code clean.',
  'Every tech challenge is a growth opportunity.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
  'Stay passionate and keep your code running.',
  'Every tech challenge is an opportunity for growth.',
  'Your dedication will lead to tech advancements.',
  'Keep coding and stay inspired every day.',
  'Your tech skills are a valuable asset.',
  'Stay focused and keep building great things.',
  'Your determination will lead to tech achievements.',
  'Keep learning and growing in your tech journey.',
  'Your innovation will drive future technologies.',
  'Stay committed to your tech goals.',
  'Every line of code brings new possibilities.',
  'Your persistence will create tech solutions.',
  'Keep dreaming and building in the tech world.',
  'Your passion for tech will lead to innovation.',
  'Stay curious and keep coding with purpose.',
  'Your dedication will transform the tech industry.',
  'Keep pushing the limits of technology.',
  'Your hard work will result in tech breakthroughs.',
  'Stay inspired and keep your code evolving.',
  'Your tech journey is full of opportunities.',
  'Keep believing in the power of your code.',
  'Your determination will lead to tech success.',
  'Stay positive and keep building your tech dreams.',
  'Your tech skills will shape the future.',
  'Keep pushing forward and embracing challenges.',
  'Your dedication will lead to tech greatness.',
  'Stay motivated and keep your tech vision alive.',
  'Your persistence will create groundbreaking solutions.',
  'Keep exploring and innovating in technology.',
  'Your vision will transform the tech landscape.',
];
const motivate = motivationalStatements[getRandomNumber()];
function getDatesBetweenb(start, end, dayOfWeeka, dayOfWeekb, y, z) {
  const daysOfWeekMap = {
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
    sun: 0,
  };

  // Map days of the week to numbers
  const targetDaya = daysOfWeekMap[dayOfWeeka.toLowerCase()];
  const targetDayb = daysOfWeekMap[dayOfWeekb.toLowerCase()];
  const resultDates = [];

  // Clone the start date to avoid mutating it
  let currentDate = new Date(start);
  currentDate.setUTCHours(y, 0, 0, 0);

  // Ensure the end date is a Date object
  const endDate = new Date(end);

  // Iterate over the dates
  while (currentDate <= endDate) {
    // Check if the current date matches the target days
    if (
      currentDate.getDay() === targetDaya ||
      currentDate.getDay() === targetDayb
    ) {
      // Create a clone of currentDate for hourb to avoid mutation issues
      const hourbDate = new Date(currentDate);
      hourbDate.setUTCHours(z, 0, 0, 0);

      resultDates.push({
        houra: new Date(currentDate), // Original date with time set to y
        hourb: hourbDate, // Modified date with time set to z
      });
    }

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return resultDates;
}
function getDatesBetween(start, end, dayOfWeek, y, z) {
  const daysOfWeekMap = {
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
    sun: 0,
  };

  const targetDay = daysOfWeekMap[dayOfWeek.toLowerCase()];
  const resultDates = [];

  // Clone the start date to avoid mutating it
  let currentDate = new Date(start);
  currentDate.setUTCHours(y, 0, 0, 0);
  // const zz = currentDate.setUTCHours(z, 0, 0, 0)

  // Ensure the end date is a Date object
  const endDate = new Date(end);

  // Iterate over the dates
  while (currentDate <= endDate) {
    if (currentDate.getDay() === targetDay) {
      const hourbDate = new Date(currentDate);
      hourbDate.setUTCHours(z, 0, 0, 0);

      resultDates.push({
        houra: new Date(currentDate), // Original date with time set to y
        hourb: hourbDate, // Modified date with time set to z
      });
    }
    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  }

  return resultDates;
}
function human(isoDateStr) {
  const date = new Date(isoDateStr);

  // Subtract one hour (60 minutes * 60 seconds * 1000 milliseconds)
  date.setTime(date.getTime() - 60 * 60 * 1000);

  // Convert to human-readable format
  return date.toLocaleString('en-US', {
    weekday: 'long', // Full weekday name
    year: 'numeric', // Full year
    month: 'long', // Full month name
    day: 'numeric', // Day of the month
    hour: 'numeric', // Hour (12-hour format)
    minute: 'numeric', // Minutes
    second: 'numeric', // Seconds
    timeZoneName: 'short', // Time zone abbreviation
  });
}
function bdp(dateString) {
  // Parse the input date string into a Date object
  const birthDate = new Date(dateString);

  // Get today's date
  const today = new Date();

  // Extract the month and day of the birthdate
  const birthMonth = birthDate.getUTCMonth(); // Month is 0-indexed
  const birthDay = birthDate.getUTCDate();

  // Create a date object for the person's birthday this year
  const thisYearBirthday = new Date(
    today.getUTCFullYear(),
    birthMonth,
    birthDay
  );

  // Check if the birthday has already passed
  return today >= thisYearBirthday;
}
function ord(number) {
  // Convert the number to a string
  const numStr = number.toString();

  // Get the last digit and the last two digits
  const lastDigit = numStr.slice(-1);
  const lastTwoDigits = numStr.slice(-2);

  // Determine the suffix based on the number
  if (
    lastTwoDigits === '11' ||
    lastTwoDigits === '12' ||
    lastTwoDigits === '13'
  ) {
    return number + 'th';
  }

  switch (lastDigit) {
    case '1':
      return number + 'st';
    case '2':
      return number + 'nd';
    case '3':
      return number + 'rd';
    default:
      return number + 'th';
  }
}
function sume(array, key) {
  // Use the reduce method to accumulate the sum
  return array.reduce((accumulator, currentObject) => {
    // Check if the current object has the specified key and its value is a number
    if (currentObject[key] && typeof currentObject[key] === 'number') {
      return accumulator + currentObject[key];
    }
    // If the key doesn't exist or the value is not a number, just return the accumulator
    return accumulator;
  }, 0);
}
const reactIntroductionTest = [
  {
    t1: [
      {
        question: 'What is JSX?',
        options: {
          a: 'A JavaScript extension',
          b: 'A CSS framework',
          c: 'A template language',
          d: 'A database query language',
          e: 'A JavaScript library',
        },
        correctAnswer: 'a',
      },
      {
        question: 'How do you define a React component?',
        options: {
          a: 'By using the `defineComponent` method',
          b: 'By using the `renderComponent` function',
          c: 'By creating a function or class',
          d: 'By using a JSX template',
          e: 'By writing HTML inside JavaScript',
        },
        correctAnswer: 'c',
      },
      {
        question: 'What is the difference between props and state?',
        options: {
          a: 'Props are mutable, state is immutable',
          b: 'Props are immutable, state is mutable',
          c: 'Props are global, state is local',
          d: 'Props are used for styling, state for logic',
          e: 'Props are functions, state is an object',
        },
        correctAnswer: 'b',
      },
      {
        question: 'Which of the following is a valid JSX element?',
        options: {
          a: '<div>Hello, world!</div>',
          b: "<section 'title'>",
          c: '<div>Hello; world!</div>',
          d: '<br>This is a line break</br>',
          e: '<img src=image.png>',
        },
        correctAnswer: 'a',
      },
      {
        question: 'How do you pass data between React components?',
        options: {
          a: 'Using refs',
          b: 'Using Redux',
          c: 'By passing state',
          d: 'By passing props',
          e: 'Using Context API',
        },
        correctAnswer: 'd',
      },
      {
        question: 'What is a class component in React?',
        options: {
          a: 'A component defined using ES6 classes',
          b: 'A functional component',
          c: 'A built-in component',
          d: 'A higher-order component',
          e: 'A component with state and lifecycle methods',
        },
        correctAnswer: 'a',
      },
      {
        question: 'How do you manage state in a React component?',
        options: {
          a: 'Using `this.props`',
          b: 'Using `this.state`',
          c: 'Using `this.data`',
          d: 'Using `this.manage`',
          e: 'Using `this.control`',
        },
        correctAnswer: 'b',
      },
      {
        question: "What does 'props' stand for in React?",
        options: {
          a: 'Property structure',
          b: 'Property components',
          c: 'Properties',
          d: 'Private state',
          e: 'Props and state',
        },
        correctAnswer: 'c',
      },
      {
        question: 'How do you render multiple elements in React?',
        options: {
          a: 'By using arrays',
          b: 'By wrapping elements in a div',
          c: 'By using `React.Fragment`',
          d: 'All of the above',
          e: 'By passing an object',
        },
        correctAnswer: 'd',
      },
      {
        question: 'What is the default value of state in React?',
        options: {
          a: 'null',
          b: 'undefined',
          c: 'An empty object',
          d: 'An empty array',
          e: 'false',
        },
        correctAnswer: 'c',
      },
      {
        question: 'How does React handle updates to the DOM?',
        options: {
          a: 'By directly modifying the DOM',
          b: 'By using the Virtual DOM',
          c: 'By reloading the entire page',
          d: 'By updating only the changed elements',
          e: 'By creating a new DOM tree',
        },
        correctAnswer: 'b',
      },
      {
        question: 'What is the purpose of keys in React?',
        options: {
          a: 'To identify unique elements in a list',
          b: 'To bind event handlers',
          c: 'To define CSS styles',
          d: 'To manage component state',
          e: 'To optimize component rendering',
        },
        correctAnswer: 'a',
      },
      {
        question:
          "What is the significance of the 'render' method in React class components?",
        options: {
          a: 'It initializes state',
          b: 'It returns the JSX for the component',
          c: 'It handles props',
          d: 'It manages event handlers',
          e: 'It updates the component',
        },
        correctAnswer: 'b',
      },
      {
        question: 'Which React hook is used to manage side effects?',
        options: {
          a: 'useState',
          b: 'useEffect',
          c: 'useContext',
          d: 'useReducer',
          e: 'useMemo',
        },
        correctAnswer: 'b',
      },
      {
        question: 'How do you conditionally render a component in React?',
        options: {
          a: 'Using the `if` statement inside JSX',
          b: 'Using ternary operators',
          c: 'Using the `switch` statement',
          d: 'Using `React.createElement()`',
          e: 'By creating multiple render methods',
        },
        correctAnswer: 'b',
      },
      {
        question: 'What is the purpose of `useState` in React?',
        options: {
          a: 'To define event handlers',
          b: "To store the component's state",
          c: 'To fetch data from APIs',
          d: 'To control component lifecycle',
          e: 'To manage CSS classes',
        },
        correctAnswer: 'b',
      },
      {
        question: 'What does the `setState` function do?',
        options: {
          a: 'Directly modifies state',
          b: 'Replaces the entire state object',
          c: 'Merges new state with existing state',
          d: 'Triggers a re-render',
          e: 'Both C and D',
        },
        correctAnswer: 'e',
      },
      {
        question: 'Which of the following is NOT a React lifecycle method?',
        options: {
          a: 'componentDidMount',
          b: 'componentWillUnmount',
          c: 'shouldComponentUpdate',
          d: 'componentDidRender',
          e: 'componentDidUpdate',
        },
        correctAnswer: 'd',
      },
      {
        question: 'What is the purpose of `useContext` in React?',
        options: {
          a: 'To share global state between components',
          b: 'To manage component state',
          c: 'To create event handlers',
          d: 'To fetch data from APIs',
          e: 'To define CSS styles',
        },
        correctAnswer: 'a',
      },
      {
        question: 'How do you prevent a re-render in React?',
        options: {
          a: 'Using `shouldComponentUpdate`',
          b: 'Using `PureComponent`',
          c: 'Using `React.memo`',
          d: 'All of the above',
          e: 'None of the above',
        },
        correctAnswer: 'd',
      },
      {
        question: 'What is `React.StrictMode` used for?',
        options: {
          a: 'To highlight potential problems in an app',
          b: 'To enforce strict coding standards',
          c: 'To optimize performance',
          d: 'To debug React components',
          e: 'To make state immutable',
        },
        correctAnswer: 'a',
      },
      {
        question: 'What is the purpose of `useReducer` in React?',
        options: {
          a: 'To fetch data from APIs',
          b: 'To manage complex state logic',
          c: 'To define component styles',
          d: 'To handle component lifecycle',
          e: 'To set up routing',
        },
        correctAnswer: 'b',
      },
      {
        question: 'How do you handle form submission in React?',
        options: {
          a: 'Using the `submitForm` method',
          b: 'Using the `handleForm` function',
          c: 'Using the `onSubmit` event handler',
          d: 'Using the `submit` attribute',
          e: 'Using the `formHandler` hook',
        },
        correctAnswer: 'c',
      },
      {
        question: 'What is the purpose of `React.Fragment`?',
        options: {
          a: 'To create a new React component',
          b: 'To return multiple elements without a wrapper',
          c: 'To define React component fragments',
          d: 'To manage state between components',
          e: 'To optimize performance',
        },
        correctAnswer: 'b',
      },
      {
        question: 'How do you lift state up in React?',
        options: {
          a: 'By passing props down to child components',
          b: 'By passing data from child to parent component',
          c: 'By using `useContext` to share state',
          d: 'By using Redux',
          e: 'By using `useEffect`',
        },
        correctAnswer: 'b',
      },
      {
        question: 'What does `componentWillUnmount` do?',
        options: {
          a: 'It renders the component',
          b: "It resets the component's state",
          c: 'It cleans up resources before the component is removed',
          d: 'It updates the component',
          e: 'It manages prop changes',
        },
        correctAnswer: 'c',
      },
      // Questions 26 - 50 are similar and can be added below
    ],
  },
  {
    t2: [
      {
        question: 'What is a React class component?',
        options: {
          a: 'A function that renders JSX',
          b: 'A class that extends `React.Component`',
          c: 'A class that uses hooks',
          d: 'A CSS class in React',
          e: 'A JavaScript object',
        },
        correctAnswer: 'b',
      },
      {
        question: 'How do you define state in a class component?',
        options: {
          a: 'By using the `useState` hook',
          b: 'By setting the `state` property in the constructor',
          c: 'By using the `setState` function',
          d: 'By defining a state object outside the class',
          e: 'By using Redux',
        },
        correctAnswer: 'b',
      },
      {
        question:
          'Which lifecycle method is called when a component is first rendered?',
        options: {
          a: 'componentWillUnmount',
          b: 'componentDidMount',
          c: 'render',
          d: 'componentDidUpdate',
          e: 'componentWillUpdate',
        },
        correctAnswer: 'b',
      },
      {
        question:
          'What is the main purpose of the render() method in class components?',
        options: {
          a: 'To update the DOM directly',
          b: 'To handle side effects',
          c: 'To return JSX that defines the UI',
          d: 'To manage component state',
          e: 'To bind event handlers',
        },
        correctAnswer: 'c',
      },
      {
        question: 'How do you bind event handlers in class components?',
        options: {
          a: 'By using arrow functions',
          b: 'By calling `this.bind()` in the constructor',
          c: 'By using `bindEvent()`',
          d: 'By using `addEventListener`',
          e: 'Using event.target',
        },
        correctAnswer: 'b',
      },
      {
        question:
          'Which method is used to update the state in class components?',
        options: {
          a: 'this.setState()',
          b: 'this.updateState()',
          c: 'useEffect()',
          d: 'this.changeState()',
          e: 'this.stateChange()',
        },
        correctAnswer: 'a',
      },
      {
        question: 'What does `this.state` represent in a class component?',
        options: {
          a: 'Props passed to the component',
          b: "The component's current state",
          c: 'The default state of the application',
          d: 'Event handlers',
          e: 'External data fetched from an API',
        },
        correctAnswer: 'b',
      },
      {
        question: 'How do you pass props to a class component?',
        options: {
          a: 'By using `this.setProps()`',
          b: 'By passing props as arguments',
          c: 'By accessing `this.props` inside the component',
          d: 'By using `useContext`',
          e: 'By setting props in the state',
        },
        correctAnswer: 'c',
      },
      {
        question:
          'Which method is called when a class component is removed from the DOM?',
        options: {
          a: 'componentDidMount',
          b: 'componentDidUpdate',
          c: 'componentWillUnmount',
          d: 'componentWillMount',
          e: 'shouldComponentUpdate',
        },
        correctAnswer: 'c',
      },
      {
        question: 'How do you conditionally render a class component?',
        options: {
          a: 'By using `componentWillRender()`',
          b: 'By returning null in the `render()` method',
          c: 'By using an `if` statement in the `render()` method',
          d: 'By using `this.shouldRender()`',
          e: 'By using the `componentDidRender()` method',
        },
        correctAnswer: 'c',
      },
      {
        question:
          'Which of the following is NOT a class component lifecycle method?',
        options: {
          a: 'componentDidUpdate',
          b: 'componentDidCatch',
          c: 'componentWillReceiveProps',
          d: 'useEffect',
          e: 'componentWillUnmount',
        },
        correctAnswer: 'd',
      },
      {
        question: 'What is the default return value of the `render()` method?',
        options: {
          a: 'A JavaScript object',
          b: 'A DOM node',
          c: 'A string',
          d: 'A React element',
          e: 'An HTML element',
        },
        correctAnswer: 'd',
      },
      {
        question:
          'What is the significance of the `super()` function in a class component?',
        options: {
          a: 'It binds the `this` keyword to the component',
          b: "It initializes the component's state",
          c: 'It calls the constructor of the parent class',
          d: 'It adds lifecycle methods',
          e: 'It allows accessing props',
        },
        correctAnswer: 'c',
      },
      {
        question:
          'How do you update the component state asynchronously in class components?',
        options: {
          a: 'By using async/await inside `setState()`',
          b: 'By using promises in `setState()`',
          c: 'By passing a function to `setState()`',
          d: 'By using `componentDidUpdate()`',
          e: 'By using `componentWillMount()`',
        },
        correctAnswer: 'c',
      },
      {
        question: 'What does the `shouldComponentUpdate()` method do?',
        options: {
          a: 'Forces the component to update',
          b: 'Determines whether the component should update or not',
          c: 'Stops the component from updating',
          d: "Checks if the component's state has changed",
          e: 'Renders the component conditionally',
        },
        correctAnswer: 'b',
      },
      {
        question:
          'What is the correct way to handle errors in class components?',
        options: {
          a: 'Using `componentDidCatch()`',
          b: 'Using try/catch in `render()`',
          c: 'Using `errorBoundary()`',
          d: 'Using `catchComponent()`',
          e: 'Using a custom hook',
        },
        correctAnswer: 'a',
      },
      {
        question: 'How do you initialize the state of a class component?',
        options: {
          a: 'In the `render()` method',
          b: 'In the `constructor()` method',
          c: 'In the `componentDidMount()` method',
          d: 'In the `shouldComponentUpdate()` method',
          e: 'Using the `useState()` hook',
        },
        correctAnswer: 'b',
      },
      {
        question:
          'Which method is used to force a re-render in a class component?',
        options: {
          a: 'forceRender()',
          b: 'this.forceUpdate()',
          c: 'this.setState()',
          d: 'this.forceRefresh()',
          e: 'reRender()',
        },
        correctAnswer: 'b',
      },
      {
        question: 'How can you prevent a class component from re-rendering?',
        options: {
          a: 'Using `shouldComponentUpdate()`',
          b: 'Using `forceUpdate()`',
          c: 'Using `componentWillUpdate()`',
          d: 'By returning false in `componentDidUpdate()`',
          e: 'Using `setState()` with null',
        },
        correctAnswer: 'a',
      },
      {
        question:
          'What is the purpose of `getDerivedStateFromProps()` in a class component?',
        options: {
          a: "To initialize the component's props",
          b: 'To update the state based on props',
          c: 'To handle side effects',
          d: 'To fetch data from an API',
          e: 'To manage state changes',
        },
        correctAnswer: 'b',
      },
      {
        question:
          'How do you pass methods from a parent class component to a child component?',
        options: {
          a: 'By using the `bind()` method',
          b: 'By passing the method as a prop',
          c: 'By accessing the method through `this`',
          d: 'By using the `useContext()` hook',
          e: 'By defining the method inside the child component',
        },
        correctAnswer: 'b',
      },
      {
        question: 'What does the `componentWillReceiveProps()` method do?',
        options: {
          a: 'Triggers an update when props change',
          b: 'Removes the component from the DOM',
          c: "Resets the component's state",
          d: 'Fetches new data when props are updated',
          e: 'Prevents the component from rendering',
        },
        correctAnswer: 'a',
      },
      {
        question:
          "Which method is called after a class component's state changes?",
        options: {
          a: 'componentWillMount',
          b: 'componentWillReceiveState',
          c: 'componentDidMount',
          d: 'componentDidUpdate',
          e: 'shouldComponentUpdate',
        },
        correctAnswer: 'd',
      },
      {
        question: 'How do you create a class component that has no state?',
        options: {
          a: 'By defining it as a stateless component',
          b: 'By setting `this.state` to null',
          c: 'By returning null from the `render()` method',
          d: 'By omitting the `constructor()`',
          e: 'By not defining `this.state`',
        },
        correctAnswer: 'e',
      },
      {
        question:
          'What is the purpose of the `static` keyword in a class component?',
        options: {
          a: 'To declare static methods that can be called without instantiating the class',
          b: 'To define properties shared across all instances',
          c: "To initialize the component's state",
          d: 'To handle side effects',
          e: 'To define a constant value',
        },
        correctAnswer: 'a',
      },
      // Questions 26 - 50 will continue similarly
    ],
  },
];
const deleteFilesInFolder = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Error reading folder ${folderPath}:`, err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting file ${filePath}:`, err);
        } else {
          console.log(`Deleted: ${filePath}`);
        }
      });
    });
  });
};

const publicPath = path.join(__dirname, '..', 'public');
const categoriesPath = path.join(publicPath, 'categories');
const courseImagesPath = path.join(publicPath, 'courseimages');
const compliancePath = path.join(publicPath, 'compliance');

const categg = [
  {
    name: 'Web development',
    ccid: 1,
    image: 'web.jpeg',
    catid: 'categ4565768',
    desc: 'Learn various web development methodologies',
  },
  {
    name: 'Business',
    ccid: 2,
    image: 'business.jpeg',
    catid: 'cate14349877',
    desc: 'Learn various Business methodologies',
  },
  {
    name: 'Marketing',
    ccid: 3,
    image: 'marketing.jpeg',
    catid: 'ca40033768',
    desc: 'Learn various Marketing methodologies',
  },
  {
    name: 'Design',
    ccid: 4,
    image: 'design.jpeg',
    catid: 'cat46311768',
    desc: 'Learn various Design methodologies',
  },
];
const savedcourses = [
  {
    name: 'React',
    category: 'Web Development',
    sdesc: 'Master React and build dynamic web applications.',
    ccid: 1,
    image: process.env.api + 'club/rnative.png',
    topics: [
      {
        topic: 'Introduction to React',
        subtopics: ['JSX Basics', 'Component Structure', 'Props and State'],
      },
      {
        topic: 'React Components',
        subtopics: [
          'Class Components',
          'Functional Components',
          'Component Lifecycle',
        ],
      },
      {
        topic: 'Hooks',
        subtopics: ['useState', 'useEffect', 'Custom Hooks'],
      },
      {
        topic: 'React Router',
        subtopics: ['Routing Basics', 'Dynamic Routing', 'Route Parameters'],
      },
      {
        topic: 'State Management',
        subtopics: ['Context API', 'Redux', 'MobX'],
      },
    ],
    desc: 'React is a popular JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.',
  },
  {
    name: 'Node.js',
    ccid: 1,
    image: process.env.api + 'club/node.png',
    sdesc: 'Learn Node.js to create scalable backend services.',
    topics: [
      {
        topic: 'Introduction to Node.js',
        subtopics: [
          'What is Node.js?',
          'Node.js Architecture',
          'Event-Driven Programming',
        ],
      },
      {
        topic: 'Node.js Modules',
        subtopics: ['Core Modules', 'Creating Modules', 'Using NPM'],
      },
      {
        topic: 'Express.js',
        subtopics: ['Setting up Express', 'Routing', 'Middleware'],
      },
      {
        topic: 'Database Integration',
        subtopics: ['MongoDB with Mongoose', 'PostgreSQL', 'MySQL'],
      },
      {
        topic: 'Error Handling',
        subtopics: ['Error Middleware', 'Custom Errors', 'Debugging'],
      },
    ],
    desc: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It is designed to build scalable network applications, offering high performance and support for asynchronous programming.",
  },
  {
    name: 'Cybersecurity',
    image: process.env.api + 'club/cybb.jpeg',
    ccid: 1,
    sdesc: 'Explore cybersecurity and protect digital systems.',

    topics: [
      {
        topic: 'Introduction to Cybersecurity',
        subtopics: [
          'Understanding Threats',
          'Cybersecurity Fundamentals',
          'Types of Attacks',
        ],
      },
      {
        topic: 'Network Security',
        subtopics: ['Firewalls', 'VPNs', 'Intrusion Detection Systems'],
      },
      {
        topic: 'Cryptography',
        subtopics: [
          'Encryption Techniques',
          'Digital Signatures',
          'Public Key Infrastructure',
        ],
      },
      {
        topic: 'Security Best Practices',
        subtopics: [
          'Secure Coding Practices',
          'Access Control',
          'Incident Response',
        ],
      },
      {
        topic: 'Ethical Hacking',
        subtopics: [
          'Penetration Testing',
          'Vulnerability Assessment',
          'Ethical Hacking Tools',
        ],
      },
    ],
    desc: 'Cybersecurity involves protecting systems, networks, and programs from digital attacks. It is essential to safeguard and maintain sensitive information in a connected world.',
  },
  {
    name: 'PHP',
    ccid: 1,
    sdesc: 'Get started with PHP for web development.',

    image: process.env.api + 'club/phpresized.jpg',
    topics: [
      {
        topic: 'Introduction to PHP',
        subtopics: [
          'PHP Syntax',
          'Variables and Data Types',
          'Control Structures',
        ],
      },
      {
        topic: 'Working with Databases',
        subtopics: ['MySQL and PHP', 'CRUD Operations', 'PDO vs MySQLi'],
      },
      {
        topic: 'PHP Functions and OOP',
        subtopics: [
          'Defining Functions',
          'Classes and Objects',
          'Inheritance and Interfaces',
        ],
      },
      {
        topic: 'File Handling',
        subtopics: ['Reading Files', 'Writing Files', 'File Uploads'],
      },
      {
        topic: 'Sessions and Cookies',
        subtopics: ['Session Management', 'Cookies Basics', 'Secure Sessions'],
      },
    ],
    desc: 'PHP is a popular server-side scripting language designed for web development. It can also be used as a general-purpose language and is known for its ease of use and integration with various databases.',
  },
  {
    name: 'Python',
    ccid: 1,
    image: process.env.api + 'club/python.jpg',
    sdesc: 'Learn Python for data science, automation, and web development.',
    topics: [
      {
        topic: 'Introduction to Python',
        subtopics: ['Python Basics', 'Data Types', 'Control Flow'],
      },
      {
        topic: 'Python Functions',
        subtopics: ['Defining Functions', 'Lambda Functions', 'Error Handling'],
      },
      {
        topic: 'Object-Oriented Programming',
        subtopics: ['Classes and Objects', 'Inheritance', 'Polymorphism'],
      },
      {
        topic: 'Data Handling',
        subtopics: ['File I/O', 'Data Serialization', 'Regular Expressions'],
      },
      {
        topic: 'Libraries and Frameworks',
        subtopics: ['NumPy', 'Pandas', 'Flask', 'Django'],
      },
    ],
    desc: 'Python is a versatile, high-level programming language known for its readability and simplicity. It is widely used in web development, data science, automation, and machine learning.',
  },
  {
    name: 'Web Development (Front-end)',
    ccid: 1,
    sdesc: 'Become proficient in front-end web development.',

    image: process.env.api + 'club/fend.jpeg',
    topics: [
      {
        topic: 'HTML and CSS',
        subtopics: ['HTML Structure', 'CSS Basics', 'Responsive Design'],
      },
      {
        topic: 'JavaScript Basics',
        subtopics: [
          'DOM Manipulation',
          'Events and Functions',
          'AJAX and APIs',
        ],
      },
      {
        topic: 'Front-End Frameworks',
        subtopics: ['Bootstrap', 'React', 'Vue.js'],
      },
      {
        topic: 'Advanced CSS',
        subtopics: ['Flexbox', 'CSS Grid', 'Animations'],
      },
      {
        topic: 'Performance Optimization',
        subtopics: ['Minification', 'Lazy Loading', 'Image Optimization'],
      },
    ],
    desc: 'Front-end development involves building the visual elements of a website or application that users interact with. This includes using HTML, CSS, and JavaScript to create responsive and dynamic user interfaces.',
  },
  {
    name: 'Project Management',
    ccid: 2,
    sdesc: 'Develop project management skills for successful execution.',

    image: process.env.api + 'club/projectmanagement.jpeg',
    topics: [
      {
        topic: 'Introduction to Project Management',
        subtopics: [
          'Project Lifecycle',
          'Project Planning',
          'Project Scheduling',
        ],
      },
      {
        topic: 'Agile Methodology',
        subtopics: ['Scrum Framework', 'Sprint Planning', 'Kanban Board'],
      },
      {
        topic: 'Risk Management',
        subtopics: [
          'Identifying Risks',
          'Risk Mitigation Strategies',
          'Risk Analysis',
        ],
      },
      {
        topic: 'Project Documentation',
        subtopics: [
          'Project Charter',
          'Requirements Documentation',
          'Status Reports',
        ],
      },
      {
        topic: 'Stakeholder Management',
        subtopics: [
          'Communication Plans',
          'Engagement Strategies',
          'Conflict Resolution',
        ],
      },
    ],
    desc: 'Project management involves planning, executing, and overseeing projects to achieve specific goals within a set timeframe and budget. It ensures that projects are completed efficiently and effectively while meeting predefined objectives.',
  },
  {
    name: 'Digital Marketing',
    sdesc: 'Master digital marketing strategies to grow businesses.',
    ccid: 3,

    image: process.env.api + 'club/dm.jpg',
    topics: [
      {
        topic: 'Introduction to Digital Marketing',
        subtopics: ['SEO Basics', 'Content Marketing', 'Social Media Strategy'],
      },
      {
        topic: 'Search Engine Optimization (SEO)',
        subtopics: ['Keyword Research', 'On-Page SEO', 'Link Building'],
      },
      {
        topic: 'Social Media Advertising',
        subtopics: [
          'Facebook Ads',
          'Instagram Ads',
          'LinkedIn Ads',
          'Ad Targeting',
        ],
      },
      {
        topic: 'Email Marketing',
        subtopics: ['Building an Email List', 'Email Campaigns', 'Automation'],
      },
      {
        topic: 'Web Analytics',
        subtopics: [
          'Google Analytics',
          'Conversion Tracking',
          'Customer Insights',
          'Measuring ROI',
        ],
      },
    ],
    desc: 'Digital marketing leverages the internet and online platforms to promote products and services. It includes strategies like SEO, social media marketing, email campaigns, and web analytics to reach and engage customers.',
  },
  {
    name: 'Data Science',
    ccid: 2,
    sdesc: 'Dive into data science and uncover valuable insights.',

    image: process.env.api + 'club/datana.jpeg',
    topics: [
      {
        topic: 'Introduction to Data Science',
        subtopics: [
          'Data Science Workflow',
          'Data Collection and Cleaning',
          'Data Visualization',
          'Exploratory Data Analysis',
        ],
      },
      {
        topic: 'Statistics for Data Science',
        subtopics: [
          'Descriptive Statistics',
          'Probability Theory',
          'Hypothesis Testing',
          'Regression Analysis',
        ],
      },
      {
        topic: 'Machine Learning',
        subtopics: [
          'Supervised Learning',
          'Unsupervised Learning',
          'Classification and Regression',
          'Neural Networks',
        ],
      },
      {
        topic: 'Working with Big Data',
        subtopics: ['Hadoop', 'Spark', 'Data Lakes', 'Cloud Data Solutions'],
      },
      {
        topic: 'Data Science Tools',
        subtopics: [
          'Python for Data Science',
          'R Programming',
          'SQL',
          'Data Analysis with Pandas',
        ],
      },
    ],
    desc: 'Data science involves extracting insights from structured and unstructured data using scientific methods, processes, algorithms, and systems. It combines domain expertise, programming skills, and knowledge of statistics to uncover patterns and insights.',
  },
  {
    name: 'Django',
    ccid: 1,
    sdesc: 'Learn Django to build powerful web applications.',

    image: process.env.api + 'club/django.jpg',
    topics: [
      {
        topic: 'Introduction to Django',
        subtopics: ['Django Overview', 'Setting up Django', 'MVC Pattern'],
      },
      {
        topic: 'Django Models',
        subtopics: [
          'Creating Models',
          'Database Migrations',
          'Model Relationships',
        ],
      },
      {
        topic: 'Django Views and Templates',
        subtopics: [
          'Creating Views',
          'Using Templates',
          'Template Inheritance',
        ],
      },
      {
        topic: 'Django Forms',
        subtopics: [
          'Creating Forms',
          'Form Validation',
          'Handling Form Submissions',
        ],
      },
      {
        topic: 'Django Admin Interface',
        subtopics: ['Customizing Admin', 'Admin Models', 'Admin Permissions'],
      },
    ],
    desc: "Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. It follows the 'batteries-included' philosophy and comes with a variety of built-in features for web development.",
  },
  {
    ccid: 1,
    name: 'Ruby on Rails',
    sdesc: 'Build scalable web applications with Ruby on Rails.',
    image: process.env.api + 'club/ror.jpeg',
    topics: [
      {
        topic: 'Introduction to Rails',
        subtopics: [
          'Rails Architecture',
          'Getting Started with Rails',
          'MVC Pattern',
        ],
      },
      {
        topic: 'Rails Models',
        subtopics: ['Creating Models', 'Active Record', 'Associations'],
      },
      {
        topic: 'Rails Controllers and Views',
        subtopics: [
          'Creating Controllers',
          'Views and Layouts',
          'RESTful Routes',
        ],
      },
      {
        topic: 'Rails Forms and Validations',
        subtopics: ['Creating Forms', 'Validations', 'Handling Form Data'],
      },
      {
        topic: 'Rails Authentication',
        subtopics: ['Devise Gem', 'User Authentication', 'Authorization'],
      },
    ],
    desc: 'Ruby on Rails is a web application framework written in Ruby. It emphasizes convention over configuration and follows the MVC pattern to create dynamic web applications with ease.',
  },
  {
    ccid: 1,
    name: 'GraphQL',
    sdesc: 'Master GraphQL for efficient API development.',
    image: process.env.api + 'club/graphql.jpeg',
    topics: [
      {
        topic: 'Introduction to GraphQL',
        subtopics: [
          'GraphQL Basics',
          'Schema Definition',
          'Queries and Mutations',
        ],
      },
      {
        topic: 'GraphQL Queries',
        subtopics: ['Writing Queries', 'Query Parameters', 'Fragments'],
      },
      {
        topic: 'GraphQL Mutations',
        subtopics: [
          'Creating Mutations',
          'Handling Input Types',
          'Response Types',
        ],
      },
      {
        topic: 'GraphQL Subscriptions',
        subtopics: [
          'Real-Time Updates',
          'Setting Up Subscriptions',
          'Handling Subscription Data',
        ],
      },
      {
        topic: 'Integrating with React',
        subtopics: ['Apollo Client', 'Relay', 'Query Hooks'],
      },
    ],
    desc: 'GraphQL is a query language for APIs and a server-side runtime for executing queries by specifying the structure of the response. It allows clients to request only the data they need and nothing more.',
  },
  {
    ccid: 1,
    name: 'Java',
    image: process.env.api + 'club/java.jpg',
    sdesc: 'Master Java for building robust applications.',
    topics: [
      {
        topic: 'Introduction to Java',
        subtopics: ['Java Basics', 'Data Types and Variables', 'Control Flow'],
      },
      {
        topic: 'Object-Oriented Programming',
        subtopics: ['Classes and Objects', 'Inheritance', 'Polymorphism'],
      },
      {
        topic: 'Java Collections Framework',
        subtopics: ['Lists and Sets', 'Maps', 'Iterators'],
      },
      {
        topic: 'Java Concurrency',
        subtopics: [
          'Threads and Executors',
          'Synchronization',
          'Concurrency Utilities',
        ],
      },
      {
        topic: 'Java I/O',
        subtopics: ['File Handling', 'Streams', 'Serialization'],
      },
    ],
    desc: 'Java is a high-level, class-based programming language that is designed to have as few implementation dependencies as possible. It is widely used for building cross-platform applications, from mobile apps to enterprise systems.',
  },

  {
    name: 'Flutter',
    ccid: 1,
    image: process.env.api + 'club/flutter-3.png',
    sdesc: 'Create cross-platform mobile apps using Flutter.',
    topics: [
      {
        topic: 'Introduction to Flutter',
        subtopics: [
          'Flutter Basics',
          'Widgets and Layouts',
          'State Management',
        ],
      },
      {
        topic: 'Flutter Widgets',
        subtopics: ['Built-in Widgets', 'Custom Widgets', 'Widget Lifecycle'],
      },
      {
        topic: 'Dart Programming Language',
        subtopics: [
          'Dart Basics',
          'Asynchronous Programming',
          'Error Handling',
        ],
      },
      {
        topic: 'Flutter Navigation',
        subtopics: [
          'Routing and Navigation',
          'Passing Data',
          'Navigation Drawer',
        ],
      },
      {
        topic: 'Flutter and Firebase',
        subtopics: ['Firebase Integration', 'Authentication', 'Firestore'],
      },
    ],
    desc: 'Flutter is an open-source UI software development toolkit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.',
  },
  {
    name: 'Docker',
    ccid: 1,
    sdesc: 'Master Java for building robust applications.',
    image: process.env.api + 'club/docker.jpg',
    topics: [
      {
        topic: 'Introduction to Docker',
        subtopics: [
          'Docker Basics',
          'Containers vs Virtual Machines',
          'Docker Architecture',
        ],
      },
      {
        topic: 'Docker Installation',
        subtopics: ['Installing Docker', 'Docker CLI Basics', 'Docker Compose'],
      },
      {
        topic: 'Docker Images',
        subtopics: ['Creating Images', 'Dockerfile', 'Image Management'],
      },
      {
        topic: 'Docker Containers',
        subtopics: [
          'Running Containers',
          'Container Management',
          'Data Volumes',
        ],
      },
      {
        topic: 'Docker Networking',
        subtopics: [
          'Network Types',
          'Connecting Containers',
          'Networking Basics',
        ],
      },
      {
        topic: 'Docker Compose',
        subtopics: [
          'Defining Services',
          'Multi-Container Applications',
          'Compose File Syntax',
        ],
      },
      {
        topic: 'Docker in Production',
        subtopics: [
          'Docker Swarm',
          'Scaling Containers',
          'Monitoring and Logging',
        ],
      },
      {
        topic: 'Advanced Docker',
        subtopics: [
          'Docker Security',
          'Optimizing Docker Images',
          'Custom Networks',
        ],
      },
    ],
    desc: 'Docker is a platform for developing, shipping, and running applications in containers. It allows developers to package applications with all dependencies into a standardized unit for software development, simplifying deployment and scaling.',
  },
];

async function wdd() {
  const courses = await Course.find();
}
const reset = async (req, res) => {
  const ddata = await Data.findOne({ isdata: true });
  const coses = await Course.find();
  ddata.launchedparam = 'trashdwe';
  // await ddata.save()

  console.log('job done' + coses);
};
const gradecat = async (req, res) => {
  const cats = await Category.find();
  if (cats && cats.length > 0) {
    for (let i = 0; i < cats.length; i++) {
      const cat = cats[i];
      const courses = await Course.countDocuments({
        catid: cat.catid,
        deployed: true,
      });
      cat.courses = courses;
      await cat.save();
    }
  }
};
// gradecat()
const freeVideoLinks = [
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/movie.mp4',
  'https://www.w3schools.com/html/movie.mp4',
];
const getran = () => {
  const ran = Math.floor(Math.random() * 10);
  if (ran < 10) {
    return ran;
  }
  getran();
};
const getlink = () => {
  // console.log(ran + " is random")
  return freeVideoLinks[getran()];
};
const dropyou = async () => {
  const ddata = await Data.findOne({ isdata: true });

  try {
    console.log('Uploading video to Vimeo...');

    client.upload(
      './public/force/you.mp4',
      {
        name: 'main video',
        description: 'Course Introduction Video',
        cid: 'nocid',
      },
      async function (uri) {
        const videoId = uri.split('/').pop();
        const introlink = `https://vimeo.com/${videoId}`;

        // Update course with new video details
        ddata.videoid = videoId;
        await ddata.save();

        console.log('Upload successful:', introlink);
        // Remove temp file

        // res.json({ success: true, videoId, videoUrl: introlink, course });
      },
      (bytesUploaded, bytesTotal) => {
        console.log(
          `Upload progress: ${((bytesUploaded / bytesTotal) * 100).toFixed(2)}%`
        );
      },
      (error) => {
        console.error('Upload failed:', error);
        // res.status(500).json({ success: false, message: "Upload failed" });
      }
    );
  } catch (error) {
    console.error('Server error:', error);
    // res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const resetb = async (req, res) => {
  deleteFilesInFolder(categoriesPath);
  deleteFilesInFolder(courseImagesPath);
  deleteFilesInFolder(compliancePath);

  let email = process.env.sam_email;

  let resettimes = 0;
  await Data.deleteMany();
  await Data.create({ isdata: true });

  const ddata = await Data.findOne({ isdata: true });

  resettimes = ddata.resettimes;
  ddata.videoid = process.env.videoid;
  await ddata.save();

  await User.deleteMany();

  await Course.deleteMany();
  await Mycourse.deleteMany();

  await Teacher.deleteMany();
  await Bank.deleteMany();
  await Category.deleteMany();
  // await Action.deleteMany();
  await Actionb.deleteMany();
  await Action.deleteMany();

  await Topic.deleteMany();
  // await Curri.deleteMany();
  await Transact.deleteMany();
  await Teatransact.deleteMany();

  const hpwrda = await bcrypt.hash('cdr112233', 10);
  const ta = {
    name: 'Samuel',
    fname: 'Samuel O',
    lname: 'Chukwuemeka',
    admin: false,
    firstemail: 'samuelonwodi@gmail.com',
    email: 'samuelonwodi@gmail.com',
    ttt: 0,
    ttm: 0,
    ttmandy: '9:2024',
    attendance: 0,

    specialty: 'Engineering',
    education: 'Msc',
    addedby: 'Samuel Onwodi',
    physical: 'nil',
    addedbyid: 'youstack1614487',
    licenseid: 'lic194414',
    level: 'senior',
    ordstring: new Date(),
    pwrd: hpwrda,
    pwrdb: 'cdr112233',
    profit: 0,
    dprofit: '₦ 0.00',
    lmonths: 5,
    humanexpiry: 'Mon Feb 17 2025',
    javexpiry: new Date(),
    logindmytimes: 0,
    licensed: true,
    image: `${process.env.api}teachers/sam.png`,
    gender: 'male',
    registered: 'Tue Sep 17 2024',
    regDate: new Date(),
    phone: '0813034832',
    lastseen: 'Tues,9/17/2024, 11:45:01 PM',

    male: true,
    female: false,
    logintimes: 0,
    total: 0,
    userid: 'cdr101503776',
    mandy: mandy(),
    cmandy: mandy(),
    dmy: dmy(),

    restricted: false,
    twd: 0,
    mwd: 0,
    awd: 0,
    leadsort: 'asc',
    transort: 'newest',
    studsort: 'asc',
    dreg: 'today',
    ballowide: true,
    allowide: true,
    idetime: '',
    myide: 'welcome to Youstack integerated develpoment environment',
    online: true,
    passtimes: 0,

    dprogress: '0%',
    progress: 0,
    totaltopics: 0,
    tableitems: 20,
    allowinstallments: true,
    dmininstallment: '₦ 30,000.00',
    mininstallment: 30000,
    acos: false,
    idle: 85,
    logindmy: '',

    motivate: 'Keep believing in the power of your code.',
    motivatedmy: '',
    newlogin: 'nil',
    rating: 0,
    lastlogin: 'nil',
    allowcc: true,

    type: 'teacher',
    desc: 'He is a good teacher',
    isTeacher: true,
    bid: 'sch1291496',
    ttt: 0,
    ttm: 0,
    ttmandy: '9:2024',
    attendance: 0,
    comp: 0,
    uncomp: 0,

    specialty: 'Medicine',
    education: 'Phd',
    addedby: 'youstack(r)',
    physical: 'nil',
    addedbyid: 'youstack914487',
    licenseid: 'lic161745',
    level: 'senior',
    ordstring: new Date(),
  };
  const hpwrdb = await bcrypt.hash('cdr332211', 10);

  const tb = {
    name: 'Smith  Harper',
    fname: 'Smith ',
    lname: 'Harper',
    firstemail: 'Smith@yahoo.com',
    email: 'Smith@yahoo.com',
    ttt: 0,
    ttm: 0,
    ttmandy: '9:2024',
    attendance: 0,

    specialty: 'Engineering',
    education: 'Msc',
    addedby: 'Samuel Onwodi',
    physical: 'nil',
    addedbyid: 'youstack16714487',
    licenseid: 'lic1994414',
    level: 'senior',
    ordstring: new Date(),

    profit: 0,
    dprofit: '₦ 0.00',
    lmonths: 5,
    humanexpiry: 'Mon Feb 17 2025',
    javexpiry: new Date(),
    logindmytimes: 0,
    licensed: true,
    image: `${process.env.api}teachers/noimage.png`,
    gender: 'male',
    registered: 'Tue Sep 17 2024',
    regDate: new Date(),
    phone: '0813034832',
    lastseen: 'Tues,9/17/2024, 1:45:34 PM',

    male: true,
    female: false,
    logintimes: 0,
    total: 0,
    userid: 'cdr199776',
    mandy: mandy(),
    cmandy: mandy(),
    dmy: dmy(),

    restricted: false,
    twd: 0,
    mwd: 0,
    awd: 0,
    leadsort: 'asc',
    transort: 'newest',
    studsort: 'asc',
    dreg: 'today',
    ballowide: true,
    allowide: true,
    idetime: '',
    myide: 'welcome to Youstack integerated develpoment environment',
    online: true,
    passtimes: 0,

    dprogress: '0%',
    progress: 0,
    totaltopics: 0,
    tableitems: 20,
    allowinstallments: true,
    dmininstallment: '₦ 30,000.00',
    mininstallment: 30000,
    acos: false,
    idle: 45,
    logindmy: '',

    motivate: 'Keep believing in the power of your code.',
    motivatedmy: '',
    newlogin: 'nil',
    rating: 0,
    lastlogin: 'nil',
    allowcc: true,

    type: 'teacher',
    desc: 'He teaches well .',
    isTeacher: true,
    bid: 'sch1291496',
    ttt: 0,
    ttm: 0,
    ttmandy: '9:2024',
    attendance: 0,
    comp: 0,
    uncomp: 0,

    specialty: 'Engineering',
    education: 'Phd',
    addedby: 'youstack(r)',
    physical: 'nil',
    addedbyid: 'youstack',
    licenseid: 'lic169445',
    level: 'senior',
    ordstring: new Date(),
    pwrd: hpwrdb,
    pwrdb: 'cdr332211',
  };
  const teas = [ta, tb];
  for (let i = 0; i < banks.length; i++) {
    let bnk = banks[i];

    await Bank.create({
      name: bnk.name,
      sortcode: bnk.sortCode,
      nuban: bnk.nuban,
      bankid: 'you' + getserialnum(100000),
      ordstring: new Date(),
      created: currentDate(),
    });
  }
  for (let i = 0; i < teas.length; i++) {
    let ttt = teas[i];

    await User.create({
      isTeacher: true,
      fname: ttt.name,
      type: 'teacher',
      gender: ttt.gender,
      comp: 0,
      ttm: 0,
      rating: 0,
      ttt: 0,
      ttmandy: mandy(),
      uncomp: 0,
      topics: 0,
      students: 0,
      batches: 0,
      courses: 0,
      logindmytimes: 0,
      male: ttt.male,
      female: ttt.female,
      lname: ttt.lname,
      physical: 'nil',
      level: ttt.level,
      phone: ttt.phone,
      desc: ttt.desc,
      name: ttt.name,
      email: ttt.email,
      firstemail: ttt.email,
      addedby: ttt.addedby,
      addedbyid: 'youstack',
      licensed: true,
      profit: 0,
      dprofit: money(0),
      licenseid: 'lic' + getserialnum(100000),
      restricted: false,
      lmonths: 5,
      humanexpiry: human(),
      image: ttt.image,
      ordstring: new Date(),
      mandy: mandy(),
      cmandy: mandy(),
      dmy: dmy(),
      cdmy: dmy(),
      registered: new Date().toDateString(),
      regDate: new Date(),
      javexpiry: ttt.javexpiry,

      education: ttt.education,
      specialty: ttt.specialty,
      phone: ttt.phone,
      pwrd: ttt.pwrd,
      pwrdb: ttt.pwrdb,
      dprofit: money(0),
      userid: ttt.userid,
      logintimes: 0,
      profit: 0,
      total: 0,
      lastseen: 'nil',
      logindmytimes: 0,
      attendance: 0,
    });
  }
  const nc = savedcourses;

  for (let i = 0; i < nc.length; i++) {
    console.log(nc.length + ' is nc length');
    const coslength = await Course.countDocuments();
    const tea = (i + 1) % 2 === 1 ? ta : tb;
    const cos = nc[i];
    const topics = cos.topics;
    const tid = tea.userid;
    const cid = 'cos' + getserialnum(100000);
    const catg = categg.find((el) => el.ccid === cos.ccid);
    console.log(catg.name + '  is category name ' + i, cos.ccid);
    await Course.create({
      name: capitalise(cos.name),
      tid,
      dummy: true,
      introlink: getlink(),
      sdesc: cos.sdesc,
      category: catg.name,
      catid: catg.catid,
      ccid: catg.ccid,
      teacherid: tid,
      mstudents: 0,
      introid: process.env.videoid,
      locked: false,
      addedbytype: 'youstack',
      addedby: 'youstack',
      addedbyid: 'youstack',
      teacher: tea.name,
      duration: 3,
      topics: topics.length,
      batches: 0,
      lastedit: 'nil',
      lasteditby: 'nil',
      lastedittime: 'nil',
      timesedited: 0,
      attendance: 0,
      students: 0,
      durationm: '3 months',
      cid,
      intro: '',

      desc: cos.desc,
      profit: 0,
      dprofit: money(0),
      drev: money(0),
      rev: 0,
      drev: money(0),
      price: 10000,
      deployed: true,
      dprice: money(10000),
      ordstring: new Date(),
      created: new Date(),
      createddate: currentDate(),
      lastpaid: '',
      sn: coslength + 1,
      students: 0,

      image: cos.image,
    });
    for (let i = 0; i < topics.length; i++) {
      const top = topics[i];
      const title = top.topic;
      const subtopic = top.subtopics;
      const cd = await Topic.countDocuments({ cid });

      await Topic.create({
        cid,
        title,
        subtopic: subtopic.join(','),
        cname: cos.name,
        editedby: 'nil',
        lastedit: 'nil',
        lasteditby: 'nil',
        videoid: i % 2 == 0 ? process.env.videoid : '',
        vlink: getlink(),
        lastedittime: 'nil',
        timesedited: 0,
        createdby: 'youstack',

        ordstring: new Date(),
        created: new Date(),
        createddate: currentDate(),

        serial: cd + 1,
        sn: cd + 1,
        topics: 0,
        topid: 'top' + getserialnum(100000),

        lastedit: 'nil',
        lasteditby: 'nil',
        lastedittime: 'nil',
        timesedited: 0,

        ordstring: new Date(),
        created: new Date(),
        createddate: currentDate(),

        image: cos.image,
      });
    }
  }
  for (let i = 0; i < categg.length; i++) {
    const cato = categg[i];
    await Category.create({
      category: cato.name,
      dateadded: currentDate(),
      name: cato.name,
      catid: cato.catid,
      ccid: cato.ccid,
      desc: cato.desc,
      ordstring: new Date(),
      createdby: email,
      image: process.env.api + `defcats/${cato.image}`,
    });
  }

  let who = email;

  const slave = 'youstack';
  const when = currentDate();

  const actionid = 'act' + getserialnum(100000);
  const opid = 'op' + getserialnum(100000);
  const story = `${who} reset youstack on ${currentDate()} the ${ord(
    ddata.usereset + 1
  )} time`;
  const slavestory = `youstack was reset by ${who} on ${currentDate()}`;
  const masterstory = `I reset youstack on ${currentDate()}`;
  const tusers = await User.find();
  for (let i = 0; i < tusers.length; i++) {
    const yu = tusers[i];
    yu.cc = 10000;
    await yu.save();
  }

  await Action.create({
    master: who,
    masterid: 'no id',
    slave: 'youstack',
    slaveid: 'youstack',
    actionid,
    serious: true,
    opid,
    mandy: mandy(),
    dmy: mandy(),
    when,
    masterfirstemail: who,
    slavefirstemail: slave,
    slavestory,
    story,
    masterstory,
    mastertype: 'admin',
    slavetype: 'youstack',
    masterimage: 'youstack',
    slaveimage: 'youstack',
    ordstring: new Date(),
    ifhost: true,
    actiontype: 'admin to ' + slave,
  });
  wdd();
  const pwrda = process.env.sam_pwrd;
  const nhpwrda = await bcrypt.hash(pwrda, 10);
  const pwrdb = process.env.dav_pwrd;
  const nhpwrdb = await bcrypt.hash(pwrdb, 10);

  await User.create({
    name: process.env.sam_name,
    email: process.env.sam_email,
    address: process.env.sam_address,
    pwrd: nhpwrda,
    pwrdb: pwrda,
    licensed: true,
    host: true,
    admin: true,
    sadmin: true,
    cudaccess: true,
    userid: 'adm' + getserialnum(10000),
    type: 'admin',
  });
  await User.create({
    name: process.env.dav_name,
    email: process.env.dav_email,
    address: process.env.dav_address,
    pwrd: nhpwrdb,
    host: true,
    pwrdb: pwrdb,
    licensed: true,
    type: 'admin',
    admin: true,
    sadmin: true,
    cudaccess: true,
    userid: 'adm' + getserialnum(10000),
  });
  ddata.launchedparam = process.env.launchedparam;
  ddata.usereset = ddata.usereset + 1;
  ddata.lastreset = currentDate();
  ddata.lastresetby = email;
  ddata.videoid = process.env.videoid;
  await ddata.save();
  gradecat();
  console.log('reset done');
};
// resetb();
const sumByKey = (array, key) => {
  return array.reduce((sum, item) => sum + (item[key] || 0), 0);
};
const clean = async (req, res) => {
  const ddata = await Data.findOne({ isdata: true });
  const courses = await Course.find();
  const categories = await Category.find();
  const depcourses = await Course.find({ deployed: true });
  for (let i = 0; i < depcourses.length; i++) {
    const cos = depcourses[i];
    const cn = await Mycourse.countDocuments({ cid: cos.cid });
    cos.students = cn;
    await cos.save();
  }
  for (let i = 0; i < categories.length; i++) {
    const cat = categories[i];
    const cn = await Course.find({ catid: cat.catid });
    cat.courses = cn.length;
    cat.students = sumByKey(cn, 'students');
    await cat.save();
  }

  // await ddata.save()

  console.log('data aggregation was successful');
};
// clean()
function genr(n) {
  // Ensure n is a positive integer greater than 0
  if (n <= 0) return 'Invalid input';

  // Calculate the minimum and maximum values for the given number of digits
  const min = Math.pow(10, n - 1); // Smallest n-digit number
  const max = Math.pow(10, n) - 1; // Largest n-digit number

  // Generate a random number between min and max
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNum;
}

async function lic() {
  // const folderPath = maindir + "public/club";

  try {
    // Read the files synchronously
    // const files = fs.readdirSync(folderPath);
    // console.log(files.length + " is files length");

    let actions = await Action.find().sort({ ordstring: 1 });
    const guy = actions[0];

    if (actions.length > 99) {
      await Action.deleteOne({ userid: guy.userid });
      actions = await Action.find().sort({ ordstring: 1 });
      if (actions.length > 99) {
        lic();
      }
    }
  } catch (err) {
    console.error('Error running lic():', err);
    throw err; // Re-throw the error to propagate it up
  }
}
const forcevid = async () => {
  const topics = await Topic.find();
  const ddata = await Data.findOne({ isdata: true });

  for (let i = 0; i < topics.length; i++) {
    const top = topics[i];
    top.videoid = i % 2 == 0 ? ddata.videoid : '86775t33';
    await top.save();
  }
  console.log('done forcing videoid on all topics');
};
// forcevid()

const getAccountBalance = async () => {
  const ddata = await Data.findOne({ isdata: true });
  const skt_mandy = ddata.plive ? process.env.plive : process.env.ptest;

  try {
    const response = await axios.get('https://api.paystack.co/balance', {
      headers: {
        Authorization: `Bearer ${sk}`, // Replace with your Paystack secret key
        'Content-Type': 'application/json',
      },
    });

    if (response.data.status) {
      const balanceInKobo = response.data.data[0].balance;
      const balanceInNaira = balanceInKobo / 100;
      ddata.absolute = balanceInNaira;
      await ddata.save();
      return `₦${balanceInNaira.toLocaleString()}`;
    } else {
      console.log('Failed to retrieve balance');
    }
  } catch (error) {
    console.error(
      'Error fetching balance:',
      error.response?.data || error.message
    );
    return 'Error retrieving balance';
  }
};
const Getinitials = (name) => {
  if (name.includes(' ')) {
    const array = name.split(' ');
    let initials = array[0].charAt(0) + array[1].charAt(0);
    return initials.toUpperCase();
  } else {
    let initials = name.charAt(0) + name.charAt(1);
    return initials.toUpperCase();
  }
};
console.log(Getinitials('taiw') + ' is initials');

// Example Usage
// console.log("account balance is "+ main())
module.exports = {
  resetinfull: async (req, res) => {
    const { usereset, email } = req.headers;
    console.log('finally resetting ' + email);
    let resettimes = 0;

    const getdata = await Data.findOne({ usereset });
    if (!getdata) {
      res.json({ success: true, nouserest: true });
    } else {
      resettimes = getdata.usereset;
      // await Games.deleteMany();

      await User.deleteMany();

      await Course.deleteMany();

      await Teacher.deleteMany();
      await Category.deleteMany();
      // await Action.deleteMany();
      await Actionb.deleteMany();

      await Topic.deleteMany();
      // await Curri.deleteMany();
      await Transact.deleteMany();

      const hpwrda = await bcrypt.hash('cdr112233', 10);
      const ta = {
        name: 'Samuel',
        fname: 'Samuel O',
        lname: 'Chukwuemeka',
        admin: false,
        firstemail: 'samuelonwodi@gmail.com',
        email: 'samuelonwodi@gmail.com',
        ttt: 0,
        ttm: 0,
        ttmandy: '9:2024',
        attendance: 0,

        specialty: 'Engineering',
        education: 'Msc',
        addedby: 'Samuel Onwodi',
        physical: 'nil',
        addedbyid: 'youstack1614487',
        licenseid: 'lic194414',
        level: 'senior',
        ordstring: new Date(),
        pwrd: hpwrda,
        pwrdb: 'cdr112233',
        profit: 0,
        dprofit: '₦ 0.00',
        lmonths: 5,
        humanexpiry: 'Mon Feb 17 2025',
        javexpiry: new Date(),
        logindmytimes: 0,
        licensed: true,
        image: `${process.env.api}teachers/sam.png`,
        gender: 'male',
        registered: 'Tue Sep 17 2024',
        regDate: new Date(),
        phone: '0813034832',
        lastseen: 'Tues,9/17/2024, 11:45:01 PM',

        male: true,
        female: false,
        logintimes: 0,
        total: 0,
        userid: 'cdr101503776',
        mandy: mandy(),
        cmandy: mandy(),
        dmy: dmy(),

        restricted: false,
        twd: 0,
        mwd: 0,
        awd: 0,
        leadsort: 'asc',
        transort: 'newest',
        studsort: 'asc',
        dreg: 'today',
        ballowide: true,
        allowide: true,
        idetime: '',
        myide: 'welcome to Youstack integerated develpoment environment',
        online: true,
        passtimes: 0,

        dprogress: '0%',
        progress: 0,
        totaltopics: 0,
        tableitems: 20,
        allowinstallments: true,
        dmininstallment: '₦ 30,000.00',
        mininstallment: 30000,
        acos: false,
        idle: 85,
        logindmy: '',

        motivate: 'Keep believing in the power of your code.',
        motivatedmy: '',
        newlogin: 'nil',
        rating: 0,
        lastlogin: 'nil',
        allowcc: true,

        type: 'teacher',
        desc: 'He is a good teacher',
        isTeacher: true,
        bid: 'sch1291496',
        ttt: 0,
        ttm: 0,
        ttmandy: '9:2024',
        attendance: 0,
        comp: 0,
        uncomp: 0,

        specialty: 'Medicine',
        education: 'Phd',
        addedby: 'youstack(r)',
        physical: 'nil',
        addedbyid: 'youstack914487',
        licenseid: 'lic161745',
        level: 'senior',
        ordstring: new Date(),
      };
      const hpwrdb = await bcrypt.hash('cdr332211', 10);

      const tb = {
        name: 'Smith  Harper',
        fname: 'Smith ',
        lname: 'Harper',
        firstemail: 'Smith@yahoo.com',
        email: 'Smith@yahoo.com',
        ttt: 0,
        ttm: 0,
        ttmandy: '9:2024',
        attendance: 0,

        specialty: 'Engineering',
        education: 'Msc',
        addedby: 'Samuel Onwodi',
        physical: 'nil',
        addedbyid: 'youstack16714487',
        licenseid: 'lic1994414',
        level: 'senior',
        ordstring: new Date(),

        profit: 0,
        dprofit: '₦ 0.00',
        lmonths: 5,
        humanexpiry: 'Mon Feb 17 2025',
        javexpiry: new Date(),
        logindmytimes: 0,
        licensed: true,
        image: `${process.env.api}teachers/noimage.png`,
        gender: 'male',
        registered: 'Tue Sep 17 2024',
        regDate: new Date(),
        phone: '0813034832',
        lastseen: 'Tues,9/17/2024, 1:45:34 PM',

        male: true,
        female: false,
        logintimes: 0,
        total: 0,
        userid: 'cdr199776',
        mandy: mandy(),
        cmandy: mandy(),
        dmy: dmy(),

        restricted: false,
        twd: 0,
        mwd: 0,
        awd: 0,
        leadsort: 'asc',
        transort: 'newest',
        studsort: 'asc',
        dreg: 'today',
        ballowide: true,
        allowide: true,
        idetime: '',
        myide: 'welcome to Youstack integerated develpoment environment',
        online: true,
        passtimes: 0,

        dprogress: '0%',
        progress: 0,
        totaltopics: 0,
        tableitems: 20,
        allowinstallments: true,
        dmininstallment: '₦ 30,000.00',
        mininstallment: 30000,
        acos: false,
        idle: 45,
        logindmy: '',

        motivate: 'Keep believing in the power of your code.',
        motivatedmy: '',
        newlogin: 'nil',
        rating: 0,
        lastlogin: 'nil',
        allowcc: true,

        type: 'teacher',
        desc: 'He teaches well .',
        isTeacher: true,
        bid: 'sch1291496',
        ttt: 0,
        ttm: 0,
        ttmandy: '9:2024',
        attendance: 0,
        comp: 0,
        uncomp: 0,

        specialty: 'Engineering',
        education: 'Phd',
        addedby: 'youstack(r)',
        physical: 'nil',
        addedbyid: 'youstack',
        licenseid: 'lic169445',
        level: 'senior',
        ordstring: new Date(),
        pwrd: hpwrdb,
        pwrdb: 'cdr332211',
      };
      const teas = [ta, tb];
      for (let i = 0; i < teas.length; i++) {
        let ttt = teas[i];

        await User.create({
          isTeacher: true,
          fname: ttt.name,
          licensed: true,
          type: 'teacher',
          gender: ttt.gender,
          comp: 0,
          ttm: 0,
          rating: 0,
          ttt: 0,
          ttmandy: mandy(),
          uncomp: 0,
          topics: 0,
          students: 0,
          batches: 0,
          courses: 0,
          logindmytimes: 0,
          male: ttt.male,
          female: ttt.female,
          lname: ttt.lname,
          physical: 'nil',
          level: ttt.level,
          phone: ttt.phone,
          desc: ttt.desc,
          name: ttt.name,
          email: ttt.email,
          firstemail: ttt.email,
          addedby: ttt.addedby,
          addedbyid: 'youstack',
          licensed: true,
          profit: 0,
          dprofit: money(0),
          licenseid: 'lic' + getserialnum(100000),
          restricted: false,
          lmonths: 5,
          humanexpiry: human,
          image: ttt.image,
          ordstring: new Date(),
          mandy: mandy(),
          cmandy: mandy(),
          dmy: dmy(),
          cdmy: dmy(),
          registered: new Date().toDateString(),
          regDate: new Date(),
          javexpiry: ttt.javexpiry,

          education: ttt.education,
          specialty: ttt.specialty,
          phone: ttt.phone,
          pwrd: ttt.pwrd,
          pwrdb: ttt.pwrdb,
          dprofit: money(0),
          userid: ttt.userid,
          logintimes: 0,
          profit: 0,
          total: 0,
          lastseen: 'nil',
          logindmytimes: 0,
          attendance: 0,
        });
      }
      const nc = savedcourses;

      for (let i = 0; i < nc.length; i++) {
        console.log(nc.length + ' is nc length');
        const coslength = await Course.countDocuments();
        const tea = (i + 1) % 2 === 1 ? ta : tb;
        const cos = nc[i];
        const topics = cos.topics;
        const tid = tea.userid;
        const cid = 'cos' + getserialnum(100000);
        const catg = categg.find((el) => el.ccid === cos.ccid);
        console.log(catg.name + '  is category name ' + i, cos.ccid);
        await Course.create({
          name: capitalise(cos.name),
          tid,
          dummy: true,
          introlink: getlink(),
          sdesc: cos.sdesc,
          category: catg.name,
          catid: catg.catid,
          ccid: catg.ccid,
          teacherid: tid,
          mstudents: 0,
          locked: false,
          addedbytype: 'youstack',
          addedby: 'youstack',
          addedbyid: 'youstack',
          teacher: tea.name,
          duration: 3,
          topics: topics.length,
          batches: 0,
          lastedit: 'nil',
          lasteditby: 'nil',
          lastedittime: 'nil',
          timesedited: 0,
          attendance: 0,
          students: 0,
          durationm: '3 months',
          cid,
          intro: '',

          desc: cos.desc,
          profit: 0,
          dprofit: money(0),
          drev: money(0),
          rev: 0,
          drev: money(0),
          price: 300000,
          deployed: true,
          dprice: money(300000),
          ordstring: new Date(),
          created: new Date(),
          createddate: currentDate(),
          lastpaid: '',
          sn: coslength + 1,
          students: 0,

          image: cos.image,
        });
        for (let i = 0; i < topics.length; i++) {
          const top = topics[i];
          const title = top.topic;
          const subtopic = top.subtopics;
          const cd = await Topic.countDocuments({ cid });

          await Topic.create({
            cid,
            title,
            vlink: getlink(),
            subtopic: subtopic.join(','),
            cname: cos.name,
            editedby: 'nil',
            lastedit: 'nil',
            lasteditby: 'nil',
            lastedittime: 'nil',
            timesedited: 0,
            createdby: 'youstack',

            ordstring: new Date(),
            created: new Date(),
            createddate: currentDate(),

            serial: cd + 1,
            sn: cd + 1,
            topics: 0,
            topid: 'top' + getserialnum(100000),

            lastedit: 'nil',
            lasteditby: 'nil',
            lastedittime: 'nil',
            timesedited: 0,

            ordstring: new Date(),
            created: new Date(),
            createddate: currentDate(),

            image: cos.image,
          });
        }
      }
      for (let i = 0; i < categg.length; i++) {
        const cato = categg[i];
        await Category.create({
          category: cato.name,
          name: cato.name,
          dateadded: currentDate(),
          catid: cato.catid,
          ccid: cato.ccid,
          desc: cato.desc,
          ordstring: new Date(),
          createdby: email,
          image: process.env.api + `categories/${cato.image}`,
        });
      }

      let who = email;

      const slave = 'youstack';
      const when = currentDate();

      const actionid = 'act' + getserialnum(100000);
      const opid = 'op' + getserialnum(100000);
      const story = `${who} reset youstack on ${currentDate()} the ${ord(
        getdata.usereset + 1
      )}`;
      const slavestory = `youstack was reset by ${who} on ${currentDate()}`;
      const masterstory = `I reset youstack on ${currentDate()}`;
      const tusers = await User.find();
      for (let i = 0; i < tusers.length; i++) {
        const yu = tusers[i];
        yu.cc = 10000;
        await yu.save();
      }

      await Action.create({
        master: who,
        masterid: 'no id',
        slave: 'youstack',
        slaveid: 'youstack',
        actionid,
        serious: true,
        opid,
        mandy: mandy(),
        dmy: mandy(),
        when,
        masterfirstemail: who,
        slavefirstemail: slave,
        slavestory,
        story,
        masterstory,
        mastertype: 'admin',
        slavetype: 'youstack',
        masterimage: 'youstack',
        slaveimage: 'youstack',
        ordstring: new Date(),
        ifhost: true,
        actiontype: 'admin to ' + slave,
      });
      wdd();
      const pwrda = process.env.sam_pwrd;
      const nhpwrda = await bcrypt.hash(pwrda, 10);
      const pwrdb = process.env.dav_pwrd;
      const nhpwrdb = await bcrypt.hash(pwrdb, 10);

      await User.create({
        name: process.env.sam_name,
        email: process.env.sam_email,
        address: process.env.sam_address,
        pwrd: nhpwrda,
        type: 'admin',
        pwrdb: pwrda,
        admin: true,
        host: true,
        sadmin: true,
        licensed: true,
        cudaccess: true,
        userid: 'adm' + getserialnum(10000),
      });
      await User.create({
        name: process.env.dav_name,
        email: process.env.dav_email,
        address: process.env.dav_address,
        pwrd: nhpwrdb,
        type: 'admin',
        licensed: true,
        host: true,
        pwrdb: pwrdb,
        admin: true,
        sadmin: true,
        cudaccess: true,
        userid: 'adm' + getserialnum(10000),
      });
      getdata.launchedparam = process.env.launchedparam;
      getdata.usereset = getdata.usereset + 1;
      getdata.lastreset = currentDate();
      getdata.lastresetby = email;
      await getdata.save();

      const categories = await Category.find().sort({ name: 1 });
      const courses = await Course.find().limit(12).sort({ name: 1 });

      res.json({ success: true, categories, courses });
    }
  },
  login: async (req, res) => {
    // await User.deleteMany({brid: { $exists: false}})

    const { email, pwrd } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const ddata = await Data.findOne({ isdata: true });
    console.log(pwrd, email, ddata.isdata, ip);

    const user = await User.findOne({ email });
    if (user) {
      console.table(ddata);
      const ifp = await bcrypt.compare(pwrd, user.pwrd);
      if (ifp) {
        if (user.licensed) {
          if (!user.host && ddata.maintenance) {
            res.json({
              success: true,
              maintenance: true,
              licensed: true,
              message: 'user license not found',
            });
          } else {
            let logindmytimes = user.logindmytimes;
            user.ccode = genr(6);
            await user.save();
            if (user.logindmy == dmy()) {
              logindmytimes = logindmytimes + 1;
            } else {
              logindmytimes = 1;
            }

            console.log('login times is ' + logindmytimes);
            const time = ord(logindmytimes);

            // user.lastseen = currentDate();
            user.motivate =
              user.motivatedmy == dmy() ? user.motivate : motivate;
            user.motivatedmy =
              user.motivatedmy == dmy() ? user.motivatedmy : dmy();
            user.lastlogin = user.newlogin;
            user.newlogin = currentDate();
            user.logindmytimes = logindmytimes;
            user.logindmy = dmy();
            user.idle = ddata.idle;
            user.ip = ip;
            user.loginord = currentDate();
            user.lastseen = currentDate();
            user.lordstring = new Date();

            user.logintimes = user.logintimes + 1;
            await user.save();
            ddata.latestloginplayertime = currentDate();
            ddata.latestloginplayer = user.name;
            await ddata.save();
            console.log('about to login ' + currentDate());
            const stoken = {
              email,
              userid: user.userid,
            };

            if (user.isStudent) {
              const whichadmin = user;
              const slave = 'youstack';
              const when = currentDate();

              const actionid = 'act' + getserialnum(100000);
              const opid = 'op' + getserialnum(100000);
              const story = `${capitalise(whichadmin.name)} (${capitalise(
                whichadmin.type
              )}) logged in to youstack for the ${time} time today`;
              const slavestory = `${capitalise(
                whichadmin.name
              )} logged in to me`;
              const masterstory = `I logged into my youstack account for the ${time} time today`;

              await Actionb.create({
                master: whichadmin.name,
                masterid: whichadmin.userid,
                slave: 'youstack',
                slaveid: 'youstackid',
                actionid,
                ip,
                branch: user.branch,
                brid: user.brid,
                batch: user.batch,
                course: user.cname,
                opid,
                mandy: mandy(),
                dmy: mandy(),
                when,
                masterfirstemail: whichadmin.firstemail,
                slavefirstemail: ' youstackemail',
                slavestory,
                story,
                masterstory,
                mastertype: whichadmin.type,
                slaveype: 'youstack',
                masterimage: whichadmin.image,
                slaveimage: '',
                ordstring: new Date(),
                ifhost: whichadmin.host ? true : false,
                actiontype: whichadmin.type + ' to youstack',
              });
              lic();
            } else {
              console.log(user.name);
              const whichadmin = user;
              const slave = 'youstack';
              const when = currentDate();

              const actionid = 'act' + getserialnum(100000);
              const opid = 'op' + getserialnum(100000);
              const story = `${capitalise(whichadmin.name)} (${capitalise(
                whichadmin.type
              )}) logged in to youstack for the ${time} time today`;
              const slavestory = `${capitalise(
                whichadmin.name
              )} logged in to me`;
              const masterstory = `I logged into my youstack account for the ${time} time today`;

              await Action.create({
                master: whichadmin.name,
                masterid: whichadmin.userid,
                slave: 'youstack',
                ip,
                slaveid: 'youstackid',
                actionid,
                opid,
                mandy: mandy(),
                dmy: mandy(),
                when,

                masterfirstemail: whichadmin.firstemail,
                slavefirstemail: ' youstackemail',
                slavestory,
                story,
                masterstory,
                mastertype: whichadmin.type,
                slaveype: 'youstack',
                masterimage: whichadmin.image,
                slaveimage: '',
                ordstring: new Date(),
                ifhost: whichadmin.host ? true : false,
                actiontype: whichadmin.type + ' to youstack',
              });
              lic();
            }

            res.json({ success: true, user });
          }
        } else {
          res.json({
            success: true,
            nolicense: true,
            message: 'user license not found',
          });
        }
      } else {
        console.log('password error ' + user.pwrdb, pwrd, email);
        const token = {
          success: true,
          ifUser: true,
          fp: true,
          message: 'Incorrect password !',
        };
        return res.json(token);
      }
    } else {
      const token = {
        success: false,
        ifUser: false,
        message: 'User not found!',
      };

      return res.json(token);
    }
  },
  Home: async (req, res) => {
    console.table(things);
    console.log('mikp visited home @ ' + currentDate());

    res.json({ things });
  },
  getcourse: async (req, res) => {
    const cid = req.params.cid;
    console.log(cid + ' is cid');
    const course = await Course.findOne({ cid, deployed: true }).lean();
    if (course) {
      const topics = await Topic.find({ cid }).sort({ sn: 1 }).lean();
      if (topics && topics.length > 2) {
        console.log(course.name + ' is course');
        const coursesim = await Course.find({
          deployed: true,
          catid: course.catid,
          cid: { $ne: cid },
        });
        res.json({ success: true, course, topics, coursesim });
      } else {
        const courses = await Course.find().limit(12).sort({ ordstring: -1 });
        res.json({ error: true, courses });
      }
    } else {
      const courses = await Course.find().limit(12).sort({ ordstring: -1 });
      res.json({ error: true, courses });
    }
  },
  getcategory: async (req, res) => {
    const catid = req.params.catid;
    console.log(catid + ' is cid');
    const category = await Category.findOne({ catid }).lean();
    const courses = await Course.find({ catid, deployed: true }).lean();
    if (courses && category) {
      res.json({ success: true, courses, category });
    } else {
      const courses = await Course.find().limit(12).sort({ ordstring: -1 });
      res.json({ error: true, courses, category });
    }
  },
  nousersearchcourses: async (req, res) => {
    console.table('searching courses detected at ' + currentDate());
    let { name, page, limit } = req.query;
    console.log(name, page, limit);

    const skip = (page - 1) * limit;

    const count = await Course.countDocuments({
      deployed: true,
      name: new RegExp(name, 'i'),
    });
    // const courses= await Course.find({deployed:true}).skip(skip).limit(limit).sort({students:-1})
    const courses = await Course.find({
      deployed: true,
      name: new RegExp(name, 'i'),
    })
      .skip(skip)
      .limit(12)
      .sort({ students: -1 });

    res.json({
      success: true,
      courses,
      totalPages: Math.ceil(count / limit), // Calculate total pages based on count and limit
      currentPage: Number(page),
      sum: count,
    });
  },
  frompaystack: async (req, res) => {
    const reference = req.params.ref;
    const fe = process.env.fe;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const matno = 'YSK' + getserialnum(10000);
    const userid = 'YOU' + getserialnum(10000);
    const transid = 'TRN' + getserialnum(10000);
    const ddata = await Data.findOne({ isdata: true });
    const youcent = ddata.youcent;

    if (reference) {
      try {
        let sk = ddata.plive ? process.env.plive : process.env.ptest;

        console.log('is param reference ' + reference);

        const response = await axios.get(
          `${process.env.paymentapi}${reference}`,
          {
            headers: {
              Authorization: `Bearer ${sk}`,
            },
          }
        );

        const transactionData = response.data.data;
        // Access metadata
        let metadata = transactionData.metadata || {};
        if (typeof metadata === 'string') {
          try {
            console.log(metadata + ' is metadata');
            metadata = JSON.parse(metadata);
          } catch (err) {
            console.error('Error parsing metadata:', err.message);
            metadata = {}; // Fallback to an empty object
          }
        }
        let { name, email, pwrd, cids, phone, biz, address, amount } = metadata;
        let initials = Getinitials(name);

        console.log(name, email, pwrd, cids, phone, biz, address, amount);

        // cids = JSON.parse(cids);
        const ab = getAccountBalance();
        const hpwrd = await bcrypt.hash(String(pwrd), 10);
        let tempcode = 'temp' + getserialnum(10000);
        const ccatid = cids[cids.length -1]
        const ccategory = await Category.findOne({catid:ccatid})

        await User.create({
          name,
          initials,catid:ccatid,ccategory,
          email,
          lastlogin: currentDate(),
          tempcode,
          firstemail: email,
          address,
          pwrd: hpwrd,
          biz,
          phone,
          firsttransid: transid,
          courses: cids.length,

          pwrdb: pwrd,
          licensed: true,
          type: 'student',
          isStudent: true,
          firstcids: JSON.stringify(cids),
          spent: amount,
          dspent: money(amount),
          ordstring: new Date(),
          registered: currentDate(),

          matno,
          userid,
        });
        let adminprofit = 0;
        let teacherprofit = 0;
        // let adminprofit = Math.ceil((youcent / 100) * amount);
        // let teacherprofit = amount - adminprofit;
        let coss = [];
        let cosss = [];

        for (let i = 0; i < cids.length; i++) {
          const cid = cids[i];
          console.log('in here with ' + cid);

          const cos = await Course.findOne({ cid });
          const teacher = await User.findOne({
            isTeacher: true,
            userid: cos.teacherid,
          });
          console.log(teacher.name + ' is teacher');
          let aprofit = Math.ceil((youcent / 100) * cos.price);
          let tprofit = cos.price - aprofit;
          adminprofit = adminprofit + aprofit;
          teacherprofit = teacherprofit + tprofit;
          const teatransid = 'TTRN' + getserialnum(10000);

          await Mycourse.create({
            name: capitalise(cos.name),
            tid: cos.teacherid,
            userid,
            sname: name,
            semail: email,
            dummy: false,
            introid: cos.introid,
            videoid: cos.videoid,
            sdesc: cos.sdesc,
            category: cos.category,
            catid: cos.catid,
            amount,
            aprofit,
            tprofit,
            youcent: youcent + '%',

            teacherid: cos.teacherid,
            mstudents: cos.mstudents + 1,

            locked: false,
            addedbytype: `${name} on sign up`,
            addedby: `${name} on sign up`,
            addedbyid: userid,
            teacher: teacher.name,
            duration: cos.duration,
            topics: cos.topics,

            timesedited: 0,
            attendance: 0,
            students: 0,
            durationm: cos.durationm,
            cid,
            intro: '',

            desc: cos.desc,
            profit: 0,

            drev: money(0),
            price: cos.price,
            deployed: cos.deployed,
            dprice: cos.dprice,
            ordstring: new Date(),
            created: new Date(),
            createddate: currentDate(),
            lastpaid: '',
            sn: i,
            students: 0,

            image: cos.image,
          });
          await Teatransact.create({
            title: 'sign up payment for ' + cids.length + ' course(s)',
            type: 'student',
            teatransid,
            youcent,
            ccid: cid,

            name,
            student: name,
            studentid: userid,
            teacherid: cos.teacherid,
            teacher: cos.teacher,
            cname: cos.name,
            cid,
            ip,
            email,
            inflow: true,
            date: currentDate(),
            ordstring: new Date(),
            deposit: true,

            finaltotal: amount,
            courses: cids.length,
            initialtotal: amount,
            amount: cos.price,
            aprofit,
            tprofit,
            damount: cos.dprice,
            reference,
            transid,
            dmy: dmy(),
            cdmy: dmy(),
            userid,
            mandy: mandy(),

            firstamount: money(amount),

            oldamount: cos.price,
            doldamount: cos.dprice,

            firstpayment: true,

            approvedby: ddata.plive ? 'paystack live' : 'paystack test',

            order: 1,
            orderb: ord(1),

            paidby: name,
            matno,
            paidbyid: userid,
          });
          const bcourses = await Mycourse.countDocuments({
            teacherid: cos.teacherid,
          });
          coss.push(cos.name);
          cosss.push(cos);

          teacher.profit = teacher.profit + tprofit;
          teacher.bcourses = bcourses;

          teacher.dprofit = money(teacher.profit);
          teacher.profit_mandy =
            teacher.mandy == mandy() ? teacher.profit_mandy + tprofit : tprofit;
          teacher.dprofit_mandy =
            teacher.mandy == mandy()
              ? money(teacher.profit_mandy)
              : money(tprofit);
          teacher.mandy = mandy();
          await teacher.save();
          const stds = await Mycourse.countDocuments({ cid: cos.cid });
          cos.rev = cos.rev + cos.price;
          cos.drev = money(cos.rev);
          cos.mrev = cos.mandy === mandy() ? cos.mrev + cos.price : cos.price;
          cos.mdrev = money(cos.mrev);
          cos.profit = cos.profit + aprofit;
          cos.dprofit = money(cos.profit);
          cos.mandy = mandy();
          cos.bought = true;
          cos.students = stds;
          await cos.save();

          const catcoss = await Category.findOne({ catid: cos.catid });
          const catcosses = await Course.countDocuments({
            catid: cos.catid,
            bought: true,
          });
          catcoss.boughtcourses = catcosses;
          await catcoss.save();
        }

        const strin = `<ol>
            ${cosss.map((el) => `<li>${el.name} &nbsp; ${el.dprice}</li>`)}
          </ol>`;

        ddata.adminprofit = ddata.adminprofit + adminprofit;
        ddata.teacherprofit = ddata.teacherprofit + teacherprofit;
        ddata.inflow = ddata.inflow + amount;
        ddata.dinflow = money(ddata.inflow);
        ddata.dadminprofit = money(ddata.adminprofit);
        ddata.dteacherprofit = money(ddata.teacherprofit);
        ddata.laststudentsignup = name;
        ddata.laststudentsignuptime = currentDate();

        // month below
        ddata.adminprofit_mandy =
          ddata.mandy === mandy ? ddata.adminprofit + adminprofit : adminprofit;
        ddata.teacherprofitt_mandy =
          ddata.mandy === mandy
            ? ddata.teacherprofit + teacherprofit
            : teacherprofit;
        ddata.inflowt_mandy =
          ddata.mandy === mandy ? ddata.inflow + amount : amount;
        ddata.dinflowt_mandy =
          ddata.mandy === mandy ? money(ddata.inflow) : money(amount);
        ddata.dadminprofit_mandy =
          ddata.mandy === mandy ? money(ddata.adminprofit) : money(adminprofit);
        ddata.dteacherprofit_mandy =
          ddata.mandy === mandy
            ? money(ddata.teacherprofit)
            : money(teacherprofit);
        ddata.mandy = mandy();

        await ddata.save();

        await Transact.create({
          title: 'sign up payment for ' + cids.length + ' course(s)',
          type: 'student',

          name,
          ip,

          cname: JSON.stringify(coss),
          cid: JSON.stringify(cids),
          email,
          date: currentDate(),
          ordstring: new Date(),
          deposit: true,

          finaltotal: amount,
          courses: cids.length,
          initialtotal: amount,
          amount,
          aprofit: adminprofit,
          tprofit: teacherprofit,
          damount: money(amount),
          reference,
          transid,
          dmy: dmy(),
          cdmy: dmy(),
          userid,
          mandy: mandy(),

          firstamount: money(amount),

          oldamount: amount,
          doldamount: money(amount),

          firstpayment: true,

          approvedby: ddata.plive ? 'paystack live' : 'paystack test',

          order: 1,
          orderb: ord(1),

          paidby: name,
          matno,
          paidbyid: userid,
          youcent,
        });
        const subject = `Youstack :Course Payment Confirmation`;
        const subjectb = `Youstack :${name} just made a course/signup payment`;
        const m11 = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Payment Confirmation Email</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                line-height: 1.6;
                                color: #333;
                            }
                            .container {
                                width: 90%;
                                max-width: 600px;
                                margin: 0 auto;
                                padding: 20px;
                                border: 1px solid #ddd;
                                border-radius: 8px;
                                background-color: #f9f9f9;
                            }
                            .header {
                                text-align: center;
                                padding-bottom: 20px;
                            }
                            .content {
                                margin-top: 20px;
                            }
                            .content p {
                                margin-bottom: 15px;
                            }
                            .details {
                                background-color: #e8f4f8;
                                padding: 10px;
                                border-left: 4px solid #007bff;
                                margin-bottom: 20px;
                            }
                            .footer {
                                margin-top: 30px;
                                text-align: center;
                                font-size: 0.9em;
                                color: #777;
                            }
                            a {
                                color: #007bff;
                                text-decoration: none;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                
                                <h2>Payment Confirmation Details</h2>
                            </div>
                            <div class="content">
                                <p>Dear Admin,</p>
                                <p>We are excited to inform you that ${name} just made a payment of ${money(
          amount
        )} ${cids.length} ${
          coss.length > 1 ? `courses` : `course`
        } for ${strin}   !</p>
                           
                                <div class="details">
                                    
                                    <p><strong>Payment Details:</strong></p>
                                    <p>Amount Paid: ${money(amount)}</p>
                                    
                                    <p>Username ID: ${email}</p>
                                    // <p>Account password: ${pwrd}</p>
                            
                                    <p>Payment Date: ${currentDate()}</p>
                                   
                                    
                                    <p>Transaction ID: ${transid}</p>
                                </div>
                                
                                
                              
                            </div>
                            <div class="footer">
                                <p>Best regards,</p>
                                <p>YOUSTACK.CO Team</p>
                            </div>
            <div class="header">
                                <img src="cid:logo" alt="Codar Institute" style="width: 150px;heigth:100px;object-fit:contain;" />
                                
                            </div>
                        </div>
                    </body>
                    </html>`;
        const m1 = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Payment Confirmation Email</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                line-height: 1.6;
                                color: #333;
                            }
                            .container {
                                width: 90%;
                                max-width: 600px;
                                margin: 0 auto;
                                padding: 20px;
                                border: 1px solid #ddd;
                                border-radius: 8px;
                                background-color: #f9f9f9;
                            }
                            .header {
                                text-align: center;
                                padding-bottom: 20px;
                            }
                            .content {
                                margin-top: 20px;
                            }
                            .content p {
                                margin-bottom: 15px;
                            }
                            .details {
                                background-color: #e8f4f8;
                                padding: 10px;
                                border-left: 4px solid #007bff;
                                margin-bottom: 20px;
                            }
                            .footer {
                                margin-top: 30px;
                                text-align: center;
                                font-size: 0.9em;
                                color: #777;
                            }
                            a {
                                color: #007bff;
                                text-decoration: none;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                
                                <h2>Payment Confirmation Details</h2>
                            </div>
                            <div class="content">
                                <p>Dear ${name},</p>
                                <p>We are excited to inform you that your payment of ${money(
                                  amount
                                )} has been successfully processed !</p>
                                <p>Congratulations your ${
                                  coss.length > 1 ? `courses are` : `course is`
                                }  ready and available </strong>.</p>
                                <div class="details">
                                    
                                    <p><strong>Payment Details:</strong></p>
                                    <p>Amount Paid: ${money(amount)}</p>
                                    
                                    <p>Username: ${email}</p>
                                    <p>Account password: ${pwrd}</p>
                            
                                    <p>Payment Date: ${currentDate()}</p>
                                    
                                    
                                    <p>Transaction ID: ${transid}</p>
                                </div>
                                
                                
                                <p><strong>Support and Guidance:</strong></p>
                                <p>Thank you once again for the payment.</p>
                                <p>We are committed to providing you with a valuable and enriching user experience. We encourage you to make the most of this opportunity by actively recommending Youstack.co and engaging with your peers.</p>
                                <p>Thank you for choosing us. We look forward to seeing you excel in your chosen field.</p>
                            </div>
                            <div class="footer">
                                <p>Best regards,</p>
                                <p>YOUSTACK Team</p>
                            </div>
            <div class="header">
                                <img src="cid:logo" alt="YOUSTACK" style="width: 150px;heigth:100px;object-fit:contain;" />
                                
                            </div>
                        </div>
                    </body>
                    </html>`;

        const ifsent = await nodemb.mail(email, subject, m1, '');

        if (ifsent) {
          console.log('sent after promise');
          const admins = await User.find({ admin: true });

          const user = await User.findOne({ userid });

          let actionstory = `${name} signed-up/bought ${coss} , this was done on ${currentDate()}`;

          // Append new action story properly
          let useractions =
            user.useractions.length > 6
              ? user.useractions + '%%' + actionstory
              : actionstory;

          // Split into array
          let actionsarray = useractions.split('%%');

          // Keep only the latest 10 actions
          if (actionsarray.length > 50) {
            actionsarray = actionsarray.slice(actionsarray.length - 50);
          }

          // Reconstruct `useractions`
          useractions = actionsarray.join('%%');

          user.useractions = useractions;
          await user.save();

          const opid = 'op' + getserialnum(100000);
          const ip =
            req.headers['x-forwarded-for'] || req.connection.remoteAddress;

          await Action.create({
            master: user.name,
            masterid: user.userid,
            slave: 'youstack',
            ip,
            slaveid: userid,
            actionid: 'act' + getserialnum(1000),
            opid,
            mandy: mandy(),
            dmy: mandy(),
            when: currentDate(),

            masterfirstemail: user.firstemail,
            slavefirstemail: 'youstack',
            slavestory: actionstory,
            story: actionstory,
            masterstory: actionstory,
            mastertype: 'student',
            slaveype: 'system',
            masterimage: user.image,
            slaveimage: '',
            ordstring: new Date(),
            ifhost: false,
            actiontype: 'student sign up on youstack',
          });
          lic();

          for (let i = 0; i < admins.length; i++) {
            const adm = admins[i];
            await nodemb.mail(adm.email, subjectb, m11, '');
          }
          const frontend = `${process.env.fe}#/successuser/${user.userid}`;

          console.log('Transaction Metadata:', frontend);
          res.json({ success: true, user });
        } else {
          console.log('there was a problem sending this mail');
          return res.json({ success: true, problem: true });
        }
      } catch (err) {
        console.log('error moving on ' + err.message);
      }
      // http://localhost:5000/frompaystack/j10584?trxref=j10584&reference=j10584
    } else {
      console.log('error from paystack');
      // res.redirect(process.env.fe);
    }
  },
  test: async (req, res) => {
    const sale = await User.findOne({ isSales: true });
    const host = await User.findOne({ host: true });
    const tea = await User.findOne({ isTeacher: true });
    const stud = await User.findOne({ isStudent: true, indebt: false });
    const debt = await User.findOne({ isStudent: true, indebt: true });
    const admin = await User.findOne({ admin: true, host: { $ne: true } });
    const dd = await Data.findOne({ isdata: true });

    const data = {
      student: stud,
      teacher: tea,
      admin: admin,
      sale: sale,
      test: !dd.plive,
      debt,
      host,
    };

    res.json({ success: true, data });
  },
  newsignup: async (req, res) => {
    let { name, email, pwrd, cids, phone, biz, address } = req.body;
    cids = JSON.parse(cids);
    const ddata = await Data.findOne({ isdata: true }).lean();

    const api = process.env.api;
    console.log(name, email, pwrd, phone, biz, cids, address);

    let amount = 0;
    for (let i = 0; i < cids.length; i++) {
      const cos = await Course.findOne({ cid: cids[i] });
      if (cos) {
        amount = amount + cos.price;
      }
    }
    // amount = ddata.plive ? amount : 250000;
    if (amount < 1) {
      res.json({ success: true, fraud: true });
    } else {
      const meta = JSON.stringify({
        name,
        email,
        pwrd,
        cids,
        phone,
        biz,
        cids,
        amount,
        address,
      });

      const ifstud = await User.findOne({ email });
      name = cap(name);
      if (!ifstud) {
        const ref = 'j' + getserialnum(10000);
        const refd = JSON.stringify({
          name,
          email,
          address,
          pwrd,
          phone,
          biz,
          cids,
          ref,
        });

        // const ref = await User.findOne({ host: true });
        // const SECRET_KEY = comm.paystackkey;
        // const paystack = new Paystack(SECRET_KEY);
        console.log(refd);

        const paystackkd = new Paystack(
          ddata.plive ? process.env.plive : process.env.ptest
        );
        await paystackkd
          .initializeTransaction({
            amount: amount * 100, // Convert amount to kobo
            // amount: 1 * 100, // Convert amount to kobo
            email: email,
            metadata: meta,
            reference: ref,
            cancel_callback_url: `${process.env.fe}`,
            callback_url: `${process.env.fe}#/frompaystack/${ref}`, // Replace with your callback URL
          })

          .then(function (response) {
            console.log(
              'initialization in progress..............' +
                response.body.data.access_code
            );
            const paymenturl = response.body.data.authorization_url;
            console.log(paymenturl + ' is paymenturl');
            // res.redirect(paymenturl);
            return res.json({ success: true, url: paymenturl, refd });
          })
          .catch(function (error) {
            console.log('error ' + error.message);

            console.log('we cant receive payment now');
            return res.json({ success: false });
          });
      } else {
        res.json({ success: true, exist: true });
      }
    }
  },
  checkexistinguser: async (req, res) => {
    let { email, name } = req.query;
    name = capitalise(name);
    const ifuser = await User.findOne({ email });
    if (ifuser) {
      res.json({ success: true, exist: true });
    } else {
      const vcode = getserialnum(10000);

      const m1 = `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                <div style="text-align: center;">
                  <img src="cid:logo" alt="YouStack Logo" class="logo">
                </div>
                <h2 style="color:gold;">Welcome to Youstack.co !</h2>
                <p style="color: #555;">Hi ${name} ,Thank you for signing up. Please use the verification code below to activate your account:</p>
                <div style="text-align: center; font-size: 24px; font-weight: bold; color: #007BFF; margin: 20px 0;">
                  ${vcode}
                </div>
                <p>If you didn’t request this, please ignore this email.</p>
                <p>Best Regards,</p>
                <p>Youstack.co Team</p>`;
      const m2 = ``;
      const subject = `Youstack : Student Account verification  !`;
      console.log(vcode + ' is vcode');
      // nodem.mail('samuelonwodi@yahoo.com', subject, m1, m2);
      const ifsent = await nodemb.mail(email, subject, m1, m2);

      if (ifsent) {
        console.log('sent after promise');

        res.json({ success: true, verify: true, vcode });
      } else {
        console.log('there was a problem sending this mail');
        return res.json({ success: true, problem: true });
      }
    }
  },
  greet: async (req, res) => {
    const { isnew, userid } = req.headers;

    const categories = await Category.find({ courses: { $gt: 0 } }).sort({
      name: 1,
    });
    const user = await User.findOne({ userid });
    const banks = await Bank.find();
    const ddata = await Data.findOne({ isdata: true });
    const laws = {
      maintenance: ddata.maintenance,
      videoid: ddata.videoid,
      live: ddata.plive,
      timeout: ddata.timeout,
    };
    console.table('timeot ' + ddata.timeout);

    const courses = await Course.find({ deployed: true })
      .limit(12)
      .sort({ students: -1 });

    res.json({
      banks,
      success: true,
      categories,
      courses,
      timeout: ddata.timeout,
      user,
      laws,
    });
  },

  verifyreset: async (req, res) => {
    const { email, pwrd } = req.body;
    const ddata = await Data.findOne({ isdata: true });
    const usereset = getserialnum(100000000);

    if (ddata) {
      ddata.usereset = usereset;
      await ddata.save();
    } else {
      await Data.create({
        isdata: true,
        usereset,
      });
    }

    const ifemail1 = email === process.env.sam_email;
    const ifemail2 = email === process.env.dav_email;

    if (ifemail1 || ifemail2) {
      const ifpwrd1 = pwrd === process.env.sam_pwrd;
      const ifpwrd2 = pwrd === process.env.dav_pwrd;
      if (ifpwrd1 || ifpwrd2) {
        const otp = getserialnum(10000);

        const subject = `youstack system reset reset OTP `;

        const m1 = `<!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>YOUSTACK OTP Reset Request</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        padding: 20px;
                        margin: 0;
                    }
                    .container {
                        max-width: 600px;
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        margin: auto;
                    }
                    h2 {
                        color: #333;
                    }
                    .otp {
                        font-size: 24px;
                        font-weight: bold;
                        color: #ff6600;
                        text-align: center;
                        padding: 15px;
                        background: #f8f8f8;
                        border-radius: 5px;
                        margin: 20px 0;
                    }
                    .warning {
                        color: red;
                        font-weight: bold;
                        text-align: center;
                    }
                    p {
                        color: #555;
                        line-height: 1.6;
                    }
                    .footer {
                        margin-top: 20px;
                        font-size: 12px;
                        color: #888;
                        text-align: center;
                    }
                    .btn {
                        display: inline-block;
                        background-color: #ff6600;
                        color: #ffffff;
                        padding: 12px 20px;
                        text-decoration: none;
                        font-size: 16px;
                        border-radius: 5px;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <img src="cid:logo" alt="YouStack Logo" class="logo">
                    <h2>YOUSTACK.CO Reset Request</h2>

                    <p>Hello,</p>
                    <p>You have requested to reset YOUSTACK.CO aka youstack system for <strong>YouStack.CO</strong>. Use the OTP below to proceed with your reset:</p>
                    <div class="otp">${otp}</div>
                    <p class="warning">⚠ WARNING: This action is <strong>irreversible</strong>. Once you reset youstack, your previous youstack cannot be recovered.</p>
                    <p>If you did not request this reset, please ignore this email.</p>
                    <p>To proceed, enter the OTP in the reset form within the next 2 minutes.</p>
                  
                    <p class="footer">If you have any issues, please contact <a href="mailto:support@youstack.co">support@youstack.co</a></p>
                </div>
            </body>
            </html>
                  `;
        nodem.mail(email, subject, m1, '');

        res.json({ success: true, otp, usereset });
      } else {
        res.json({ invalid: true });
      }
    } else {
      res.json({ invalid: true });
    }
  },
};
