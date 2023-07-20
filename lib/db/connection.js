import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/attackontitan')
  .catch((err) => {
    console.log("Error connecting to MongoDB", err)
  });

mongoose.connection.on('disconnected', () => {
  console.log("Disconnected from MongoDB")
});

mongoose.connection.on('error', (err) => {
  console.log("Error with MongoDB connection", err)
});

export default mongoose.connection;