import express from 'express';
const app = express()
const port = 3000

app.get('/ping', (_req, res) => res.send('pong1'))
app.listen(port, () => console.log(`app listening on port ${port}!`))