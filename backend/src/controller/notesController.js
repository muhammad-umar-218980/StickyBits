export const getAllNotes = (req, res, next) => {
    res.status(200).json({message: 'Get request successful!'});
}

export const createNote = (req, res, next) => {
    res.status(201).json({message: 'Post request successful!'});
}

export const updateNote = (req, res, next) => {
    res.status(200).json({message: 'Put request successful!'});
}

export const deleteNote = (req, res, next) => {
    res.status(200).json({message: 'Delete request successful!'});
}

