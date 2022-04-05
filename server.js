import express from 'express';
import path from 'path';

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.join('./client/', "build")));

app.get('/', (req, res) => res.sendFile(path.join('./client/', "build", "index.html")));

app.listen(port, () => console.log(`Server listening on port localhost:${port}`));