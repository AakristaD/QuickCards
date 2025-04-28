const Flashcard = require('../models/Flashcard');

const createFlashcard = async (req, res) => {
  try {
    const { question, answer, subject } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ message: 'Question and Answer are required.' });
    }

    const newFlashcard = new Flashcard({ question, answer, subject });
    await newFlashcard.save();

    res.status(201).json(newFlashcard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createFlashcard };
