
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import IngredientParts from './IngredientParts.jsx'



const Ingredient = (props) => {
  // const [ingredient, setIngredient] = useState({
  //   "strIngredient1": '',
  //   "strIngredient2": '',
  //   "strIngredient3": '',
  //   "strIngredient4": '',
  //   "strIngredient5": '',
  //   "strIngredient6": ''
  // })
  // const [parts, setParts] = useState({
  //   "strMeasure1": "",
  //   "strMeasure2": "",
  //   "strMeasure3": "",
  //   "strMeasure4": "",
  //   "strMeasure5": "",
  //   "strMeasure6": ""
  // })


  // const handleChange = (e) => {
  //   var value = e.target.value
  //   setIngredient({...ingredient, "strIngredient1": value});
  //   console.log('hello',e.target.value)
  // };

  // const partsChange = (num, value) => {
  //   var name = `strMeasure${num}`
  //   setParts({...parts, [name]: value});
  //   console.log(parts, 'parrtststs')
  // }
//refactor to be mapped use keys as identifier
  return (
  <AllIngredients>
    <IngrName>Ingredients:</IngrName>
    <IngredientContainer>
      <SingleIngredient>
        <label>
          <IngrInput
            value={props.ingr[`strIngredient1`]}
            onChange={(e) => props.ingredientChange('1', e.target.value)}
          />
        </label>
        <IngredientParts strNum={'1'} partsChange={props.partsChange}/>
      </SingleIngredient>
      <SingleIngredient>
        <label>
          <IngrInput
            value={props.ingr[`strIngredient2`]}
            onChange={(e) => props.ingredientChange('2', e.target.value)}
          />
        </label>
          <IngredientParts strNum={'2'} partsChange={props.partsChange}/>
        </SingleIngredient>
        <SingleIngredient>
                <label>
                  <IngrInput
                    value={props.ingr[`strIngredient3`]}
                    onChange={(e) => props.ingredientChange('3', e.target.value)}
                  />
                </label>
          <IngredientParts strNum={'3'} partsChange={props.partsChange}/>
        </SingleIngredient>
                </IngredientContainer>
                <IngredientContainer>
                <SingleIngredient>
                <label>
                  <IngrInput
                    value={props.ingr[`strIngredient4`]}
                    onChange={(e) => props.ingredientChange('4', e.target.value)}
                  />
                </label>
                <IngredientParts strNum={'4'} partsChange={props.partsChange}/>
        </SingleIngredient>
        <SingleIngredient>
                <label>
                  <IngrInput
                    value={props.ingr[`strIngredient5`]}
                    onChange={(e) => props.ingredientChange('5', e.target.value)}
                  />
                </label>
                <IngredientParts strNum={'5'} partsChange={props.partsChange}/>
        </SingleIngredient>
        <SingleIngredient>
                <label>
                  <IngrInput
                    value={props.ingr[`strIngredient6`]}
                    onChange={(e) => props.ingredientChange('6', e.target.value)}
                  />
                </label>
                <IngredientParts strNum={'6'} partsChange={props.partsChange}/>
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
