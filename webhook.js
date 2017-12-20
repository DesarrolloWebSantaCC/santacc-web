const http = require('http')
const { exec } = require('child_process')
const port = 4646

const requestHandler = (request, response) => {
  console.log(request.url)
  exec('rm -rf .cache', (error, stdout, stderr) => {
    if (error) {
      console.error(`rm -rf .cache error: ${error}`);
      return;
    }
    exec('gatsby build > out.txt', (error, stdout, stderr) => {
      if (error) {
        console.error(`gatsby build error: ${error}`);
        return;
      }
      exec('node publish > publish.txt', (error, stdout, stderr) => {
        if (error) {
          console.error(`node publish error: ${error}`);
          return;
        }
      })
    })
  })
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`Server is listening on ${port}`)
})
