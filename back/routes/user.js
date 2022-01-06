const express = require('express');
const router  = express.Router();
const userCtrl = require('../controllers/user');
const validation = require('../middleware/password-auth');
const max = require("../middleware/limit");

router.post('/signup', validation, userCtrl.signup);
router.post('/login', max.limiter, userCtrl.login);


module.exports = router