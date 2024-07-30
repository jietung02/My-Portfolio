import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {

  if (cached.conn) {
    console.log('Connected to DB (Cached)');
    return cached.conn;
  }
  console.log(cached);
  if (!cached.promise) {
    const opts = {
      dbName: 'my_portfolio',
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(DATABASE_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  console.log('Connected to DB');
  return cached.conn;
}

export default connectDB;