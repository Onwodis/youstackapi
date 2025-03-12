const express = require("express");
const path = require("path");
const http = require("http");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.fe.slice(0, -1), // Ensure this matches your frontend URL
    methods: ["GET", "POST"],
  },
});
app.set("socketio", io);

app.use(cors());
app.use(express.json({ limit: "900mb" }));
app.use(express.urlencoded({ limit: "950mb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(fileUpload());

// Set up Handlebars
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
        return arr ? options.inverse(this) : options.fn(this);
      },
    },
  })
);
app.set("view engine", ".hbs");



// ✅ Corrected Socket.io Handling
io.on("connection", (socket) => {
  console.log(`Client connected with socket ID: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

// Routes
const mainRoutes = require("./routes/mainRoutes");
const adminRoutes = require("./routes/adminRoutes");
const tutorRoutes = require("./routes/tutorRoutes");

app.use("/", mainRoutes);
app.use("/admin", adminRoutes);
app.use("/tutor", tutorRoutes);

// ✅ Corrected MongoDB Connection
mongoose
  .connect(process.env.MONGOOSE, {
    useNewUrlParser: true, // Fixed incorrect flag
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully!");
  })
  .catch((err) => {
    console.error("Error occurred during DB Connection:", err.message);
  });

// ✅ Use `server.listen` instead of `app.listen`
const PORT = process.env.PORT 
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
