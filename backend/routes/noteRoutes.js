import express from 'express';

const notesRouter = express.Router();

notesRouter.get('/', (req, res, next) => {
    res.status(200).json({message: 'Get request successful!'});
})

notesRouter.post('/', (req, res, next) => {
    res.status(201).json({message: 'Post request successful!'});
})

notesRouter.put('/:id', (req, res, next) => {
    res.status(200).json({message: 'Put request successful!'});
})

notesRouter.delete('/:id', (req, res, next) => {
    res.status(200).json({message: 'Delete request successful!'});
})

export default notesRouter;