
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import IngredientParts from './IngredientParts.jsx'



const Ingredient = (props) => {
  const [ingredient, setIngredient] = useState({
    "strIngredient1": '',
    "strIngredient2": '',
    "strIngredient3": '',
    "strIngredient4": '',
    "strIngredient5": '',
    "strIngredient6": '',
    "strIngredient7": '',
    "strIngredient8": '',
  })
  const handleChange = (e) => {
    var value = e.target.value
    setIngredient({...ingredient, "strIngredient1": value});
    console.log('hello',e.target.value)
  };


  return (
  <AllIngredients>
    <IngrName>Ingredients:</IngrName>
    <IngredientContainer>
      <SingleIngredient>
        <label>
          <IngrInput
            value={ingredient[`strIngredient1`]}
            onChange={(e) => setIngredient({...ingredient, "strIngredient1": e.target.value})}
          />
        </label>
        <IngredientParts/>
      </SingleIngredient>
      <SingleIngredient>
        <label>
          <IngrInput
            value={ingredient[`strIngredient2`]}
            onChange={(e) => setIngredient({...ingredient, "strIngredient2": e.target.value})}
          />
        </label>
          <IngredientParts/>
        </SingleIngredient>
        <SingleIngredient>
                <label>
                  <IngrInput
                    value={ingredient[`strIngredient3`]}
                    onChange={(e) => setIngredient({...ingredient, "strIngredient3": e.target.value})}
                  />
                </label>
          <IngredientParts/>
        </SingleIngredient>
                </IngredientContainer>
                <IngredientContainer>
                <SingleIngredient>
                <label>
                  <IngrInput
                    value={ingredient[`strIngredient4`]}
                    onChange={(e) => setIngredient({...ingredient, "strIngredient4": e.target.value})}
                  />
                </label>
                <IngredientParts/>
        </SingleIngredient>
        <SingleIngredient>
                <label>
                  <IngrInput
                    value={ingredient[`strIngredient5`]}
                    onChange={(e) => setIngredient({...ingredient, "strIngredient5": e.target.value})}
                  />
                </label>
                <IngredientParts/>
        </SingleIngredient>
        <SingleIngredient>
                <label>
                  <IngrInput
                    value={ingredient[`strIngredient6`]}
                    onChange={(e) => setIngredient({...ingredient, "strIngredient6": e.target.value})}
                  />
                </label>
                <IngredientParts/>
                </SingleIngredient>

    </IngredientContainer>
    </AllIngredients>
  )
}

export default Ingredient

var IngredientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

`;
var AllIngredients = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;

var IngrInput = styled.input`
  margin: 5px;
`;

var IngrName = styled.div`
  float: right;
  position: relative;
  bottom:40px;
  padding-left:20px
`;

var SingleIngredient = styled.div`
display: flex;
flex-direction: row;
margin: 5px;
`;

// return (

//   <IngredientContainer>
//           <div>
//             {[...Array(10).keys()].map((index) => {
//                 return (
//                   <div  key={index +1}>
//               <label>
//                 <input
//                   value={ingredient[`strIngredient${index}`]}
//                   onChange={(e) => handleChange(e, index)}
//                 />
//               </label>
//                   </div>
//                 );
//             })}
//           </div>
//   </IngredientContainer>
// )
