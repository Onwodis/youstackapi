
const express = require('express');
const path = require('path');

const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const som = new Date();
const fy = new Date(som.getFullYear() + 3 ,som.getMonth() ,som.getDate() );
console.log(fy.toDateString() + " is new fy");
const app = express();
app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(cors());
app.use(express.json()); // ✅ Use only this for JSON requests
app.use(express.urlencoded({ extended: true })); // ✅ Use only this for URL-encoded form data
app.use(express.static('public'));
app.use(cookieParser());
app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
    helpers: {
      ifnot: function (arr, options) {
        if (!arr) {
          return options.fn(this);
        }
        return options.inverse(this);
      },
    },
  })
);
app.set("view engine", ".hbs");

const mainRoutes = require('./routes/mainRoutes');
const adminRoutes = require('./routes/adminRoutes');


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



mongoose
  .connect(process.env.MONGOOSE, {
    useNewUrlParser: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully ! ");
  })
  .catch((err) => {
    console.log("Error occurred during DB Connection " + err.message);
  });

// MiddleWare



app.use('/', mainRoutes);
app.use('/admin', adminRoutes);



function rcron() {
  console.log("cron jobs are actively running " + currentDate());
  cron.schedule("0 0 * * *", async () => {
    bday();
    Run();
  });
}



const PORT = process.env.PORT 



app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
