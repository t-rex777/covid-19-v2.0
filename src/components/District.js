import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchDistrictAPI } from "../api";
import Cards from "./Cards";

function District({ state }) {
  const [districts, setDistricts] = useState([]);
  const [districtPicker, setDistrictPicker] = useState("");
  const [districtData, setDistrictData] = useState({});

  const loadData = () => {
    console.log(state);

    fetchDistrictAPI().then((data) => {
      for (const item in data) {
        if (item === state) {
          const element = data[item];
          const firstDistrictData = Object.entries(element.districtData);
          const districtArray = Object.keys(element.districtData)
        setDistrictData(firstDistrictData[0][1])
          setDistricts(districtArray);
        }
      }
    });
  };

  const handleChange = (e) => {
    const districtFetching = e.target.value;
    // console.log(districtFetching);
    fetchDistrictAPI().then((data) => {
      for (const item in data) {
        const element = data[item];
        const districtValues = Object.entries(element.districtData);

        districtValues.map((district) => {
          if (districtFetching === district[0]) {
            setDistrictPicker(districtFetching);
            setDistrictData(district[1]);
          }
        });
      }
    });
  };

  useEffect(() => {
    loadData();
  }, [state]);

  return (
    <div>
      {state !== "Total" && (
        <div>
          <form>
            <h3 className="text-white">Select District</h3>
            <select className="dropdown" onChange={handleChange}>
              {districts.map((district, i) => {
                return (
                  <option key={i} value={district}>
                    {district}
                  </option>
                );
              })}
            </select>
          </form>

          <div className="row ">
            <Cards
              title="Total Active cases"
              info={districtData.active}
              className="card orange"
            />
            <Cards
              title="Total Confirmed cases"
              info={districtData.confirmed}
              className="card blue"
            />
            <Cards
              title="Total Recovered cases"
              info={districtData.recovered}
              className="card green"
            />
            <Cards
              title="Total Deceased cases"
              info={districtData.deceased}
              className="card red"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default District;
