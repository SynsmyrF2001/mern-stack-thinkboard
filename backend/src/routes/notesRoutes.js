/* This code snippet is setting up a router using the Express framework in a Node.js application. It
imports the necessary functions from a notes controller file (`notesController.js`) and defines
routes for handling different HTTP requests. Here's a breakdown of what each part does: */

import express from "express";
import { getAllNotes, createNote, updateNote, deleteNote, getNoteById } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;



