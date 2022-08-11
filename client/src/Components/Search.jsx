
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import CreateDrinkModal from './AddRecipeModal.jsx'



const Search = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const [isOpenC, setIsOpenC] = useState(false);


  var onSearch = (e) => {
    props.switchData()
    props.search(searchValue)
  }

  var toggleModalC = (event) => {
    setIsOpenC(!isOpenC);
  };
  var onClickDrink = (event) => {
    console.log(event.target.textContent)
    props.drinksbyAlc(event.target.textContent)

  };

  return (
    <HeaderContainer>
      <InnerContainer>
      <FilterText  onClick={onClickDrink}>Whiskey </FilterText>
      <FilterText  onClick={onClickDrink}>Vodka </FilterText>
      <FilterText  onClick={onClickDrink}>Tequila </FilterText>
      <FilterText  onClick={onClickDrink}>Gin </FilterText>
      <SearchForm>
        <label>
          <input type="text" name="cocktail" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        </label>
        <button type="button" onClick={onSearch}>Search </button>
      </SearchForm>

      <FilterText  onClick={toggleModalC}>Add Cocktail </FilterText>
      <FilterText  onClick={props.getCreated}>Created Cocktails</FilterText>
      {isOpenC && <CreateDrinkModal closeModal={toggleModalC}/>}
      </InnerContainer>
    </HeaderContainer>
  )
}

export default Search

var HeaderContainer = styled.div`
  position: fixed;
  width: 100%;

  z-index:10;
  background: rgb(2,0,36);
  background: linear-gradient(rgb(0, 0, 0) 0px, rgb(3, 22, 33) 64.2%, rgb(6, 39, 58) 100%);
`;
var InnerContainer = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
`;

const FilterText = styled.div`
color: #ce7c2e;
font-size: 20px;
font-weight:bold;
white-space: nowrap;
font-family: 'Nanum Gothic Coding', monospace;
padding-top: 20px;
margin-left:10px;
margin-right:10px;
:hover {
  text-decoration: underline;
  cursor: pointer;
  color: #E02929;
};
`;

var SearchForm = styled.form`
padding-top: 20px;
margin-left:10px;
margin-right:10px;
`;