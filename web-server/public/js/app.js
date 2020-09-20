
console.log('loaded js')

const callWeather = (location) => {
    fetch(`http://api.weatherstack.com/current?access_key=60bcc85c34713948f112e4decc8f7903&query=${location}&units=f`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                // console.log('data: ', data)
                console.log('data.location: ', data.location)
                console.log('data.forecast: ', data.current)
            }
        })
    })
}


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    callWeather(location)
    console.log('location: ', location)
})