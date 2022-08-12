import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {firestore } from '../firebase.js'
import { collection, query, where, getDocs, deleteDoc, onSnapshot, addDoc } from "firebase/firestore";


var DrinkModal = (props) => {
  const [drinkInfo, setDrinkInfo] = useState({});
  const [deleteDrink, setDeleteDrink] = useState(false)


  const getDrinkInfo = (id) => {
    console.log("searched word", id)
    return axios.get('/MVP/lookup.php', {params: {i: id}})
    .then((response) => {
      console.log(response.data.drinks[0], 'ddddddddddd')
      return response.data.drinks[0]
    })
    .then((response) => {
      console.log('these are your results search front end ,', response)
      setDrinkInfo(response)
    })
    .catch((error) => {
      console.log('Error in front end search drinks', error);
    })
  }

  var getCreatedDrinks = async () => {
    const q = query(collection(firestore, "Recipes"), where("idDrink", "==", props.drinkId));

    const querySnapshot =  await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setDrinkInfo(doc.data())
      console.log(doc.id, " => ", doc.data());
    });


    // const q = query(collection(firestore, "Recipes"), where("idDrink", "==", props.drinkId));

    // const unsub = onSnapshot(q, (querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   setDrinkInfo(doc.data())
    //   console.log(doc.id, " => ", doc.data());
    // });
    //   // console.log("Data", querySnapshot.docs.map(doc => doc.data()));
    //   // setDrinkInfo(doc.data())
    // });
  }

  var getFavoriteDrinks = async () => {
    const q = query(collection(firestore, "Favorites"), where("idDrink", "==", props.drinkId));
    const querySnapshot =  await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setDrinkInfo(doc.data())
      console.log(doc.id, " => ", doc.data());
    });
  }

  var promiseExecution = async () => {
    let promise = await Promise.all([
      DeleteonClick(),
      setDeleteDrink(),
      getCreatedDrinks()
    ]);
  };

  var setDelete = () => {
    setDeleted(true)
  };

  var DeleteonClick = async (e) => {
    console.log('hello')
    const collectionRef = collection(firestore, "Recipes")
    const q =  query(collectionRef, where ("idDrink", "==", props.drinkId));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref)
      console.log(drinkInfo)
    });
      props.getCreated()
      console.log('hello')
  }

  var DeleteFavonClick = async (e) => {
    console.log('hello')
    const collectionRef = collection(firestore, "Favorites")
    const q =  query(collectionRef, where ("idDrink", "==", props.drinkId));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref)
      console.log(drinkInfo)
    });
      props.getFavorites()
      console.log('hello')
  }

  var addFav = async () => {
      const id = Math.floor(Math.random() * 5000)
      const docRef =  await addDoc(collection(firestore, "Favorites"), {
        idDrink: id,
        strDrink: drinkInfo.strDrink,
        strDrinkThumb: drinkInfo.strDrinkThumb,
        strInstructions: drinkInfo.strInstructions,
        strIngredient1: drinkInfo.strIngredient1,
        strIngredient2: drinkInfo.strIngredient2,
        strIngredient3: drinkInfo.strIngredient3,
        strIngredient4: drinkInfo.strIngredient4,
        strIngredient5: drinkInfo.strIngredient5,
        strIngredient6: drinkInfo.strIngredient6,
        strMeasure1: drinkInfo.strMeasure1,
        strMeasure2: drinkInfo.strMeasure2,
        strMeasure3: drinkInfo.strMeasure3,
        strMeasure4: drinkInfo.strMeasure4,
        strMeasure5: drinkInfo.strMeasure5,
        strMeasure6: drinkInfo.strMeasure6,
    });
    console.log("Document written with ID: ", docRef.id);
  }

  useEffect (() => {
    if(props.dataSwitch ===  'original') {
    getDrinkInfo(props.drinkId)
    } else if(props.dataSwitch ===  'created') {
      // const recipeRef = collection(firestore, "Recipes");
      // const q = query(recipeRef, where("idDrink", "==", props.drinkId));
      // console.log(q)
      getCreatedDrinks()
    } else if(props.dataSwitch ===  'Favorites' ) {
      getFavoriteDrinks()
    }
    if(deleteDrink) {
      getCreatedDrinks()
    }
   }, [props.drinkId, props.dataSwitch,deleteDrink ])

  return (
    <StyleBackground>
      <ModalContainer>
        <TopContainer>
          <DrinkImg src={drinkInfo.strDrinkThumb}  />
          <DName>{drinkInfo.strDrink}</DName>

            <Ingredients>
            <InstructionsName>Ingredients</InstructionsName>
            <ul>
              {[...Array(10).keys()].map((index) => {
                if (drinkInfo[`strIngredient${index}`]) {
                  return (
                    <IngList key={drinkInfo[`strIngredient${index}`]}>
                      <IngrName>{drinkInfo[`strIngredient${index}`]}</IngrName>
                      {drinkInfo[`strMeasure${index}`] && (
                        <IngrAmount>{drinkInfo[`strMeasure${index}`]}</IngrAmount>
                      )}
                    </IngList>
                  );
                }
                return null;
              })}
            </ul>
            </Ingredients>
            </TopContainer>
            {drinkInfo.strInstructions && <Instructions>
              <InstructionsName>Instructions:</InstructionsName>
              <div>{drinkInfo.strInstructions}</div>
            </Instructions>}
            { props.dataSwitch === "created" && <Trash className='fa fa-trash' onClick={promiseExecution}></Trash>}
            { props.dataSwitch === "Favorites" && <Trash className='fa fa-trash' onClick={DeleteFavonClick}></Trash>}
            { props.dataSwitch === "created" && <Heart className="fa-solid fa-heart" onClick={addFav}></Heart>}
            { props.dataSwitch === "original" && <HeartO className="fa-solid fa-heart" onClick={addFav}></HeartO>}

      </ModalContainer>
    </StyleBackground>
  )
}
export default DrinkModal

  const Trash = styled.i`
    font-size: 16px;
    margin-top: 20px;
    z-index: 5;
    font-size: 20px;
    :hover {
      text-decoration: none;
      cursor: pointer;
    };
    height: 20px;
    right: 200px;

  `;

  const HeartO = styled.i`
    font-size: 16px;
    margin-top: 20px;
    z-index: 55;
    font-size: 20px;
    :hover {
      color: red;
      cursor: pointer;
    };
    height: 20px;
    right: 200px;
  `;

  const Heart = styled.i`
    padding-left: 10px;
    font-size: 16px;
    margin-top: 20px;
    z-index: 55;
    font-size: 20px;
    :hover {
      text-decoration: none;
      cursor: pointer;
    };
    height: 20px;
    right: 200px;

  `;

  const StyleBackground =styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    z-index: 44;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    backdrop-filter: blur(5px);
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
  `;

  const ModalContainer = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    border-radius: 6px;
  `;

  const DrinkImg = styled.img`
    display: flex;
    align-items: center;
    width: 500px;
    height: 500px;
    justify-content: center;
    border-radius: 10%;
  `;

  const DName = styled.h2`
    position: absolute;
    color: white;
    text-align: center;
    font-size: 25px;
    margin-top: 10px;
    padding-left:15px;
  `;

  const DrinkContainer = styled.div`
    margin: 15px -15px 0 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding-right: 15px;
  `;

  const Ingredients = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 20px;
  `;

  const IngrName = styled.span`
    align-items: center;
    justify-content: stretch;
    position: relative;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-family: 'Roboto';
  `;

  const IngrAmount = styled.span`
    margin: 5px 0 0 10px;
    font-size: 12px;
    font-weight: bold;
  `;

  const IngList = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
  `;

  const IngrTitle = styled.span`
    flex-direction: row;
    align-items: center;
    position: relative;
    display: flex;
    justify-content: stretch;
    font-size: 18px;
    font-weight: 100;
  `;

  const Instructions = styled.div`
    padding-top: 15px;
    margin-top: 15px;
    display: flex;
  `;

  const InstructionsName = styled.span`
  font-size: 16px;
  font-weight: bold;
  `;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `;