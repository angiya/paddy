const express = require('express');

const app = express();
let messageJson = {message: 'Testing node.js server for paddy on port 3000.'};

app.use(express.json());

app.get('/message', (request, response) => {
    response.send(messageJson);
});

app.listen(3000, () => {
    console.log('Program is running ...');
});