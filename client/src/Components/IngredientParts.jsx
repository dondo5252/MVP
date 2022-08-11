import styled from 'styled-components';
import React, { useState, useEffect } from 'react';


const IngredientParts = (props) => {



const onPartsChange = (e) => {
  props.partsChange(props.strNum, e.target.value)
}

  return (
    <IngrParts>
    <select name="parts" id="parts" onChange={onPartsChange}>
    <option value="">0</option>
    <option value="1 oz">1</option>
    <option value="2 oz">2</option>
    <option value="3 oz">3</option>
    <option value="4 oz">4</option>
    <option value="5 oz">5</option>

   </select>
   <select name="desc" id="desc">
    <option value="oz">oz</option>
    <option value="parts">parts</option>
    <option value="tsp">tsp</option>
    <option value="A splash">splash</option>
    <option value="A slice">slice</option>
    <option value="Garnish with">garnish</option>

   </select>
   </IngrParts>
  )
}

export default IngredientParts

const IngrParts = styled.div`
margin-top: 6px
`;
