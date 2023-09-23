const express = require("express");
const { myDataController } = require("../controllers");

const router = express.Router();

router.post("", myDataController.sendHistories);
router.post("/account", myDataController.sendAccounts);

module.exports = router;
