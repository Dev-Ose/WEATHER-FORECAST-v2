# Weather Forecast App

A clean, responsive web application that displays real-time weather information for any city using the OpenWeatherMap API.

## Live Demo
🔗 [View Live Application](https://weather-forecast-v2-rho.vercel.app/)

## Features

* **Real-Time Data**: Fetches live temperature, weather conditions, humidity, wind speed, and "feels like" metrics.
* **Search Functionality**: Search by city name via button click or by pressing the `Enter` key.
* **Error Handling**: Graceful error UI feedback for empty input fields, non-existent cities (404), and API authorization issues (401).
* **Dynamic Loading UI**: Disables the search button and displays a loading state while fetching data to prevent duplicate API calls.
* **Clean & Modern UI**: Semantic HTML structure paired with dynamic CSS card renders.

## Tech Stack

* **HTML5**: Structured markup using semantic layout tags.
* **JavaScript (ES6+)**: Fetch API, DOM manipulation, async promise handling, and event listeners.
* **OpenWeatherMap API**: REST API used for retrieving metric weather metrics.

## File Structure

```text
├── index.html      # Structure and UI skeleton
├── styles.css      # Styling and layout rules
└── script.js       # App logic and API integration

Setup & Installation

Clone the repository:

Bash
git clone [https://github.com/Dev-Ose/WEATHER-FORECAST-v2.git](https://github.com/Dev-Ose/WEATHER-FORECAST-v2.git)
cd WEATHER-FORECAST-v2
Open the project:
Simply double-click index.html or use the Live Server extension in VS Code to launch the app in your browser.

API Key Setup
This application uses the OpenWeatherMap Current Weather Data API.

If you want to use your own API key:

Sign up at OpenWeatherMap.

Obtain an API key from your account dashboard.

Open script.js and replace the string in the apikey variable:

const apikey = 'YOUR_API_KEY_HERE';
