const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParse.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send('Hello,World!')
})

app.listen(process.env.PORT || 8081)
