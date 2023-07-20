import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/rickMorty')
  .catch((err) => {
    console.log(chalk.red("Error connecting to MongoDB", err))
  });

mongoose.connection.on('disconnected', () => {
  console.log(chalk.bold("Disconnected from MongoDB"))
});

mongoose.connection.on('error', (err) => {
  console.log(chalk.red("Error with MongoDB connection", err))
});

export default mongoose.connection;