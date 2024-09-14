const express = require('express');
const axios = require('axios');
const { newsController } = require('../controllers/newsController');
const { searchController } = require('../controllers/searchController');
const router = express.Router();

router.get('/try', newsController)
router.get('/search', searchController);

module.exports = router;