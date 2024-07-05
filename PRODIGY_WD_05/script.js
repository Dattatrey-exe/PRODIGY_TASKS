const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '5dd31714cemsh99e235c295397c2p1897bdjsncd42ad354213',
        'x-rapidapi-host': 'tomorrow-io1.p.rapidapi.com'
    }
};

let getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            loc.innerHTML = response.location.name
            temperature.innerHTML = response.timelines.minutely[0].values.temperature
            feels_like.innerHTML = response.timelines.minutely[0].values.temperatureApparent
            humidity.innerHTML = response.timelines.minutely[0].values.humidity
            windSpeed.innerHTML = response.timelines.minutely[0].values.windSpeed
            dewPoint.innerHTML = response.timelines.minutely[0].values.dewPoint
            cloudCeiling.innerHTML = response.timelines.minutely[0].values.cloudCeiling
            cloudCover.innerHTML = response.timelines.minutely[0].values.cloudCover
            visibility.innerHTML = response.timelines.minutely[0].values.visibility
            rainIntensity.innerHTML = response.timelines.minutely[0].values.rainIntensity
        })
        .then(err => console.log(err))
}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("junagadh")