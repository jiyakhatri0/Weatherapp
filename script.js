const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '35529e50acmshe42c2bf03c7e96dp12989cjsn06b3989d95a2',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};


function getWeather(city) {
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
        .then(response => response.json())
        .then((responce) => {
            city_name.innerHTML = responce.location.name
            // region.innerHTML = responce.location.region
            // country.innerHTML = responce.location.country
            condition.innerHTML = responce.current.condition.text
            temp_feelsLike.innerHTML = `${responce.current.feelslike_c}<span style = "font-size: 18px;"> °C</span>`
            temp_c.innerHTML = `${responce.current.temp_c}<span style = "font-size: 44px;">°C</span>`
            wind_speed.innerHTML = responce.current.wind_kph
            humidity.innerHTML = responce.current.humidity
            if (responce.current.is_day === 0) {
                document.body.style.backgroundImage = "url('./assets/clear-night.jpg')";
                document.getElementById("condition-logo").src = "./assets/moon-cloudy.png";
            } else {
                document.getElementById("condition-logo").src = "./assets/weather-app-img/images/clear.png";
                document.body.style.backgroundImage = "url('./assets/clear.avif')";
            }
            wind_dir.innerHTML = responce.current.wind_dir



            console.log(responce);
        })
        .catch(err => console.error(err));
}

getWeather("bengaluru");

const searchCity = document.getElementById("search-data");

searchCity.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        getWeather(searchCity.value);
        searchCity.value = "";
    }
});

const btn = document.getElementById("submit")
btn.addEventListener("click", (e) => {
    getWeather(searchCity.value);
    searchCity.value = "";
});