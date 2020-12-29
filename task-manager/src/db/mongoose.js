const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const me = new User({
    name: 'Kaijie',
    age: 'test'
})

const shower = new Task({
    description: 'Shower',
    completed: false
})

shower.save().then(() => {
    console.log(shower)
}).catch((wrong) => {
    console.log('Error:', wrong)
})

