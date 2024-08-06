async function fetchWeatherData() {
    const apiKey = '7098d82d960697ea4654e8027c192b7c';
    const citiesList = ['Lahore', 'Karachi', 'Islamabad'];

    const cityListContainer = document.getElementById('cityList')
    cityListContainer.innerHTML = '';

    try {
        for (const city of citiesList) {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},PK&APPID=${apiKey}`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data)
            displayCityWeather(data);
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
        cityListContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
}

fetchWeatherData();

function displayCityWeather(data) {
    const cityListContainer = document.getElementById('cityList');

    const weatherInfo = `
            <div class="city-item">
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            </div>
        `;

    cityListContainer.innerHTML += weatherInfo;
}

