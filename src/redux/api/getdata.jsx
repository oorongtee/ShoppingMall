import axios from "axios";

export const getTapData = () => {
  return axios.get('https://data.moa.gov.tw/Service/OpenData/FromM/TAPData.aspx');
};

export const TeaData = () => {
  return axios.get('./productTea.json');
};

export const FruitData = () => {
    return axios.get('./productFruit.json');
  };