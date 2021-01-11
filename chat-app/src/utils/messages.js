const generateMessage = (text, swore) => {
    return {
        text,
        createdAt: new Date().getTime(),
        swore
    }
}

const generateLocationMessage = (url) => {
    return {
        url,
        createdAt: new Date().getTime()
    }
}

const generateAdminMessage = (text) => {
    return {
        text
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}