
import mongoose from 'mongoose'
export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.mongo_url as string)
        const conn=mongoose.connection
        conn.on("connected",()=>{
            console.log("MongoDB connected successfully")
        })

    }catch(error){
        console.log("Database is not connected sucfcessfully!!!",error)
        process.exit(1);
    }
}