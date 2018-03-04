const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  const testPayload = [
    { id: 1, message: 'Hello, world!' },
    {
      id: 2,
      message: 'If you are seeing this, it means everything is working!',
    },
    { id: 3, message: 'I hope this saves you some time :)' },
  ];

  res.json(testPayload);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
