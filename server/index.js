const express = require('express');

const app = express();

app.get('/', (requestAnimationFrame, res) => {
    res.send({ message: 'Welcome McMaster Health Scieces!'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
