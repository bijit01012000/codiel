const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.use('/users',require('./users'));
router.get('/login',homeController.login);


//from any further routes,access here
//route.use('/routename',require('./routefile'));

module.exports = router;