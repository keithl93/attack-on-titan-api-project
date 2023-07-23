import db from './lib/db/connection.js'
import express from 'express'
import routes from './lib/routes/index.js'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'lib', 'views'))); 
app.use('/', routes);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'lib', 'views')); 

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port);
console.log(`Server running on ${port}`);
