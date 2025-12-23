import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("\nAlhamdulillah MongoDB Connected Sucessfully !!\n")
    }catch(error){
        console.error("\nMongoDB Connection Failed !!", error);
        process.exit(1);
    }
}