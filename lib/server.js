'use strict';

let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');

let userController = require('./controllers/users_controller');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('hellooooooooo world');
});

app.post('/employees', userController.saveEmployee); // untuk save
app.put('/employees/:code', userController.updateEmployee); // untuk update
app.delete('/employees/:code', userController.deleteEmployee);// untuk delete
app.get('/employees/:code', userController.getEmployee); // untuk get one employee
app.get('/users', userController.getEmployees); //untuk get all employee

module.exports = app;