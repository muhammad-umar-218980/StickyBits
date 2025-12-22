const express = require('express');

const app = express();

let PORT = 5001;

app.get('/', (req, res, next) => {
    res.send('This is the backend server .');
})

app.get('/api/data', (req, res, next) => {
    res.status(200).json({message: 'Get request successful!'});
})

app.post('/api/data', (req, res, next) => {
    res.status(201).json({message: 'Post request successful!'});
})

app.put('/api/data/:id', (req, res, next) => {
    res.status(200).json({message: 'Put request successful!'});
})

app.delete('/api/data/:id', (req, res, next) => {
    res.status(200).json({message: 'Delete request successful!'});
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} on http://localhost:${PORT}`);
})