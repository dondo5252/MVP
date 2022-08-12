import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DrinkList from './DrinkList.jsx'
import Search from './Search.jsx'
import {firestore } from '../firebase.js'
import {getDocs, collection} from "@firebase/firestore"



var DrinkIndex = () => {
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [createdData, setCreatedData] = useState([])
  const [favorites, setFavorites] = useState([])
  const [dataSwitch, setDataSwitch] = useState('original')

  const switchDataO = () => {
    setDataSwitch('original')
  }

  const switchDataF = () => {
    setDataSwitch('Favorites')
  }

  const getDrinks = (ingredient = 'Tequila') => {
    return axios.get('/MVP/filter.php', {params: {c: ingredient}})
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

  const getDrinksbyAlc = (liquor) => {
    console.log(liquor)
    return axios.get('/MVP/alc', {params: {i: liquor}})
    .then((response) => {
      console.log('these are your results front end ,', response.data.drinks)
      return response.data.drinks
    })
    .then((response) => {

      setFilteredDrinks(response)
    })
    .then((response) => {
      setDataSwitch('original')
    })
    .catch((error) => {
      console.log('Error in front end get drinks  by alc', error);
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

  var getCreated = async () => {
    var data = []
    const querySnapshot = await getDocs(collection(firestore, "Recipes"));
      querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
      data.push(doc.data())
      console.log(doc.id, " => ", doc.data());
    });
    setCreatedData(data)
    setDataSwitch('created')

  }


  var getFavorites = async () => {
    var data = []
    const querySnapshot = await getDocs(collection(firestore, "Favorites"));
      querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
      data.push(doc.data())
      console.log(doc.id, " => ", doc.data());
    });
    setFavorites(data)
    setDataSwitch('Favorites')

  }


 useEffect (() => {
  getDrinks()
  if(dataSwitch === 'orginal') {
    console.log(original)
  }

 }, [dataSwitch])

  return(
    <div>
      <Search fav={getFavorites}search={SearchDrinks} getCreated={getCreated} switchDataF={switchDataF} switchData={switchDataO} drinksbyAlc={getDrinksbyAlc}/>
      {dataSwitch === 'original' && <DrinkListCont><DrinkList filteredDrinks={filteredDrinks} dataSwitch={dataSwitch}/></DrinkListCont>}
      {dataSwitch === 'created' && <DrinkListCont><DrinkList getCreated={getCreated} filteredDrinks={createdData} dataSwitch={dataSwitch}/></DrinkListCont>}
      {dataSwitch === 'Favorites' && <DrinkListCont><DrinkList getFavorites={getFavorites} filteredDrinks={favorites} dataSwitch={dataSwitch}/></DrinkListCont>}
    </div>
  )
}

export default DrinkIndex;
const DrinkListCont = styled.div`
padding-top:60px;
min-height: 100vh;
background-color: #06273a;
`;

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