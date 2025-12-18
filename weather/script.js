

async function getWeather(city) {

let apikey =``

    let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
    let rawdata = await raw.json();
    console.log(rawdata);
}

getWeather("London");