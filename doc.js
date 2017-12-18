const exec = require('child_process').exec
const path = require('path')

exec(`node ${path.join(__dirname, 'node_modules/documentation/bin/documentation')} serve ${path.join(__dirname, 'src')} --port 4001`)
exec('start http://localhost:4001')
exec('open http://localhost:4001')
