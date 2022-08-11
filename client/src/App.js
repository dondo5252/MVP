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
background-color: #f8f8ff;
`;