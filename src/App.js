import React, { useEffect, useState } from "react";
import "./App.css";
import State from "./components/State";
import Chart from "./components/Chart";
import Map from "./components/Map";
import "leaflet/dist/leaflet.css";
import { fetchCountryAPI } from "./api/index";

export default function App() {
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  const mapData = () => {
    fetchCountryAPI().then((data) => {
      setMapCountries(data);
    });
  };

  useEffect(() => {
    mapData();
  }, []);
  return (
    <div className="container-fluid text-center app ">
      <h1 className="text-warning text-center mb-5 mt-2">Live COVID-19 Data</h1>
      <div className="upper-container">
        <State />
      </div>

      <div className="row lower-container ">
        <div className="col m-3">
          
          <Map
            center={{ lat: 28.5934, lng: 77.2223 }}
            zoom={3}
            countries={mapCountries}
            casesType={casesType}
          />
          <button
            className="btn btn-info btn-lg m-3"
            onClick={() => {
              setCasesType("cases");
            }}
          >
            Total Cases
          </button>
          <button
            className="btn btn-success btn-lg m-3"
            onClick={() => {
              setCasesType("recovered");
            }}
          >
            Total Recovered
          </button>
          <button
            className="btn btn-danger btn-lg m-3"
            onClick={() => {
              setCasesType("deaths");
            }}
          >
            Total Deaths
          </button>
        </div>
        <div className="col">
          <h3 className="text-white mt-5">Last 30 days in India</h3>
          <Chart />
        </div>
      </div>
    </div>
  );
}
