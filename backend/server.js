const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send('This is the backend server .');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000 on http://localhost:3000');
})