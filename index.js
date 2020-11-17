const fetchNews = require('./src/fetchNews');

async function main() {

  const news = await fetchNews({});

}

main();
