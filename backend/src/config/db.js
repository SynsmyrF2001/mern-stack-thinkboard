/**
 * The `connectDB` function connects to a MongoDB database using the provided URI and logs a success
 * message or exits with an error message if there is a connection issue.
 */

import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log("MONGODB CONNECTED");
    }

    catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1); //exit the process with a failure code
    }
};
