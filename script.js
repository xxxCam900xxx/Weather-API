// The API To Fetch from Zürich Data
let apiKey = "8b3c2188b1fe57f318bdcd6231e30d94";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=en";
// let city = "Zürich";
// fetch(`${apiUrl}&q=${city}&appid=${apiKey}`)

async function requestZuerichData() {
    try {
        const response = await fetch(`${apiUrl}&q=Zürich&appid=${apiKey}`)

        if (!response.ok) {
            throw new Error(`Repsonse Status: ${response.Status}`);
        }

        const jsonData = await response.json();
        console.log(jsonData);
    }
    catch (error) {
        console.error(error.message);
    }
}