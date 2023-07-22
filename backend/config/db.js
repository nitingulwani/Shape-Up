import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.createConnection(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.meessage}`);
    process.exit(1);
  }
};

export default connectDB;