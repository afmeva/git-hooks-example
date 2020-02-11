const bodyParser = require('body-parser')
const express = require('express')

const app = express()

const calcs = ['1']

app.use(bodyParser)

app.get('/api/calcs', (_, res) => {
  res.json(calcs)
})

app.get('*', (req, res) => {
  res.send('hello universe')
})

app.post('/github/test', (req, res) => {
  console.log(req.body)
})

app.listen('8080', () => {
  console.log('listening on port: 8080')
})
