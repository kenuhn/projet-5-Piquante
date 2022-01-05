const express = require('express');
const router  = express.Router();
const userCtrl = require('../controllers/user');
const validation = require('../models/password')

router.post('/signup', validation, userCtrl.signup);
router.post('/login', userCtrl.login);


module.exports = router