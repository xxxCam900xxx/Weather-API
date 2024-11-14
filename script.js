// The API To Fetch from Zürich Data
let apiKey = "8b3c2188b1fe57f318bdcd6231e30d94";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=en";
// let city = "Zürich";
// fetch(`${apiUrl}&q=${city}&appid=${apiKey}`)

// https://stackoverflow.com/questions/6797569/get-city-name-using-geolocation

let popUp = document.getElementsByClassName('popUpBg')[0];

let weatherDataCard = document.createElement('div');
let locationName = document.createElement('h1');
let weatherToday = document.createElement('p');
let weatherTemprature = document.createElement('div');
let weatherTempratureTitle = document.createElement('h2');
let weatherTempratureDesc = document.createElement('p');
let weatherWind = document.createElement('div');
let weatherWindTitle = document.createElement('h2');
let weatherWindDesc = document.createElement('p');

async function requestZuerichData() {

    let page = document.getElementById("page");
    page.innerHTML = "";

    try {
        const response = await fetch(`${apiUrl}&q=Zürich&appid=${apiKey}`)

        if (!response.ok) {
            throw new Error(`Repsonse Status: ${response.Status}`);
        }

        const jsonData = await response.json();
        console.log(jsonData);

        createWeatherCard(jsonData);
    }
    catch (error) {
        let errorDataCard = document.createElement('div');
        errorDataCard.innerText = error.message;
        page.appendChild(errorDataCard);
    }
}

async function searchData(value) {

    popUp.classList.remove('show');
    page.innerHTML = "";

    try {
        const response = await fetch(`${apiUrl}&q=${value}&appid=${apiKey}`)

        if (!response.ok) {
            throw new Error(`Repsonse Status: ${response.Status}`);
        }

        const jsonData = await response.json();
        console.log(jsonData);

        createWeatherCard(jsonData);
    }
    catch (error) {
        let errorDataCard = document.createElement('div');
        errorDataCard.innerText = error.message;
        page.appendChild(errorDataCard);
    }



}

let closePopUpButton = document.getElementsByClassName('close')[0];
let ButtonListener = document.getElementById('search');
let PopUpInput = document.getElementById('city');

PopUpInput.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        ButtonListener.click();
    }
});

ButtonListener.addEventListener('click', () => {
    let value = PopUpInput.value;
    console.log(value);
    searchData(value)
});

closePopUpButton.addEventListener('click', () => {
    popUp.classList.remove('show');
})

function openPopUp() {
    popUp.classList.add('show');
    PopUpInput.value = "";
    PopUpInput.focus();
}

function createWeatherCard(jsonData) {

    weatherDataCard.classList.add("WeatherCard");

    locationName.innerText = jsonData.name;
    // TODO Switchcase for correct Grammatik
    weatherToday.innerText = `Weather Today has ${jsonData.weather[0].main}`;

    weatherTempratureTitle.innerText = "Temperatur";
    weatherTempratureDesc.innerHTML = `Durchschnitt Temparatur liegt bei ${jsonData.main.temp}° <br>`;
    weatherTempratureDesc.innerHTML += `Tiefst Temperaturen liegen bei <span class="blue_temp">${jsonData.main.temp_min}°</span> <br>`;
    weatherTempratureDesc.innerHTML += `Höchst Temperaturen lieben bei <span class="red_temp">${jsonData.main.temp_max}°</span>`;

    weatherTemprature.appendChild(weatherTempratureTitle);
    weatherTemprature.appendChild(weatherTempratureDesc);

    weatherWindTitle.innerText = "Wind";
    weatherWindDesc.innerText = `Heute weht ein Wind mit einer Windstärke von ${jsonData.wind.speed} km/h`;

    weatherWind.appendChild(weatherWindTitle);
    weatherWind.appendChild(weatherWindDesc);

    weatherDataCard.appendChild(locationName);
    weatherDataCard.appendChild(weatherToday);
    weatherDataCard.appendChild(weatherTemprature);
    weatherDataCard.appendChild(weatherWind);

    page.appendChild(weatherDataCard);

}

requestZuerichData();