const express = require("express");
const mongoose = require("mongoose");
const dataRoutes = require("./routes/api/data");
const config = require("./config/database");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/data", dataRoutes);

const PORT = 4400;

mongoose
  .connect(
    config.database ||
      "mongodb+srv://zuri:zuri@cluster0.wrxuq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
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
  .catch((e) => console.log(e.message));
