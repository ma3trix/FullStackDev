var express = require('express')

var studentRoutes = require('./routes/Student')

const SERVER_PORT = 8089
var app = express()

app.use((req, res, next) => {
        console.log("Request received  " + req.method + "  " + req.url)
        next()
    }

)


var v1api = express()



v1api.use("/student", studentRoutes)
v1api.use("/faculty", require('./routes/Faculty'))
app.use("/api/v1", v1api)


//http://localhost:8089/
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Express Apps")
})

app.get("/hello", (req, res) => {

})

app.post("/welcome", (req, res) => {

})

app.listen(SERVER_PORT, () => {
        console.log("Server started")
    })
    //http://localhost:8089