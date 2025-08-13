import mongoose, {Mongoose} from 'mongoose';

interface CachedMongoose {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

const MONGODB_URI = process.env.MONGODB_URI as string;

if(!MONGODB_URI) {
    throw new Error(`❌ MONGODB_URI not defined in environment variables`);
}

declare global {
  var mongoose: CachedMongoose | undefined;
}

const cached: CachedMongoose = global.mongoose || { conn: null, promise: null };

export async function connectDB(){
    try {
        // Check if we already have a connection
        if (cached.conn && mongoose.connection.readyState === 1) {
            console.log('✅ Using existing MongoDB connection');
            return cached.conn;
        }

        // If connection is connecting, wait for it
        if (cached.promise) {
            console.log('⏳ Waiting for existing MongoDB connection promise');
            cached.conn = await cached.promise;
            return cached.conn;
        }

        console.log('🔌 Creating new MongoDB connection');

        // Create new connection
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: 'full-stack-app',
            bufferCommands: false,
            tls: true,
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
            socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
            maxPoolSize: 10, // Maintain up to 10 socket connections
            minPoolSize: 1, // Maintain at least 1 socket connection
        }).then(m => {
            console.log('✅ MongoDB connected successfully');
            return m;
        }).catch(error => {
            console.error('❌ MongoDB connection failed:', error);
            cached.promise = null; // Reset promise on failure
            throw error;
        });

        cached.conn = await cached.promise;
        global.mongoose = cached;
        return cached.conn;

    } catch (error) {
        console.error('❌ Database connection error:', error);
        cached.promise = null; // Reset promise on failure
        throw new Error(`Database connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

