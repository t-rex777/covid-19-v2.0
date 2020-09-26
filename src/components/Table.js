import React from "react";
import { fetchCountryAPI, fetchAllAPI } from "./../api/index";
import { useState } from "react";
import "./table.css";
import { useEffect } from "react";
import { sortData } from './utility';

function Table() {
  const [tableData, setTableData] = useState([]);
  const [global, setGlobal] = useState("");


  const fetchAllData = () => {
    fetchAllAPI().then((data) => {
      setGlobal(data.cases);
    });
  };
  const fetchCountryData = () => {
    fetchCountryAPI().then((data) => {
      const sortedData = sortData(data)
      setTableData(sortedData);
    });
  };

  useEffect(() => {
    fetchCountryData();
    fetchAllData();
  }, []);

  return (
    <div className="table">
      <tr>
        <td>Global</td>
        <td>{global}</td>
      </tr>
      {tableData.map(({ country, cases }, index) => {
        return (
          <tr key={index}>
            <td>{country}</td>
            <td>
              <strong>{cases}</strong>
            </td>
          </tr>
        );
      })}
    </div>
  );
}

export default Table;
