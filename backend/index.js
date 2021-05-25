const express = require('express')
const resources = require('./resources')
const cors = require('cors')

const port = 3000
const app = express()

app.use(cors())

resources.map(resource => resource(app))

app.listen(port, () => {
  console.log(`geoguru app listening at http://localhost:${port}`)
})