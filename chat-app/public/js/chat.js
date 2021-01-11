const socket = io()

// Elements
const $messageForm = document.querySelector('#message-form')
const $messsageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML
const systemMessageTemplate = document.querySelector('#system-message-template').innerHTML

const renderAdminMessage = (message) => {
    const html = Mustache.render(systemMessageTemplate, {
        message
    })
    $messages.insertAdjacentHTML('beforeend', html)
}


socket.on('message', (message) => {
    console.log('Message received: ', message)
    const html = Mustache.render(messageTemplate, {
        message: message.text,
        createdAt: moment(message.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

socket.on('locationMessage', (locationMessage) => {
    console.log('Location received: ', locationMessage)
    const html = Mustache.render(locationMessageTemplate, {
        locationUrl: locationMessage.url,
        createdAt: moment(locationMessage.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

socket.on('adminMessage', (adminMessage) => {
    renderAdminMessage(adminMessage)
})


let swearCount = 0

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    $messageFormButton.setAttribute('disabled', 'disabled')

    const userMessage = e.target.elements.message.value

    socket.emit('sendMessage', userMessage, (callbackMessage) => {
        $messageFormButton.removeAttribute('disabled')
        $messsageFormInput.value = ''
        $messsageFormInput.focus()
        if (callbackMessage.swore){
            swearCount++
            if (swearCount>=3){
                socket.emit('kickUser')
                e.target.elements.sendMessageButton.disabled=true
                renderAdminMessage("You can't send message anymore because you've been kicked")
            } else{ 
                return renderAdminMessage("Watch your mouth son! " + (3-swearCount) + " more and you'll be banned.")
            }
             
        } else{
            console.log(callbackMessage)
        }
    })
    
})

$sendLocationButton.addEventListener('click', () => {
    if (!navigator.geolocation){
        return alert('Geolocation is not supported by your browser.')
    }

    $sendLocationButton.setAttribute('disabled', true)

    try {
        navigator.geolocation.getCurrentPosition((position) => {
            const location = {
                'lat': position.coords.latitude,
                'long': position.coords.longitude
            }
            socket.emit('sendLocation', location, () => {
                console.log('Location shared!')
                $sendLocationButton.removeAttribute('disabled')
            })
        })
    } catch(e){
        console.log(e)
        $sendLocationButton.removeAttribute('disabled')
    }

})
