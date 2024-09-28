const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;

app.use('/', (req, res)=>{
    res.send('Hellow from server side..telugu')
})

app.listen(PORT, ()=>{
    console.log(`Server is runnig at PORT ${PORT}`)
})