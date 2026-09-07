# Weather Forecast App

A clean, responsive web application that displays real-time weather information for any city using the OpenWeatherMap API.

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
