import React from "react";
import Weather from "../components/Weather";

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages.map((language) => {
          return <li key={language["iso639_2"]}>{language.name}</li>;
        })}
      </ul>
      <img src={country.flag} alt={`Flag of ${country.name}`} height="200px" />
      <Weather city={country.capital} />
    </div>
  );
};

export default Country;
