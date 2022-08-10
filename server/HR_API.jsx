const axios = require('axios');

var headers = {
  'X-RapidAPI-Key': 'e6671d911bmsh0737dc01bfe900ep13632cjsn2e1f36657058',
  'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
}

var getDrinksbyCategory = (ingredient) => {
  return axios.get(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
}

var searchDrinks = (word) => {
  return axios.get(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${word}`);
}

var getDrinkbyID = (id) => {
  return axios.get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
}

module.exports.getDrinksbyCategory = getDrinksbyCategory;
module.exports.searchDrinks = searchDrinks;
module.exports.getDrinkbyID = getDrinkbyID;