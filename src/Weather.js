import React, {useState} from "react";
import {FidgetSpinner} from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] =useState({ready: false});
    const [city, setCity] =useState(props.defaultCity);

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

    function search() {
        const apiKey="bd5b4461863eddaa6ced0a67989e0a";
        let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        function handleSubmit(event) {
            event.preventDefault();
            search();
        }

        function handleCityChange(event) {
            setCity(event.target.value);
        }

        if (weatherData.ready) {
            return(
                <div className="Weather">
                    <form onSubmit={handleSubmit}>
                        <div className="col-sm-8">
                            <input type="search" placeholder="Enter a city..."
                            className="for-control shadow" autoFocus="on" onChange={handleCityChange} />
                        </div>
                        <div className="col-sm-4">
                            <input type="submit" value="Search" className="btn btn-info-lg shadow" />
                        </div>
                    </form>
                    <div>
                       {" "}
                       <WeatherInfo dat={weatherData} /> 
                    </div>
                    <div className="row">
<div className="col">
    <WeatherForecastDay lat={weatherData.lat} lon={weatherData.lon} />
</div>
                    </div>
                </div>
            ); 
            }else {
                search();
                return(
                    <FidgetSpinner
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                ballColors="red"
                backgroundColor="white"
                />
                );
        }
    }
}