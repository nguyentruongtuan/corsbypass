const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();

app.use(cors({origin: '*'}));

app.use ('/', (req, res) => {
    const url = req.url;
    const api = process.env.API;

    req.pipe(request({url: api + url})).pipe(res);
});

app.listen(5000, () => {
    console.log('Cors bypass enable at port 5000');
})