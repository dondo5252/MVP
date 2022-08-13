require('dotenv').config();
var router = require('express').Router()
var API = require('./HR_API.jsx');

router.get('/filter.php', (request, response) => {
    API.getDrinksbyCategory(request.query.c)
      .then((results) => {
        response.status(200).send(results.data);
      })
      .catch((error) => {
        console.log('Error in getting all the drinks by ingredient', error);
        response.sendStatus(500);
      });
});

router.get('/search.php', (request, response) => {
    API.searchDrinks(request.query.s)
      .then((results) => {
        response.status(200).send(results.data);
      })
      .catch((error) => {
        console.log('Error in getting all the drinks by search', error);
        response.sendStatus(500);
      });
});

router.get('/lookup.php', (request, response) => {
    API.getDrinkbyID(request.query.i)
      .then((results) => {
        response.status(200).send(results.data);
      })
      .catch((error) => {
        console.log('Error in getting all the drinks by id', error);
        response.sendStatus(500);
      });
});

router.get('/alc', (request, response) => {
    API.getDrinkbyAlc(request.query.i)
      .then((results) => {
        response.status(200).send(results.data);
      })
      .catch((error) => {
        console.log('Error in getting all the drinks by id', error);
        response.sendStatus(500);
      });
});

module.exports = router
