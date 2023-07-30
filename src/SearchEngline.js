import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [description, setDescription] = useState(null);
  let [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiKey = "c5f0e59acac64258bb92ed027d20c68f";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(showWeather);
    }
  }
  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (temperature) {
    return (
      <div>
        <form onSubmit={handleSubmit} className="App">
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input type="submit" value="search" />
        </form>

        <ul>
          <li>Temperature: {Math.round(temperature)}°F</li>
          <li>Humidity: {Math.round(humidity)}%</li>
          <li>Wind: {Math.round(wind)} MPH</li>
          <li>Description: {description}</li>
          <li>
            {" "}
            <img src={icon} alt={description} />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit} className="App">
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
    );
  }
}
