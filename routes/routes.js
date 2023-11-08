const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello World GET");
});

router.post("/", async (req, res) => {
  res.send("Hello World POST");
});

router.post("/user/list", userController.listUser);
router.post("/user", userController.createUser);
module.exports = router;