import mongoose from 'mongoose';

const connectDB = async () => {
    try {

        // mongodb+srv://me:567894321@cluster0.ffz3icw.mongodb.net/assignment?retryWrites=true&w=majority


        await mongoose.connect("mongodb+srv://me:567894321@cluster0.ffz3icw.mongodb.net/assignment?retryWrites=true&w=majority",);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

export default connectDB;
