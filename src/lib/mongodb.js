import mongoose from 'mongoose';

// Include the database name in the connection string
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI)  // Removed deprecated options
            .then((mongoose) => {
                console.log('MongoDB connected successfully');
                return mongoose;
            })
            .catch((err) => {
                console.error('MongoDB connection error:', err);
            });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectToDatabase;
