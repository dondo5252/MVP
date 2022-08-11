import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DrinkList from './DrinkList.jsx'
import Search from './Search.jsx'



var DrinkIndex = () => {
  const [filteredDrinks, setFilteredDrinks] = useState([]);

  const getDrinks = (ingredient) => {
    return axios.get('/MVP/filter.php', {params: {c: 'Tequila'}})
    .then((response) => {
      console.log('these are your results front end ,', response.data.drinks)
      return response.data.drinks
    })
    .then((response) => {
      setFilteredDrinks(response)
    })
    .catch((error) => {
      console.log('Error in front end get drinks', error);
    })
  }

  const SearchDrinks = (word) => {
    console.log("searched word", word)
    return axios.get('/MVP/search.php', {params: {s: word}})
    .then((response) => {
      console.log('these are your results search front end ,', response.data.drinks)
      return response.data.drinks
    })
    .then((response) => {
      setFilteredDrinks(response)
    })
    .catch((error) => {
      console.log('Error in front end search drinks', error);
    })
  }




 useEffect (() => {
  getDrinks()
 }, [])

  return(
    <div>
      <Search search={SearchDrinks}/>
      <DrinkList filteredDrinks={filteredDrinks}/>
    </div>
  )
}

export default DrinkIndex;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import DrinkList from './DrinkList.jsx'
// import Search from './Search.jsx'



// var DrinkIndex = () => {
//   const [filteredDrinks, setFilteredDrinks] = useState([]);
//   const [drinkInfo, setDrinkInfo] = useState(null);




//   const getDrinks = (ingredient) => {
//     return axios.get('/MVP/filter.php', {params: {c: 'Tequila'}})
//     .then((response) => {
//       console.log('these are your results front end ,', response.data.drinks)
//       return response.data.drinks
//     })
//     .then((response) => {
//       setFilteredDrinks(response)
//     })
//     .catch((error) => {
//       console.log('Error in front end get drinks', error);
//     })
//   }

//   const SearchDrinks = (word) => {
//     console.log("searched word", word)
//     return axios.get('/MVP/search.php', {params: {s: word}})
//     .then((response) => {
//       console.log('these are your results search front end ,', response.data.drinks)
//       return response.data.drinks
//     })
//     .then((response) => {
//       setFilteredDrinks(response)
//     })
//     .catch((error) => {
//       console.log('Error in front end search drinks', error);
//     })
//   }

//   const getDrinkInfo = (id) => {
//     console.log("searched word", id)
//     return axios.get('/MVP/lookup.php', {params: {i: id}})
//     .then((response) => {
//       return response.data.drinks
//     })
//     .then((response) => {
//       console.log('these are your results search front end ,', response)
//       setDrinkInfo(response)
//     })
//     .catch((error) => {
//       console.log('Error in front end search drinks', error);
//     })
//   }



//  useEffect (() => {
//   getDrinks()
//  }, [drinkInfo])

//   return(
//     <div>
//       <Search search={SearchDrinks}/>
//       <DrinkList filteredDrinks={filteredDrinks} getDrinkInfo={getDrinkInfo} drinkInfo={drinkInfo}/>
//     </div>
//   )
// }

// export default DrinkIndex;