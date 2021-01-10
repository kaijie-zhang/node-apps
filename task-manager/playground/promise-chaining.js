require('../src/db/mongoose')
const User = require ('../src/models/user')

//5febbd7a09dabb0c9e11653a

// User.findByIdAndUpdate('5febbb96c007dd0bcd640560', {age : 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5febbb96c007dd0bcd640560', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})