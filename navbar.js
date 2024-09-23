const express = require('express');
const router = express.Router();

const carl = require('../controller/carlCon');
router.get('/', carl.navbar);

module.exports = router;