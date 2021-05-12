const express = require("express");
const {
  getData,
  createData,
  updateData,
  deleteData,
} = require("../../controllers/data.js");

const router = express.Router();

router.get("/", getData);
router.post("/", createData);
router.patch("/:id", updateData);
router.delete("/:id", deleteData);

module.exports = router;
