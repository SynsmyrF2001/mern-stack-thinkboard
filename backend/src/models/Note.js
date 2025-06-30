/* This code snippet is setting up a basic structure for creating a Note model using Mongoose in a
Node.js application. Here's a breakdown of what each part of the code is doing: */

import mongoose from "mongoose"; //importing the mongoose library

// 1st step - Create a schema for the note
// 2nd step - Create a model for the note

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    }, 
    { timestamps: true } //timestamps are automatically added to the schema. They are createdAt and updatedAt.
);

const Note = mongoose.model("Note", noteSchema);

export default Note;