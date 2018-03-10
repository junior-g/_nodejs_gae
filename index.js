const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()
const routes = require('./routes/route')

//const url = process.env.MONGODB_URI || "mongodb://localhost:27017/blackpanther"
const url = "mongodb://alc:alc@ds237855.mlab.com:37855/alc"

mongoose.connect(url, {
    //useMongoClient: true
})

routes(router)
app.use(bodyParser.json())
app.use('/api/v1', router)

const port = process.env.PORT || 1000

app.listen(port, () => {
    console.log(`Black Panther API v1: ${port}`)
})