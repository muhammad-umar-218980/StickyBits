import express from 'express';
import { getAllNotes , createNote , updateNote , deleteNote} from '../controller/notesController.js';

const notesRouter = express.Router();


notesRouter.get('/', getAllNotes)

notesRouter.post('/', createNote)

notesRouter.put('/:id', updateNote)

notesRouter.delete('/:id', deleteNote)

export default notesRouter;