import React from "react";
import { useState, useEffect } from "react";
import { fetchAPI } from "./../api/index";
import Cards from "./Cards";
import District from "./District";
import Table from "./Table";


function State() {
  const [states, setStates] = useState([]);
  const [statePicker, setstatePicker] = useState("Total");
  const [stateData, setStateData] = useState({});
  

  const loadData = () => {
    fetchAPI().then(({ statewise }) => {
      statewise.map((state) => {
        return setStates((prevValue) => {
          return [...prevValue, state.state];
        });
      });
      if (statePicker === "Total") {
        setStateData(statewise[0]);
      }
    });
  };

  const handleChange = (e) => {
    const stateFetching = e.target.value;

    fetchAPI().then(({ statewise }) => {
      statewise.map((state) => {
        if (stateFetching === state.state) {
          setstatePicker(stateFetching);
          setStateData(state);
        }
      });
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const State = () => {
    return (
      <div>
        <form>
          <select
            value={statePicker}
            className="dropdown"
            onChange={handleChange}
          >
            {states.map((state, i) => {
              return (
                <option key={i} value={state}>
                  {state}
                </option>
              );
            })}
          </select>
        </form>

        <div className="row">
          <Cards
            title="Total Active cases"
            info={stateData.active}
            className="card orange"
          />
          <Cards
            title="Total Confirmed cases"
            info={stateData.confirmed}
            className="card blue"
          />
          <Cards
            title="Total Recovered cases"
            info={stateData.recovered}
            className="card green"
          />
          <Cards
            title="Total Deceased cases"
            info={stateData.deaths}
            className="card red"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="row">
      <div className="col ">
        <h3 className="text-white">Cases In India</h3>
        {State()}
      </div>
      {statePicker !== "Total" && (
        <div className="col">
          <District state={statePicker} />
        </div>
      )}
      <div className="col">
          <h3 className="text-white">Cases All Over The World</h3>
          <Table/>
        </div>
    </div>
  );
}

export default State;
