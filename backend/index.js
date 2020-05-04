const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const fileupload = require("express-fileupload");
const cors = require("cors");
//Load env vars
dotenv.config({ path: "./config/config.env" });

connectDB();

//Route files

const tutor = require("./routes/tutor");
const auth = require("./routes/auth");
const users = require("./routes/users");
const category = require("./routes/category");

//initialize app with express
const app = express();

//bodyparser
app.use(express.json());

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// File uploading
app.use(fileupload());

// Enable CORS
app.use(cors());

// //  image upload
// app.use(express.static(__dirname/frontend/public/uploads/));

//Mount routers

app.use("/api/v1/tutor", tutor);
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
app.use("/api/v1/category", category);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error :${err.message}`);
  //close server and exit process
  server.close(() => process.exit(1));
});
