import axios from "axios";

const options = {
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "a28b535516msh34e2954fdb9e66ep117b32jsndeec51709033",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

export const getCryptoNews = async (newsCategory, count) => {
  try {
    let results = await axios.get(
      `${baseUrl}/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
      options
    );
    return results.data;
  } catch (err) {
    console.log(err);
  }
};
