const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

const jsonParser = bodyParser.json();

app.post('/', jsonParser, async (req, res) => {
    try {
        const serviceRes = await axios.post('http://localhost:4001/pythag', req.body);
        res.contentType('application/json');
        console.log(serviceRes.data);
        res.send(serviceRes.data);  
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
    
});

app.listen(4000);