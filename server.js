const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); 

const app = express();
const helloRoute = require('./routes/helloRoute');
const flashcardRoute = require('./routes/flashcardRoute');

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/hello', helloRoute);
app.use('/api/flashcards', flashcardRoute);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});


