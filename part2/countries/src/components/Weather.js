import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ city }) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [weather, setWeather] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
        setReady(true);
      });
  }, [city, apiKey]);

  return (
    <div>
      <h2>Weather in {city}</h2>
      {ready ? (
        <div>
          <p>Temperature: {weather.main.temp}</p>
          <p>
            <strong>{weather.weather[0].description}</strong>
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>
            Wind: {weather.wind.speed} MPH at {weather.wind.deg} degrees
          </p>
        </div>
      ) : (
        <p>Unavailable</p>
      )}
    </div>
  );
};

export default Weather;
