import React, { useState, useEffect } from 'react';
import DrinkEntry from './DrinkEntry.jsx'
import styled from 'styled-components';


const DrinkList = (props) => {
  return (
    <div>
              <Drinks>
                <DrinksUL>
                {props.filteredDrinks.map((drink, index) => (
                  <DrinkEntry
                    key={index}
                    drink={drink}
                    dataSwitch={props.dataSwitch}
                    getCreated={props.getCreated}
                  />
                ))}
                </DrinksUL>
              </Drinks>
    </div>
  )
}
export default DrinkList

  const Drinks = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  `;

  const DrinksUL = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 -15px;
  `;