const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send();
});

app.listen(PORT, () => console.log(`Sever listening on port: ${PORT}`));