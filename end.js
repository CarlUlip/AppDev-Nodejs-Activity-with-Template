const express = require('express');
const router = express.Router();

const carl = require('../controller/carlCon');
router.get('/', carl.end);

module.exports = router;