const express = require('express');
const controllers = require('../controllers/home/home.controller')

const router = express.Router();

router.get('/', controllers.getMenuItems);

module.exports = router;
