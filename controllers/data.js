const dataDB = require("../models/dataModels");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

exports.getData = async (req, res) => {
  try {
    const data = await dataDB.find();

    if (data) return res.status(200).json(data);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

exports.createData = async (req, res) => {
  const data = req.body;
  console.log(data);
  const name = req.body.name;
  const email = req.body.email;
  const country = req.body.country;

  const newData = new dataDB({
    name,
    email,
    country,
  });

  try {
    await newData.save();
    res.status(200).json(newData);
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};

exports.updateData = async (req, res) => {
  const { id: _id } = req.params;
  const newData = req.body;

  try {
    const UpdatedData = await dataDB.findByIdAndUpdate(_id, newData, {
      new: true,
    });
    res.status(200).json({ UpdatedData });
  } catch (e) {
    console.log(e.message);
    res.status(409).json({ message: e.message });
  }
};

exports.deleteData = async (req, res) => {
  const { id: _id } = req.params;

  await dataDB.findByIdAndDelete(_id);

  res.status(409).json({ message: "Data deleted successfully!" });
};
