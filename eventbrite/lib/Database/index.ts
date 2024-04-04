import mongoose from "mongoose";
const MONGODB_URL =process.env.MONGODB_URL;

let cached  = (global as any).mongoose || {conn:null , promise:null};

export const connectToDataBase = async ()=>{
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error('MONGODB_URL is missing');

    cached.promise=cached.promise || mongoose.connect(MONGODB_URL ,{
        dbName:'eventbrite',
        bufferCommands:false,
    })

    cached.conn =await cached.promise;
    return cached.conn;
}