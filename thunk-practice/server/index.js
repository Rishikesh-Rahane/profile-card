const express = require('express');
const morgan = require('morgan');
const fs = require('fs').promises;
const cors = require('cors');

const app = express();

app.use(morgan('tiny'));


app.use(cors());

app.get('/data', (req, res, next) => {
  setTimeout(()=>{
  const data = fs.readFile('./data.json', 'utf-8').catch((err) => {
    console.log(err);
  });
  data.then((a) => {
    console.log(a);
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.parse(a));
  });
},3000)
});

app.listen(3004, () => {
  console.log('Server is running on port 3004');
});
