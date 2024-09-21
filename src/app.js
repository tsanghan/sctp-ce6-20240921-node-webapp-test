const express = require('express')
const app = express()
const port = 3000

const userService = require('./services/user')

app.get('/', (req, res) => {
  res.send()
})

app.get('/users', (req, res) => {
  res.json(userService.getUsers())
})

app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId
  res.json(userService.getUserByID(userId))
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
