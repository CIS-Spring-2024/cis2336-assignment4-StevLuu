const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
let lastSubtotal = 0;  // This variable will hold the subtotal across different requests


app.get('/', (req, res) => {
  res.send('Welcome to my backend!');
});


app.post('/subtotal', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let sub = req.body.subtotal;
  if (sub < 0) {
    return res.status(400).json({ message: 'The Subtotal must be positive!' });
  }
  lastSubtotal = sub;
  console.log("Received subtotal: ", lastSubtotal);
  res.json({ message: 'Subtotal saved successfully' });
});

app.get('/subtotal', (req, res) => {
  // Ensure the subtotal is wrapped in an object under the key 'subtotal'
  res.json({ subtotal: lastSubtotal });  // Corrected to return an object
});


// Not found
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});
// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
app.post('/subtotal', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { sub } = req.body;
  if (sub < 0) {
    return res.status(400).json({ message: 'The Subtotal must be positive!' });
  }
  console.log("Received subtotal: ", sub);
  lastSubtotal = sub;
  res.json({ message: 'Subtotal saved successfully' });
});




app.post('/subtotal', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { sub } = req.body;
  if (sub < 0) {
      return res.status(400).json({ message: 'The Subtotal must be positive!' })};
  console.log(req.body);
  res.send('data sent');
  
});
*/