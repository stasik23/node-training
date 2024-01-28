const express = require('express');
const PORT = 3000;

const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome PussyDestroyer228')
})

app.listen(PORT, ()=>{
    console.log(`Server running on port:${PORT}`);
})