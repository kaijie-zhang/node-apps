require('../src/db/mongoose')
const User = require ('../src/models/user')

//5febbd7a09dabb0c9e11653a

User.findByIdAndUpdate('5febbb96c007dd0bcd640560', {age : 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})