
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('')

  var onSearch = (e) => {
    props.search(searchValue)
  }

  return (
    <div>
      <form>
        <label>
          Search Cocktail:
          <input type="text" name="cocktail" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        </label>
        <button type="button" onClick={onSearch}>Search </button>
      </form>
    </div>
  )
}

export default Search