import React, { useState } from "react";
import './WeatherApp.css';
import Search from "../Assets/search.png";
import clear_day from "../Assets/clear-day.svg";
import cloudy from "../Assets/cloudy.svg";
import fog from "../Assets/fog.svg";
import hail from "../Assets/hail.svg";
import haze from "../Assets/haze.svg";
import humidity from "../Assets/humidity.svg";
import hurricane from "../Assets/hurricane.svg";
import mist from "../Assets/mist.svg";
import partly_cloudy_day_rain from "../Assets/partly-cloudy-day-rain.svg";
import partly_cloudy_day from "../Assets/partly-cloudy-day.svg";
import rain from "../Assets/rain.svg";
import smoke from "../Assets/smoke.svg";
import snow from "../Assets/snow.svg";
import thunderstorm from "../Assets/thunderstorms.svg";
import tornado from "../Assets/tornado.svg";
import wind from "../Assets/wind.svg";

const WeatherApp = () => {

    const api_key = "ce62697e6065c5b1cbb836f42fbd7edf";

    const [wicon, setwicon] = useState(clear_day);

    const search = async () => {

        const element = document.getElementsByClassName('cityInput');

        if(element[0].value === "") {
           return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data =  await response.json();

        const Humidity = document.getElementsByClassName('humidity');
        const Wind = document.getElementsByClassName('wind');
        const temperature = document.getElementsByClassName('weather-temp');
        const City = document.getElementsByClassName('weather-location');

        Humidity[0].innerHTML = data.main.humidity + "%";
        Wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp) + "℃";
        City[0].innerHTML = data.name;

        if(data.weather[0].main=== "clear sky") {
            setwicon(clear_day);
        }else if (data.weather[0].main=== "Clouds") {
            setwicon(cloudy);
        } else if (data.weather[0].main=== "Rain") {
            setwicon(rain);
        }else if (data.weather[0].main=== "Snow") {
            setwicon(snow);
        }else if (data.weather[0].main=== "Mist") {
            setwicon(mist);
        }else if (data.weather[0].main=== "Thunderstorm") {
            setwicon(thunderstorm);
        }else if (data.weather[0].main=== "Haze") {
            setwicon(haze);
        }else if (data.weather[0].main=== "Fog") {
            setwicon(fog);
        }else if (data.weather[0].main=== "Hail") {
            setwicon(hail);
        }else if (data.weather[0].main=== "Smoke") {
            setwicon(smoke);
        }else if (data.weather[0].main=== "Tornado") {
            setwicon(tornado);
        }else if (data.weather[0].main=== "Hurricane") {
            setwicon(hurricane);
        }else if (data.weather[0].description=== "few clouds") {
            setwicon(partly_cloudy_day);
        }else if (data.weather[0].description=== "shower rain") {
            setwicon(partly_cloudy_day_rain);
        }
    }

    return (
        <div className="main">
        <div className="container">
            <div className="top-bar">
        <input type="" className="cityInput" placeholder="Search"/>
        <div className="search-icon">
            <img src={Search} alt="search icon" onClick={()=>{search()}} />
        </div>
            </div>
            <div className="weather-icon">
            <img src={wicon} alt="weatherImage" />
            </div>
            <div className="weather-temp">24℃</div>
            <div className="weather-location">Rohtak</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity} alt="HumidityIcon"  className="icon"/>
                    <div className="data">
                        <div className="humidity">50%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind} alt="WindImage" className="icon" />
                    <div className="data">
                        <div className="wind">23 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default WeatherApp;