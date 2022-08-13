
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import DrinkModal from './DrinkModal.jsx'
import {firestore } from '../firebase.js'
import {collection, query, where, getDocs, deleteDoc} from "@firebase/firestore"

const DrinkEntry = (props) => {
  const [isOpen, setIsOpen] = useState(false);


  var toggleModal = (event) => {
    setIsOpen(!isOpen);
  };

  return (
    <EntryContainer onClick={toggleModal}>
      <DrinkPic src={props.drink.strDrinkThumb}/>
      <DrinkName>{props.drink.strDrink}</DrinkName>
      {isOpen && props.dataSwitch === "original" && <DrinkModal drinkId={props.drink.idDrink} dataSwitch={props.dataSwitch}/>}
      {isOpen && props.dataSwitch === "created" && <DrinkModal getCreated={props.getCreated} drinkId={props.drink.idDrink} dataSwitch={props.dataSwitch}/>}
      {isOpen && props.dataSwitch === "Favorites" && <DrinkModal getFavorites={props.getFavorites} drinkId={props.drink.idDrink} dataSwitch={props.dataSwitch}/>}
    </EntryContainer>
  )
}

export default DrinkEntry

  const EntryContainer = styled.div`
    margin: 15px 10px;
    box-shadow: 5px 7px 7px 0px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    width: 300px;
    height: 350px;
    display: flex;
    :hover {
      box-shadow: 8px 10px 10px 0px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      position: relative;
      top: -2px;
    }
  `;

  const DrinkName = styled.span`
    font-size: 16px;
    margin-top: 20px;
    text-align: center;
    font-family: 'Poppins';
  `;

  const DrinkPic = styled.img`
    align-items: center;
    justify-content: center;
    max-width:100%;
    max-height:100%;
    display: flex;
  `;



