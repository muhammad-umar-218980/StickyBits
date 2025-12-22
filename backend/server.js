import express from 'express';
import notesRoutes from './routes/noteRoutes.js';

const app = express();

let PORT = 5001;


app.get('/', (req, res, next) => {
    res.send('This is the backend server .');
})

app.use('/api/data', notesRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} on http://localhost:${PORT}`);
})