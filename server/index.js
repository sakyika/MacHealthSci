const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
// app.use(bodyParser.json({ type: '*/*' }));

require('./routes/authRoutes')(app);

app.get('/', (requestAnimationFrame, res) => {
    res.send({ message: 'Welcome McMaster Health Sciences!'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
