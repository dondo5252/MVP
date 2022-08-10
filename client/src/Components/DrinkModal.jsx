import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


var DrinkModal = (props) => {
  const [drinkInfo, setDrinkInfo] = useState({});

  const getDrinkInfo = (id) => {
    console.log("searched word", id)
    return axios.get('/MVP/lookup.php', {params: {i: id}})
    .then((response) => {
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

  useEffect (() => {
    getDrinkInfo(props.drinkId)
   }, [props.drinkId ])

  return (
    <StyleBackground>
      <ModalContainer>
          <DrinkImg src={drinkInfo.strDrinkThumb}  />
          <DName>{drinkInfo.strDrink}</DName>
          <DrinkContainer>
            <Ingredients>
            <span>Ingredients</span>
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
            {drinkInfo.strInstructions && <Instructions>
              <InstructionsName>Instructions:</InstructionsName>
              <div>{drinkInfo.strInstructions}</div>
            </Instructions>}
          </DrinkContainer>
      </ModalContainer>
    </StyleBackground>
  )
}
export default DrinkModal


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
  position: absolute;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  `;

  const DName = styled.h2`
  position: absolute;
  color: white;
  font-size: 25px;
  margin-top: 30px;
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
  padding-left: 400px;
  `;
  const IngrName = styled.span`
  align-items: center;
  justify-content: stretch;
  position: relative;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  `;

  const IngrAmount = styled.span`
    font-size: 12px;
    font-weight: bold;
    margin: 5px 0 0 10px;
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