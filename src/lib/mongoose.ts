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
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: 'full-stack-app',
            bufferCommands: false,
            tls: true,
        }).then(m => {
            console.log('✅ MongoDB connected');
            return m;
        });
    }

    cached.conn = await cached.promise;
    global.mongoose = cached;
    return cached.conn;

}

