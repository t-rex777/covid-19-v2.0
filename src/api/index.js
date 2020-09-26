export const fetchAPI = () => {
  return  fetch("https://api.covid19india.org/data.json", { method: "GET" })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const fetchDistrictAPI = () => {
  return  fetch("https://api.covid19india.org/state_district_wise.json", {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const fetchCountryAPI = () => {
  return  fetch("https://disease.sh/v3/covid-19/countries", {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

export const fetchAllAPI = () => {
  return  fetch("https://disease.sh/v3/covid-19/all", {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}
 