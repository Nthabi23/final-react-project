import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            lat: response.data.coordinates.latitude,
            lon: response.data.coordinates.longitude,
            date: new Date(response.data.time * 1000),
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            description: response.data.city,
            icon: response.data.condition.icon_url,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function search() {
        const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }


    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return(
            <div className="container">
                <div className="my-5" id="weather-box">
                    <form className="pt-3" id="search-form" onSubmit={handleSubmit}>
                        <input type="search" placeholder="Enter a city.." className="enterCity" id="search-input" onChange={handleCityChange} />
                        <input type="submit" value="Search" id="city-input" onChange={search} />
                    </form>
                    <WeatherInfo data={weatherData} />
                    <WeatherForecastDay lat={weatherData.lat} lon={weatherData.lon} />
                </div>
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}