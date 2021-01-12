const generateMessage = (text) => {
    return {
        text,
        createdAt: new Date().getTime()
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