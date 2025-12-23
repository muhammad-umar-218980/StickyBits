import Note from '../models/Note.js';

export const getAllNotes = async (req, res, next) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.log('Error fetching notes', error);
        res.status(500).json({message: 'Internal server error'});
    }
}

export const getNoteById = async (req, res, next) => {
    try {
        const noteId = req.params.id;
        const note = await Note.findById(noteId);

        if (!note) {
            return res.status(404).json({message: 'Note not found'});
        }         
        res.status(200).json(note);
    } catch (error) {
        console.log('Error fetching note by ID', error);
        res.status(500).json({message: 'Internal server error'});
    }   
}

export const createNote = async (req, res, next) => {
    try {
        const { title, content, color } = req.body;
        const newNote = new Note({ title, content, color });
        const result = await newNote.save();
        res.status(201).json({note: result, message: 'Note created successfully'});
    } catch (error) {
        console.log('Error creating note', error);
        res.status(500).json({message: 'Internal server error'});
    }
}

export const updateNote = async (req, res, next) => {
    try {
        const noteId = req.params.id;
        const { title, content, color } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            noteId,
            { title, content, color },
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({message: 'Note not found'});
        }

        res.status(200).json({note: updatedNote, message: 'Note updated successfully'});
    } catch (error) {
        console.log('Error in updating Note', error);
        res.status(500).json({message: 'Internal server error'});
    }
}

export const deleteNote = async (req, res, next) => {
    try {
        const noteId = req.params.id;
        const deletedNote = await Note.findByIdAndDelete(noteId);

        if (!deletedNote) {
            return res.status(404).json({message: 'Note not found'});
        }
        res.status(200).json({message: 'Note deleted successfully'});
    } catch (error) {
        console.log('Error in deleting Note', error);
        res.status(500).json({message: 'Internal server error'});
    }
}
