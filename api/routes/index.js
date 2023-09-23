const express = require("express");
const router = express.Router();
const authRouter = require("./authRouter");
const myDataRouter = require("./myDataRouter");

router.use("/auth", authRouter);
router.use("/mydata", myDataRouter);

module.exports = router;
