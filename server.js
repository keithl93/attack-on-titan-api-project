import db from './lib/db/connection.js'
import express from 'express'

const app = express();
const port = 3000;

//set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});


app.listen(port);
console.log(`Server running on ${port}`);