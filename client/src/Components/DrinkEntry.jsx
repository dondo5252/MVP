
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import DrinkModal from './DrinkModal.jsx'

const DrinkEntry = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(props)


  var toggleModal = (event) => {

    setIsOpen(!isOpen);
  };

  return (
    <EntryContainer onClick={toggleModal}>
      <DrinkPic src={props.drink.strDrinkThumb}  />
      <DrinkName>{props.drink.strDrink}</DrinkName>
      {isOpen && <DrinkModal drinkId={props.drink.idDrink}/>}
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
    width: 250px;
    height: 300px;
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
  `;

  const DrinkPic = styled.img`
    align-items: center;
    justify-content: center;
    max-width:100%;
    max-height:100%;
    display: flex;
  `;

  const InfoBtn = styled.button`
  height: 44px;
  font-size: 16px;
  font-family: Arial;
  font-weight: 900;
  padding: 16px 32px;
  margin: 20px;
  border-radius:30px;
  background-color: #1C76E2;
  color: #ffffff;
  &hover {
    background-color: #15447D;
  }
`;