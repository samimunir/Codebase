import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Me</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Me</h1>');
});

app.post('/register', (req, res) => {
    // do something with the data
    res.sendStatus(201);
});

app.put('/user/sami', (req, res) => {
    res.sendStatus(200);
});

app.patch('/user/sami', (req, res) => {
    res.sendStatus(200);
});

app.delete('user/sami', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});