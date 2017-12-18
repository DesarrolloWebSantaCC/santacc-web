const http = require('http')
const { exec } = require('child_process')
const port = 4646

const requestHandler = (request, response) => {
  console.log(request.url)
  exec('gatsby build', console.log)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`Server is listening on ${port}`)
})
