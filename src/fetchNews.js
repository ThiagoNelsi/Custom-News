const axios = require('axios');
const { exit } = require('process');

const { API_KEY } = require('../credentials/news_api.json');

const newsApi = axios.create({
  headers: {
    'X-API-KEY': API_KEY,
  },
});

async function fetchNews(options) {

  const countries = ['br', 'us', 'ca'];

  const news = [];

  try {

    await Promise.all(countries.map(async country => {
      const { data } = await newsApi.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=technology`);
      news.push(...data.articles);
    }));

    return news;

  } catch (err) {

    console.log('Error fetching news: ' + err);
    exit();

  }

}

module.exports = fetchNews;
