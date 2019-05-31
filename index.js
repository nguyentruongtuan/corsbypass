const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();

app.use(cors({origin: '*'}));

app.use ('/', (req, res) => {
    const url = req.url;
    const api = process.env.API;

    console.log(api + url, req.rawHeaders, req.params);

    req.on('data', (buffer) => {
        console.log(buffer.toString())
    })

    const _request = request({url: api + url});
    _request.on('response', (_res) => {
        _res.headers['access-control-allow-origin'] = "*"
    })
    req.pipe(_request)
    .pipe(res);
});

app.listen(5000, () => {
    console.log('Cors bypass enable at port 5000');
})