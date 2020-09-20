
console.log('loaded js')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('.messageOne')
const messageTwo = document.querySelector('.messageTwo')

const callWeather = (location) => {
    fetch(`http://api.weatherstack.com/current?access_key=60bcc85c34713948f112e4decc8f7903&query=${location}&units=f`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                messageOne.textContent = `There has been an error, try again`
            } else {
                // console.log('data: ', data)
                // return [data.location, data.current]
                messageOne.textContent = `In ${data.location.name}, ${data.location.region}, it is ${data.current.temperature} degrees farenheit`
                console.log('data.location: ', data.location)
            }
        })
    })
}


// messageOne.textContent = 'message one'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    const results = callWeather(location)
    console.log('results: ', results)
})