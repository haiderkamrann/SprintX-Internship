document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', searchData);
});

async function searchData() {
    const apiKey = "7098d82d960697ea4654e8027c192b7c";
    const cityName = document.getElementById('searchQuery').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Error fetching data... Please Try Again!');
        }

        const data = await response.json();
        results(data);
    } catch (error) {
        console.log('error: ', error.message);
        document.getElementById('results').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function results(data) {
    const res = document.getElementById('results');
    res.innerHTML = '';

    const weatherInfo = `
        <div class="result-item">
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        </div>
    `;

    res.innerHTML = weatherInfo;
}

module.exports = searchData;
