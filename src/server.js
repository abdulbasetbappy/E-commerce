const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'Test Successfull',
    });
});

app.listen(3000, () => {
  console.log(`Server Listening On: http://localhost:3000`);
});