const express = require("express");
const controllers = require("../controllers/users/users.controller");

const router = express.Router();

router.post("/authorize", controllers.authorize);

module.exports = router;
