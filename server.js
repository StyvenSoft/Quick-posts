const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');
const morgan = require('morgan');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');


const apiRouter = require('./api/api');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('./'));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', apiRouter);
app.use(errorhandler());


app.listen(PORT, () => {
    console.log(`Listening on port: http://localhost/${PORT}`);
});

module.exports = app;