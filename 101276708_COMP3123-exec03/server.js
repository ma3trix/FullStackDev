var http = require("http")
console.log(http)

const SERVER_PORT = 8080

var server = http.createServer((req, res) => {
    console.log(req.url)

    res.write(req.url)
    res.end()


})

server.listen(SERVER_PORT)
console.log(`server running at ${SERVER_PORT}`)