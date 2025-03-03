const User = require('../models/user');

const Transact = require('../models/transaction');
const Teacher = require('../models/teacher');
const Topic = require('../models/topics');
// const Contact = require('../models/message');
const Data = require('../models/data');
// const Support = require('../models/support');
const Paystack = require('paystack-node');
const axios = require('axios');
const Action = require('../models/actions');
const Actionb = require('../models/studactions');
const moment = require('moment');
const { nodem } = require('../models/nodemailer');
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
const categg = [
  {
    name: 'Web development',
    ccid: 1,
    image: 'webdev.jpg',
    catid: 'categ4565768',
    desc: 'Learn various web development methodologies',
  },
  {
    name: 'Business',
    ccid: 2,
    image: 'business.jpg',
    catid: 'cate1234568',
    desc: 'Learn various Business methodologies',
  },
  {
    name: 'Marketing',
    ccid: 3,
    image: 'marketing.jpg',
    catid: 'categ40033768',
    desc: 'Learn various Marketing methodologies',
  },
  {
    name: 'Design',
    ccid: 4,
    image: 'design.jpg',
    catid: 'categ45853768',
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
const resetb = async (req, res) => {
  let email = process.env.sadmin_samemail;
  let resettimes = 0;

  const getdata = await Data.findOne({ isdata: true });
  resettimes = getdata.resettimes;

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
    addedby: 'youbrain(r)',
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
    addedby: 'youbrain(r)',
    physical: 'nil',
    addedbyid: 'youbrain',
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
      addedbyid: 'youbrain',
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
      sdesc: cos.sdesc,
      category: catg.name,
      catid: catg.catid,
      ccid: catg.ccid,
      teacherid: tid,
      mstudents: 0,
      locked: false,
      addedbytype: 'youbrain',
      addedby: 'youbrain',
      addedbyid: 'youbrain',
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
      introlink: '',
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
        subtopic: subtopic.join(','),
        cname: cos.name,
        editedby: 'nil',
        lastedit: 'nil',
        lasteditby: 'nil',
        lastedittime: 'nil',
        timesedited: 0,
        createdby: 'youbrain',

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
      catid: cato.catid,
      ccid: cato.ccid,
      desc: cato.desc,
      ordstring: new Date(),
      createdby: email,
      image: process.env.api + `categories/${cato.image}`,
    });
  }

  let who = email;

  const slave = 'youbrain';
  const when = currentDate();

  const actionid = 'act' + getserialnum(100000);
  const opid = 'op' + getserialnum(100000);
  const story = `${who} reset youbrain on ${currentDate()} the ${ord(
    resettimes + 1
  )}`;
  const slavestory = `youbrain was reset by ${who} on ${currentDate()}`;
  const masterstory = `I reset youbrain on ${currentDate()}`;
  const tusers = await User.find();
  for (let i = 0; i < tusers.length; i++) {
    const yu = tusers[i];
    yu.cc = 10000;
    await yu.save();
  }

  await Action.create({
    master: who,
    masterid: 'no id',
    slave: 'youbrain',
    slaveid: 'youbrain',
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
    slavetype: 'youbrain',
    masterimage: 'youbrain',
    slaveimage: 'youbrain',
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
    admin: true,
    sadmin: true,
    userid: 'adm' + getserialnum(10000),
    type: 'admin',
  });
  await User.create({
    name: process.env.dav_name,
    email: process.env.dav_email,
    address: process.env.dav_address,
    pwrd: nhpwrdb,
    pwrdb: pwrdb,
    licensed: true,
    type: 'admin',
    admin: true,
    sadmin: true,
    userid: 'adm' + getserialnum(10000),
  });
  getdata.launchedparam = process.env.launchedparam;
  getdata.usereset = getdata.usereset + 1;
  getdata.lastreset = currentDate();
  getdata.lastresetby = email;
  await getdata.save();
  gradecat();
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

module.exports = {
  Home: async (req, res) => {

    const things = {
        name:"things"
    }

    res.json({ things });
  },
  getcourses: async (req, res) => {
    console.log("fetching db data");
    
    const courses = await Course.find().sort({name:1})
    


    res.json({ success:true,courses});
  },
  db: async (req, res) => {
    console.log("fetching db data");
    const allusers = await User.countDocuments()
    const courses = await Course.countDocuments()
    const categories = await Category.countDocuments()
    const boughtcourses = await Course.countDocuments({bought:true})
    const teachers = await User.countDocuments({isTeacher:true})
    const mandystudents = await User.countDocuments({isStudent:true,smandy:mandy()})
    const todaystudents = await User.countDocuments({isStudent:true,sdmy:dmy()})
    const trans = await Transact.find()
    const transactions = await Transact.find().sort({ordstring:-1})
    const ddata = await Data.findOne({isdata:true})
    const revenue = money(sumByKey(trans,"amount"))
    const profit = money(sumByKey(trans,"profit"))



    const data = {
        allusers,boughtcourses,
        teachers,
        lastteachersignup:ddata.lastteachersignup,
        laststudentsignuptime:ddata.laststudentsignuptime,
        lastteachersignuptime:ddata.lastteachersignuptime,
        laststudentsignup:ddata.laststudentsignup,
        mandystudents,todaystudents,categories,revenue,profit,courses,
        youcent:ddata.youcent+"%"
    }

   
    console.log('mikp visited home @ ' + currentDate());

    res.json({ data,transactions ,success:true});
  },

  
};
