/**
 * The above functions are controllers for handling CRUD operations on notes in a Node.js application
 * using a MongoDB database.
 * @param _ - The underscore `_` in the parameters of the `getAllNotes` function typically represents a
 * placeholder for a parameter that is not being used in the function. In this case, it seems that the
 * function does not require any specific parameter to be passed in, so the underscore is used to
 * indicate that the parameter
 * @param res - The `res` parameter in the functions represents the response object in Express.js. It
 * is used to send a response back to the client making the request. By using methods like
 * `res.status()` and `res.json()`, you can set the HTTP status code and send data in JSON format as a
 */

import Note from "../models/Note.js";

export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({createdAt: -1}); // -1 is descending, so the notes are sorted by newest to oldest. 1 is ascending, so the notes are sorted by oldest to newest. 
        res.status(200).json(notes);
    } 
    catch (error) {
        console.error("Error in getAllNotes controller", error); //log the error to the console. This is a good practice to help debug the code.
        res.status(500).json({message: "Internal server error"});
    }
};

export async function getNoteById(req, res) {
    try{
        const note = await Note.findById(req.params.id); 
        if(!note) return res.status(404).json({message: "Note not found"});
        res.status(200).json(note);
    }
    catch (error) {
        console.error("Error in getNoteById controller", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export async function createNote(req, res) {
    try {
        const {title, content} = req.body; //destructuring the title and content from the request body
        const note = new Note({title, content}); //creating a new note with the title and content
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } 
    catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export async function updateNote(req, res) {
    try {
        const {title, content} = req.body; //destructuring the title and content from the request body
        await Note.findByIdAndUpdate(req.params.id,{title,content}); //updating the note with the title and content
        const updatedNote = await Note.findById(
            req.params.id, 
            {title,content}, 
        {
            new: true
        }
        );

    if(!updatedNote) return res.status(404).json({message: "Note not found"});

    res.status(200).json({updatedNote}); 
    }
    catch (error) {
        console.error("Error in updateNote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export async function deleteNote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id); //deleting the note with the id
        if(!deletedNote) return res.status(404).json({message: "Note not found"}); //if the note is not found, return a 404 error
        res.status(200).json({message: "Note deleted successfully!"}); //if the note is deleted successfully, return a 200 status code and a message    
    }
    catch (error) {
        console.error("Error in deleteNote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
};