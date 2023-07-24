import mongoose from "mongoose";

const connectionString =
  process.env.DB_URL || "mongodb://localhost/attackontitan";

mongoose.connect(connectionString).catch((err) => {
  console.log("Error connecting to MongoDB", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("Error with MongoDB connection", err);
});

export default mongoose.connection;
