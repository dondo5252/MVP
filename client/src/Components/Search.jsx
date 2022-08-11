
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


  return (
    <div>
      <form>
        <label>
          Search Cocktail:
          <input type="text" name="cocktail" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        </label>
        <button type="button" onClick={onSearch}>Search </button>
      </form>
      <button type="button" onClick={toggleModalC}>Add Cocktail </button>
      <button type="button" onClick={props.getCreated}>Created Cocktails</button>
      {isOpenC && <CreateDrinkModal closeModal={toggleModalC}/>}
    </div>
  )
}

export default Search