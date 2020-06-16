import express from 'express';
const app = express();

app.get('/users', (req, res) => {
    res.send({ message: 'Errou'})
})

app.listen(3333);