import { React, useEffect, useState } from "react";

export default function Header() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Kathmandu");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=02cd2cc9e69b251d74001e1b8033ad85`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(() => resJson);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="header">
        <h1 className="heading-title">Weather App</h1>
        <div className="search-bar">
          <input
            className="search-box"
            type="text"
            value={search}
            placeholder="Search here"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {/* <div>
          <button className="search-btn" onClick={handleClick}>
            Search
          </button>
        </div> */}
      </div>

      {!city ? (
        <p className="error-msg">No data found</p>
      ) : (
        <div className="info">
          <h1>{search}</h1>
          <h1> temp: {city?.main?.temp}&#176;C</h1>
          <h3>
            <p>Maximum Temperature: {city?.main?.temp_max}&#176;C</p>
            <p>Minimum Temperature: {city?.main?.temp_min}&#176;C</p>
            <p>Wind-Speed: {city?.wind?.speed}m/s</p>
          </h3>
        </div>
      )}
    </>
  );
}
