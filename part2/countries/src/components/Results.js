import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "../components/Country";

const Results = ({ filterQuery }) => {
  const [countries, setCountries] = useState([]);

  const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(filterQuery.toLowerCase());
  });

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  if (!filterQuery) {
    return null;
  } else if (filteredCountries.length === 0) {
    return <p>No countries found</p>;
  } else if (filteredCountries.length === 1) {
    return <Country country={filteredCountries[0]} />;
  } else if (filteredCountries.length > 10) {
    return <p>Too many matches; be more specific</p>;
  } else {
    return (
      <ul>
        {filteredCountries.map((country) => {
          return <li key={country.alpha3Code}>{country.name}</li>;
        })}
      </ul>
    );
  }
};

export default Results;
