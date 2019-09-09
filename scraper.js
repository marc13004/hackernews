const program = require('commander');
program.version('0.0.1');

const fs = require('fs');
const siteUrl = "https://news.ycombinator.com/";

//Tool for scraping webpage
const cheerio = require("cheerio");
const axios = require("axios");

// Json Object Creation
var news = { hackernews: [] };
var chain = { chain: [] };


//Scraping Html Element under the class .athing, it has the structure path to find others elements easily
const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

//Adding .athing Elements within a Json Object
const getResults = async () => {
  const $ = await fetchData();

  $(".athing").each((index, element) => {
    chain.chain.push({
        "obj" : $(element),
    });
  });

return chain;
};

module.exports = getResults;
