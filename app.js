const express = require('express');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/data.js');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Contol-Allow-Headers', 'Content-Type, Authorization');

    next();
});

app.use(dataRoutes);

app.listen(8080);