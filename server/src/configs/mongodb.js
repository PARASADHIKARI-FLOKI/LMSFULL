import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/lms");
  console.log("database is connected");
};



export default connectDB;