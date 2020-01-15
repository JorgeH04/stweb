const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();

//bbdd
const { mongoose } = require('./database');




//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'views')));




//routes
app.use('/api/post', require('./routes/index'));



// server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

