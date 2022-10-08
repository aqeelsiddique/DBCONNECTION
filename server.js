
var express = require('express');
var app = express();
const mongoose = require('mongoose');

// DB Connection
const db = process.env.MONGODB_URI || 'mongodb+srv://DBCONNECTION:Nvl4Z6lAb1TSAS04@cluster0.pc11gch.mongodb.net/DBCONNECTION?retryWrites=true&w=majority';

// Connect to MongoDB instance
mongoose
  .connect(db, {
   useNewUrlParser: true, 

   useUnifiedTopology: true 
  })
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.log('MongoDB connection error: ' + err));

const port = process.env.PORT || 4002;

app.listen(port, () => console.log(`Server started on port: ${port}`));
