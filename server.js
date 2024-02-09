const express = require('express');
const routes = require('./routes');
require('dotenv').config(); 
const router = require('express').Router();
const apiRoutes = require('./api');

// import sequelize connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});