var express = require('express')

var routes = express.Router()


routes.get("/", (req, res) => {
    res.send("<h1>Student - GET - / </h1>")
})

routes.route("/fulltime")
    .get((req, res) => {
        res.send("<h1>Full Time Student - GET - /fulltime </h1>")
    })
    .post((req, res) => {
        res.send("<h1>Full Time Student - POST - /fulltime </h1>")
    })
    .put((req, res) => {
        res.send("<h1>Full Time Student - PUT - /fulltime </h1>")
    })

routes.route("/parttime")
    .get((req, res) => {
        res.send("<h1>Part Time Student - GET - /fulltime </h1>")
    })
    .post((req, res) => {
        res.send("<h1>Part Time Student - POST - /fulltime </h1>")
    })

module.exports = routes