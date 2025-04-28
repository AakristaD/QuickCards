const express = require('express');
const router = express.Router();
const Flashcard = require('../models/Flashcard');

router.get('/', async (req, res) => {
  try {
    const firstFlashcard = await Flashcard.findOne();

    if (!firstFlashcard) {
      return res.status(404).json({ message: 'No flashcards found' });
    }

    res.json(firstFlashcard); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
