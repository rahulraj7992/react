// src/components/Weather.js
import React, { useState } from "react";
import "../styles.css";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const API_KEY = "1f06eeb24c8961219483b87e19489c4f"; //  API key
    const API_URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;

    const fetchWeather = async () => {
        if (!city) {
            setError("Please enter a city name");
            return;
        }

        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            if (data.error) {
                setError("City not found! Please try again.");
                setWeather(null);
            } else {
                setWeather(data);
                setError("");
            }
        } catch (error) {
            setError("Error fetching data. Please try again.");
            setWeather(null);
        }
    };

    // Fetch data when "Enter" key is pressed
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            fetchWeather();
        }
    };

    return (
        <div className="weather-container">
            <input
                type="text"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={fetchWeather}>Get Weather</button>

            {error && <p className="error">{error}</p>}

            {weather && (
                <div className="weather-info">
                    <h2>{weather.location.name}, {weather.location.country}</h2>
                    <h3>{weather.current.temperature}°C</h3>
                    <p>{weather.current.weather_descriptions[0]}</p>
                    <img src={weather.current.weather_icons[0]} alt="Weather Icon" />
                </div>
            )}
        </div>
    );
};

export default Weather;
