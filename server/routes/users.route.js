const express = require("express");

const controllers = require("../controllers/users/users.controller");

const router = express.Router();

router.post("/", controllers.getUser);
router.post("/authorize", controllers.authorize);
router.get("/confirm/:token", controllers.checkToken);

module.exports = router;
