const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://dbJithuze:jithu123@cluster0.ftt0b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

module.exports = mongoose.connection;