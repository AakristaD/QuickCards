const express = require('express');
const router = express.Router();
const { createFlashcard } = require('../controllers/flashcardController');

router.post('/', createFlashcard);

module.exports = router;
