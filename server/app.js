require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const errorhandler = require('./middlewares/errorhandler');
const port = 3000

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);
app.use(errorhandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// module.exports = app;
