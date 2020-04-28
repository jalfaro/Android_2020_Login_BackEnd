const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.set('PORT', process.env.PORT || 3000 );

module.exports = app;

