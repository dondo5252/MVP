import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DrinkIndex from './Components/DrinkIndex.jsx'


var App = () => {

  return(
    <AppContainer>
      <DrinkIndex/>
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`

height: 100vh;
background-color: #06273a;
`;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// background-color: #06273a;