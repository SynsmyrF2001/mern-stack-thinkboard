/* This code snippet is a basic setup for a Node.js application using Express framework. Here's a
breakdown of what the code is doing: */
import dotenv from "dotenv"; //importing dotenv
import cors from "cors"; //importing cors
import express from "express";  //importing express

import notesRoutes from "./routes/notesRoutes.js"; //importing the notesRoutes from the notesRoutes.js file
import { connectDB } from "./config/db.js"; //importing the connectDB function from the db.js file
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express(); //express is a framework for building web applications
const PORT = process.env.PORT || 5001; //process.env.PORT is the port number that the server will listen to, if not specified, it will listen to port 5001



// Middleware
app.use(cors({
    origin: "http://localhost:5173",
})); //use the cors middleware to allow requests from the frontend
app.use(express.json()); //use the express.json() middleware to parse the request body
app.use(rateLimiter); //use the rateLimiter middleware to limit the number of requests to the server


// Logging middleware
app.use((req, res, next) => {
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
    next();
});

app.use("/api/notes", notesRoutes); //use the notesRoutes for the /api/notes path

/* The code `connectDB().then(() => { app.listen(PORT, () => { console.log(`Server started on PORT:
`); }); })` is establishing a connection to the database using the `connectDB` function and
then starting the server to listen on the specified port. */

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on PORT: ${PORT}`); //log the port number to the console
 });
})
