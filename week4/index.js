var express = require('express')

var app = express()
const SEEVER_PORT = 8089

app.use(express.static("./public"))


//http://localhost:8089/
app.get("/", (req, res) => {
    res.status(201).send("<h1>Welcome to Express Server </h1> ")
        //res.send("<h1>Welcome to Express Server </h1>")
        //res.end()
})

//http://localhost:8089/home
app.get("/home", (req, res) => {
    res.send("<h1>Home </h1>")

})

//http://localhost:8089/person
app.post("/person", (req, res) => {
    const p = {
        pid: 1,
        pnm: "Malik Adebiyi"
    }

    res.send(p)
})

//http://localhost:8089/person
app.get("/person", (req, res) => {
    const p = {
        pid: 1,
        pnm: "Malik Adebiyi"
    }
    res.send(JSON.stringify(p))
    res.json(p)
})

//http://localhost:8089/student/malik/adebiyi


app.get("/student/:fname/:lname", (req, res) => {
    //res.json(req.params)
    const { fname, lname } = req.params
    res.send(`Welcome ${fname} ${lname}`)
})

app.get("/emp", (req, res) => {
    res.json(res.query)
    if (req.query.fnm == undefined) {
        res.send("Please send fnm as query parameter")
    }
})

app.get("/index", (req, res) => {
    res.sendFile(_dirname + "/public/index")
})

app.listen(SEEVER_PORT, () => {
    console.log(`Server is running at http://localhost:${SEEVER_PORT}`)
})