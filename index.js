const express = require('express')

const app = express()
const router = express.Router()
const routes = require('./route/route')

app.use('api/v1/', router.route(routes))

let port = process.env.PORT || 1000

app.listen(port, () => {
    console.log(`Black Panther API v1: ${port}`)
})