const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [
  { email: 'jim@gmail.com', number: '221122' },
  { email: 'jam@gmail.com', number: '830347' },
  { email: 'john@gmail.com', number: '221122' },
  { email: 'jams@gmail.com', number: '349425' },
  { email: 'jams@gmail.com', number: '141424' },
  { email: 'jill@gmail.com', number: '822287' },
  { email: 'jill@gmail.com', number: '822286' }
];

app.post('/search', (req, res) => {
  const { email, number } = req.body;

  setTimeout(() => {
    const results = users.filter(user => {
      return user.email === email && (!number || user.number === number);
    });
    res.json(results);
  }, 5000);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});