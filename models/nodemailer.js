const nodemailer = require("nodemailer");
const Data = require("../models/data");
const ddata = {
  plive:true
}
// var transporter = nodemailer.createTransport({
//   // port: 587,
//   // encryption: "ssl/tls",
//   host: "us3.proxy.mailhostbox.com",
//   // host: "us2.smtp.mailhostbox.com",
//   auth: {
//     // user: "hr@qrcon.com.ng",
//     user: "smtp.qrcon.com.ng",
//     pass: "BiqrK$!y%k37",
//   },
// });
const transporter = nodemailer.createTransport({
  // host: "us2.smtp.mailhostbox.com", // Your SMTP server
  // host: "smtp.qrcon.com.ng", // Your SMTP server
  // host: "us2.smtp.mailhostbox.com", // Your SMTP server
  // port: 465, // Use 465 for SSL or 587 for TLS
  // secure: true, // true for 465, false for 587
  // auth: {
  //   user: "support@mikptech.com.ng", // Your email address
  //   pass: "9qnx_*0oE@Mm", // Your email password
  //   // user: "hr@qrcon.com.ng", // Your email address
  //   // pass: "BiqrK$!y%k37", // Your email password
  // },
  // host: "smtp.mikptech.com.ng", // SMTP Server
  host: "us2.smtp.mailhostbox.com", // Your SMTP server

  port: 465, // Use 587 for START TLS or 465 for SSL
  secure: true, // true for 465, false for other ports
  auth: {
    user: "support@mikptech.com.ng", // Email address
    pass: "9qnx_*0oE@Mm", // Email password
  },
  // tls: {
  //   rejectUnauthorized: false, // In case of self-signed certificates
  // },
});
// mikptech ip 209.99.17.56
var transporterb = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});
// const ddata = await Data.findOne({isdata:true})
let gh = "m";
const emailb = "samuelonwodi@yahoo.com";
const nodemb = {
  mail: async (email, subject, m1, m2) => {
    console.log(email, subject + " params from nodemb");
    // mail: async(gh, subject, m1, m2) => {
    const data = await Data.findOne({ isdata: true });

    const htmlb = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>selit : ${subject}</title>
            </head>
            <style>
                body{
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    text-align: center;
                    text-transform: capitalize;
                }
                h1{
                    padding: 0 2%;
                    text-transform: capitalize;
                }
                
            </style>
            <body>

                

                <h3>${subject}</h3>

                <div>
                    <span>${m1}</span>
                    <span>${m2}</span>
                </div>


                
                
            </body>
            </html>

      `;
    var mailOptions = {
      from: {
        name: "YOUSTACK.CO",
        address: process.env.smtpemail,
      },
      to: ddata.plive ? email : emailb,
      subject: subject,
      // text: `Hi , verify account below`,
      html: htmlb,
      attachments: [
        {
          filename: "logob.png",
          path: "./public/logob.PNG", // Replace with the path to your logo
          cid: "logo", // Same as referenced in the img src
        },
      ],
    };

    transporterb.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        console.log("still failed on nodemb");
      } else {
        console.log(
          "Email sent: " + info.response + " sent through second option"
        );
      }
    });
  },
};
const resett = {
  mail: async (user, token) => {
    // mail: async(gh, subject, m1, m2) => {
    const data = await Data.findOne({ isdata: true });

    const htmlb = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>mikptechbrain System Reset Token</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                color: #333;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: auto;
                padding: 20px;
                background: #fff;
                border: 1px solid #ddd;
                border-radius: 5px;
            }
            .header {
                background: #007bff;
                color: #fff;
                padding: 10px 20px;
                text-align: center;
                border-radius: 5px 5px 0 0;
            }
            .content {
                padding: 20px;
            }
            .footer {
                text-align: center;
                font-size: 0.8em;
                color: #777;
                margin-top: 20px;
            }
            .button {
                display: inline-block;
                font-size: 16px;
                color: #fff;
                background-color: #007bff;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 5px;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>mikptechbrain System Reset</h1>
            </div>
            <div class="content">
                <p>Dear ${user.name},</p>
                <p>We received a request to reset the mikptechbrain system. To confirm this request, please use the following token:</p>
                <p style="font-size: 24px; font-weight: bold; text-align: center;">${token}</p>
                <p>This token is valid for 1 minute. Please enter it in the system to proceed with the reset.</p>
                <p>If you did not request this reset, please ignore this email or contact support for assistance.</p>
                
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} mikptechbrain. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
    var mailOptions = {
      from: {
        name: "mikptechbrain",
        address: "contact@mikptechbrain.com.ng",
      },
      to: data.plive ? user.email : emailb,
      subject: "System reset initialization",
      // text: `Hi , verify account below`,
      html: htmlb,
      attachments: [
        {
          filename: "logo.png",
          path: "./public/mikptech.png", // Replace with the path to your logo
          cid: "logo", // Same as referenced in the img src
        },
      ],
    };

    transporterb.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        console.log("still failed on nodemb");
      } else {
        console.log(
          "Email sent: " + info.response + " sent through second option"
        );
      }
    });
  },
};
const nodem = {
  mail: async (email, subject, m1, m2) => {
    // const ddata = await Data.findOne({ isdata: true });

    const htmlb = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>selit : ${subject}</title>
            </head>
            <style>
                body{
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    text-align: center;
                    text-transform: capitalize;
                }
                h1{
                    padding: 0 2%;
                    text-transform: capitalize;
                }
                
            </style>
            <body>

                

                <h3>${subject}</h3>

                <div>
                    <span>${m1}</span>
                    <span>${m2}</span>
                </div>


                
                
            </body>
            </html>

      `;
    var mailOptions = {
      from: {
        name: "selit.com.ng",
        address: "hr@selit.com.ng",
      },
      to: ddata.plive ? email : "samuelonwodi@yahoo.com",
      subject: subject,
      // text: `Hi , verify account below`,
      html: htmlb,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        console.log("there is error , trying the other guy");
        nodemb.mail(email, subject, m1, m2);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
};
const nodemm = {
  mail: async (email, subject, m1, m2) => {
    // const ddata = await Data.findOne({ isdata: true });

    const htmlb = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>mikptechsms ${subject}</title>
            </head>
            <style>
                body{
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    text-align: center;
                    text-transform: capitalize;
                }
                h1{
                    padding: 0 2%;
                    text-transform: capitalize;
                }
                
            </style>
            <body>

                

                <h3>${subject}</h3>

                <div>
                    <span>${m1}</span>
                    <span>${m2}</span>
                    <br>
                    <a href="https://mikptechhq.com/onlineschool">click to login </a>

                </div>


                
                
            </body>
            </html>

      `;
    var mailOptions = {
      from: {
        name: "mikptechhq",
        address: "mikptechhq@mikptechhq.com",
      },
      to: ddata.plive ? email : "samuelonwodi@yahoo.com",
      subject: subject,
      // text: `Hi , verify account below`,
      html: htmlb,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
};
const nodemh = {
  mail: async (html, email, subject) => {
    var mailOptions = {
      from: {
        name: "name of biz",
        address: "the registered email address",
      },
      to: email,
      subject: subject,
      // text: `Hi ${username} , verify account below ${testran}`,
      html: html,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
};
const recovery = async (email, user) => {
  // const ddata = await Data.findOne({ isdata: true });

  const recoveryLink = `${process.env.fe}resetpassword/${user.token}`;
  let mailOptions = {
    from: '"mikptech innovations" <noreply@mikptechinnovations.com>', // Sender address
    to: ddata.plive ? user.email : "samuelonwodi@yahoo.com", // List of recipients
    subject: "mikptech innovations Password Recovery", // Subject line
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
        <h2>Dear ${user.name},</h2>
        <p>We received a request to reset your password for your mikptech innovations account.</p>
        <p>Please click the button below to reset your password:</p>
        <a href="${recoveryLink}" style="display: inline-block; padding: 10px 20px; color: white; background-color: #28a745; text-decoration: none; border-radius: 5px;">
          Reset Password
        </a>
        
        <p>If you did not request a password reset, please ignore this email. Your password will remain unchanged.</p>
        <p>Regards,</p>
        <p>The mikptech innovations Team</p>
      </div>
    `,
  };

  // Send the email
  try {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    // await transporter.sendMail(mailOptions);
    console.log("Password recovery email sent successfully");
  } catch (error) {
    console.error("Error sending password recovery email:", error);
  }
};
const bmess = async (user, message) => {
  const ddata = await Data.findOne({ isdata: true });

  let mailOptions = {
    from: '"mikptech innovations" <noreply@mikptechinnovations.com>', // Sender address
    to: ddata.plive ? user.email : "samuelonwodi@yahoo.com",
    subject: `Happy Birthday ${user.name}`, // Subject line
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
        <h2>Dear ${user.name},</h2>
        <h3>Happy Birthday</h3>
        <p>${message}</p>
       
        
        <p>Regards,</p>
        <p>The mikptech innovations Team</p>
      </div>
    `,
  };

  // Send the email
  try {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    // await transporter.sendMail(mailOptions);
    console.log("Password recovery email sent successfully");
  } catch (error) {
    console.error("Error sending password recovery email:", error);
  }
};

// Example usage

const recipientEmail = "student@example.com";
const username = "John Doe";
// nodem.mail("samuelonwodi@yahoo.com", "new test","message 1", "mesage2")
module.exports = { nodem, nodemm, nodemh, bmess, nodemb, resett, recovery };



