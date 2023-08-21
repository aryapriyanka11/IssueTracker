const mongoose = require('mongoose');

const dbURL = "mongodb+srv://priyankaryaofficial:AgrikUpLhUTDaRcY@cluster0.4bve9zx.mongodb.net/?retryWrites=true&w=majority"



mongoose.connect(dbURL)
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });