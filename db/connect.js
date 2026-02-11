const mongoose = require('mongoose')

const username = 'adhikaritushar3702_db_user'
const password = encodeURIComponent("jy8eO291LyMa20uS");

const connectionString = `mongodb+srv://${username}:${password}@cluster0.r9i2xoc.mongodb.net/mydb?retryWrites=true&w=majority`;

const connectDB = async() => {
    try {
    await mongoose.connect(connectionString);
    console.log("MongoDB connected 🚀");
  } catch (error) {
    console.error("MongoDB connection failed ❌", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;