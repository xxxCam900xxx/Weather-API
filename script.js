// The API To Fetch from Zürich Data
let apiKey = "8b3c2188b1fe57f318bdcd6231e30d94";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=en";
// let city = "Zürich";
// fetch(`${apiUrl}&q=${city}&appid=${apiKey}`)

async function requestZuerichData() {

    let page = document.getElementById("zuerich");

    try {
        const response = await fetch(`${apiUrl}&q=Zürich&appid=${apiKey}`)

        if (!response.ok) {
            throw new Error(`Repsonse Status: ${response.Status}`);
        }

        const jsonData = await response.json();
        console.log(jsonData);

        
        let weatherDataCard = document.createElement('div');
        weatherDataCard.innerHTML += "Location: " + jsonData.name + "<br>";
        weatherDataCard.innerHTML += "Temp: " + jsonData.main.temp + "<br>";
        weatherDataCard.innerHTML += "Min Temp: " + jsonData.main.temp_min + "<br>";
        weatherDataCard.innerHTML += "Max Temp: " + jsonData.main.temp_max + "<br>";
        weatherDataCard.innerHTML += "Weather Today: " + jsonData.weather[0].main + "<br>";
        weatherDataCard.innerHTML += "Wind: " + jsonData.wind.speed;
        page.appendChild(weatherDataCard);
    }
    catch (error) {
        let errorDataCard = document.createElement('div');
        errorDataCard.innerText = error.message;
        page.appendChild(errorDataCard);
    }
}