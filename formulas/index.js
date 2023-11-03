const express = require('express');
const bodyParser = require('body-parser');
const formulas = require('./formulas');

const app = express();

const jsonParser = bodyParser.json();

app.post('/pythag', jsonParser, (req, res) => {
    if (!req.body || !req.body.b || !req.body.c) {
        res.sendStatus(400);
        return;
    }
    console.log(formulas);

    let a = formulas.pythag(req.body.b, req.body.c);
    res.contentType('appplication/json');
    res.send({result: a});
});

app.listen(4001);