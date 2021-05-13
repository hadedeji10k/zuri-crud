const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

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
