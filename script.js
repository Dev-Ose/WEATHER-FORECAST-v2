const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherDisplay = document.getElementById('weather-display');

const apikey = 'c2d2fd39933a2549ac002e3e6febcf1a';

searchBtn.addEventListener('click', getWeather);

cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getWeather();
    }
});

function getWeather() {

    const city = cityInput.value.trim();

    if (!city) {
        weatherDisplay.innerHTML = `
            <div class="error-message">
                Please enter a city name.
            </div>
        `;
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apikey}&units=metric`;

    searchBtn.textContent = 'Loading...';
    searchBtn.disabled = true;

    fetch(url)
        .then(response => {

            if (!response.ok) {

                if (response.status === 404) {
                    throw new Error(
                        'City not found. Try searching for a city like "Lagos" or "Ikeja".'
                    );
                }

                if (response.status === 401) {
                    throw new Error(
                        'Invalid or inactive API key.'
                    );
                }

                throw new Error(
                    'Failed to fetch weather data.'
                );
            }

            return response.json();
        })

        .then(data => {

            const temperature = Math.round(data.main.temp);
            const condition = data.weather[0].description;

            /*
             * OpenWeatherMap icon
             */
            const iconCode = data.weather[0].icon;

            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            weatherDisplay.innerHTML = `

                <div class="weather-card">

                    <div class="location">

                        <div>
                            <h2>
                                ${data.name}, ${data.sys.country}
                            </h2>

                            <p>
                                Current weather conditions
                            </p>
                        </div>

                    </div>


                    <div class="temperature-section">

                        <div>
                            <span class="temperature">
                                ${temperature}°
                            </span>

                            <span class="temperature-unit">
                                C
                            </span>
                        </div>


                        <div class="condition">

                            <img 
                                class="weather-icon"
                                src="${iconUrl}"
                                alt="${condition}"
                            >

                            <p>
                                ${condition}
                            </p>

                        </div>

                    </div>


                    <div class="weather-details">

                        <div class="weather-detail">

                            <span class="detail-label">
                                HUMIDITY
                            </span>

                            <span class="detail-value">
                                ${data.main.humidity}%
                            </span>

                        </div>


                        <div class="weather-detail">

                            <span class="detail-label">
                                WIND
                            </span>

                            <span class="detail-value">
                                ${data.wind.speed} m/s
                            </span>

                        </div>


                        <div class="weather-detail">

                            <span class="detail-label">
                                FEELS LIKE
                            </span>

                            <span class="detail-value">
                                ${Math.round(data.main.feels_like)}°
                            </span>

                        </div>

                    </div>

                </div>
            `;
        })

        .catch(error => {

            console.error(
                'Error fetching weather results:',
                error
            );

            weatherDisplay.innerHTML = `
                <div class="error-message">
                    ${error.message}
                </div>
            `;
        })

        .finally(() => {

            searchBtn.textContent = 'Search';
            searchBtn.disabled = false;

        });
}