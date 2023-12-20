const express = require("express");

const controllers = require("../controllers/menu.contoller");

const router = express.Router();

router.get("/categories", controllers.getCategoryList);
router.post("/categories", controllers.appendCategory);

router.get("/", controllers.getMenu);
router.post("/", controllers.appendMenuItem);
router.get("/:id", controllers.getMenuItem);

module.exports = router;
