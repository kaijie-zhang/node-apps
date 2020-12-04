const fs = require('fs')

const oldDataBuffer = fs.readFileSync('1-json.json')
const oldDataJSON = oldDataBuffer.toString()
oldData = JSON.parse(oldDataJSON)

oldData.name = 'Kaijie'
oldData.age = 25

const newJSON = JSON.stringify(oldData)

fs.writeFileSync('1-json.json', newJSON)
