const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ message: 'Hello from DevOps Lab' }));
app.get('/health', (req, res) => res.sendStatus(200));
app.get('/time', (req, res) => res.json({ time: new Date() }));

app.listen(port, () => console.log(`App listening on port ${port}`));
