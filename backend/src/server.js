import express from 'express';
import notesRoutes from './routes/noteRoutes.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
dotenv.config();

const PORT = process.env.PORT || 5001


const app = express();

connectDB();




app.get('/', (req, res, next) => {
    res.send('Hello This is a simple backend server .');
})

app.use('/api/data', notesRoutes);


app.listen(PORT,()=>{
    console.log(`\nServer is running on port ${PORT} on http://localhost:${PORT}\n`);
})