import axios from "axios";

export const GetTapData = () => {
  return axios.get('https://data.moa.gov.tw/Service/OpenData/FromM/TAPData.aspx');
};

export const TeaData = () => {
  return axios.get('./productTea.JSON');
};

export const FruitData = () => {
    return axios.get('./productFruit.JSON');
  };

export const PersonalProfileData = () => {
    return axios.get('./personalProfile.JSON');
  };  