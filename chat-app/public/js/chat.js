const socket = io()

socket.on('message', (message) => {
    console.log('Message received: ', message)
})

// Elements
const $messageForm = document.querySelector('#message-form')
const $messsageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')

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
                console.log("You can't send message anymore because you've been kicked")
            } else{ 
                return console.log("Watch your mouth son! " + (3-swearCount) + " more and you'll be banned.")
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
