import React, { useState, useEffect } from "react";
import axios from "axios";

const Results = ({ filterQuery }) => {
  const [countries, setCountries] = useState([]);

  const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(filterQuery.toLowerCase());
  });

  const results =
    filteredCountries.length > 10 ? (
      <p>Too many matches; be more specific</p>
    ) : (
      <ul>
        {filteredCountries.map((country) => {
          console.log(country.alpha3Code);
          return <li key={country.alpha3Code}>{country.name}</li>;
        })}
      </ul>
    );

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <ul>{results}</ul>
    </div>
  );
};

export default Results;
