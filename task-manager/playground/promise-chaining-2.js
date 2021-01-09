require('../src/db/mongoose')
const Task = require ('../src/models/task')

Task.findByIdAndDelete('5febbd7a09dabb0c9e11653a').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})