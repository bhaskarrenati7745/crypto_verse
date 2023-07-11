import axios from "axios";

const options = {
  headers: {
    "X-RapidAPI-Key": "a28b535516msh34e2954fdb9e66ep117b32jsndeec51709033",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};
// baseUrl
const baseUrl = "https://coinranking1.p.rapidapi.com";

// coinranking api is used in this project

// we are going to make the api request here

export const getCryptoCoins = async () => {
  try {
    let results = await axios.get(`${baseUrl}/coins`, options);
    return results.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCryptoCoinsByCount = async (count) => {
  try {
    let results = await axios.get(`${baseUrl}/coins?limit=${count}`, options);
    return results.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCryptoDetails = async (coinId) => {
  try {
    let results = await axios.get(`${baseUrl}/coin/${coinId}`, options);
    // console.log(results);
    return results.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCryptoHistory = async ({ coinId, timePeriod }) => {
  try {
    let result = await axios.get(
      `${baseUrl}/coin/${coinId}/history?timePeriod=${timePeriod}`,
      options
    );
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

// export const getCryptoExchanges = async () => {
//   try {
//     let result = await axios.get(`${baseUrl}/exchanges`, options);
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };
