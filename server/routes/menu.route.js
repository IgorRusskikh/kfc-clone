const express = require("express");

const controllers = require("../controllers/menu.contoller");

const router = express.Router();

router.get("/", controllers.getMenu);
router.post("/", controllers.appendMenuItem);

router.get("/categories", controllers.getCategoryList);
router.post("/categories", controllers.appendCategory);

module.exports = router;
