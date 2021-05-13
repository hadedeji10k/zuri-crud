const express = require("express");
const mongoose = require("mongoose");
const dataRoutes = require("./routes/api/data");
const config = require("./config/database");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/data", dataRoutes);

const PORT = process.env.PORT || 4400;

mongoose
  .connect(
    config.database ||
      "mongodb+srv://zuri:zuri@1@cluster0.wrxuq.mongodb.net/zuri?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server running on port: ${PORT} and database is connected`)
    )
  )
  .catch((e) => console.log(e.message, "here is the message"));

// mongodb deprecation warnings
// mongoose.set("useUnifiedTopology", true);
// mongoose.set("useNewUrlParser", true);
// mongoose.set("useFindAndModify", false);
// // connect to db
// mongoose.connect(config.database);
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("Connected to DB");
// });

// // start the server
// app.listen(PORT, function () {
//   console.log("Server is running at port 5000");
// });
