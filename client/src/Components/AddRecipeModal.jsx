import React, { useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Ingredient from './Ingredient.jsx'


var CreateDrinkModal = (props) => {
  const [name, setName] = useState('')
  const [instructions, setInstructions] = useState('')
  const [image, setImage] = useState('');
  console.log(props)

  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    console.log(event.target.files[0])
    setImage(URL.createObjectURL(event.target.files[0]))
  };


  return (
    <StyleBackgroundC>
      <ModalContainerC>
      <CloseIcon className='fa-solid fa-xmark' onClick={props.closeModal}>  </CloseIcon>
      {/* <CloseButton onClick={props.closeModal}> X </CloseButton> */}
        <TopContainer>
          <Title>Create a Cocktail</Title>
        </TopContainer>
        <NameContainer>
            <NameLabel>
              Name:
            <NameInput type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
            </NameLabel>
          {/* <button type="button">Upload Photo </button> */}
          <div>
          <button type="button" onClick={handleClick}>Upload Image</button>
          <input type="file" style={{display:'none'}}  ref={hiddenFileInput} onChange={handleChange}/>

          </div>
          <ImageContainer>
          {image !== '' && <ShrinkImg src={image}/>}
          </ImageContainer>
        </NameContainer>
        <Ingredient/>
        <InstrContainer>
        <label>
          Instructions:
        <InstrText type="textarea" placeholder="Tell us how to make your cocktail!" value={instructions} maxLength = "1000" onChange={e  => console.log(e.target.value)}/>
        </label>
        </InstrContainer>
      </ModalContainerC>

    </StyleBackgroundC>
  )

}
export default CreateDrinkModal

const StyleBackgroundC =styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  z-index: 44;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  overflow: auto;
  backdrop-filter: blur(5px);
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  `;

  const ModalContainerC = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    max-width: 100%;
    border-radius: 6px;
  `;

  const CloseButton = styled.button`
    align-items: flex-end;
    border-radius: 5px;
    display: flex;
    font-size: 15px;
    flex-direction: row;
    opacity: 0.9;
    text-align: center;
    padding-right: 5px;
    font-family: 'Nanum Gothic Coding', monospace;
  `;

  const Title = styled.div`
  width: 150px;
  text-align:center;
  display:flex;
  justify-content: center;
  font-family: 'Nanum Gothic Coding',monospace;
  font-weight: bold;
  font-size: 45px;
  white-space: nowrap;
  padding-bottom: 10px;
`;


var TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

var NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InstrText = styled.textarea`
  width: 700px;
  height: 200px;
  font-family: 'Nanum Gothic Coding', monospace;
`;
const InstrContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 100%;
padding-left:20px;
`;

var NameInput = styled.input`
  margin-right: 6px;
  margin-left: 6px;
  margin-left: 11px;
`;

var NameLabel = styled.label`
  padding-left: 52px;
  padding-right: 110px;

`;
var ShrinkImg = styled.img`
width: 75px;
height: 75px;
margin-left: 20px;
border-radius: 5px;
`;

const ImageContainer = styled.div`
width: 75px;
height: 75px;
display: flex;
flex-direction: column;
align-items: center;
margin-left: 40px;
`;
var CloseIcon = styled.i`
  align-items: flex-end;
  display: flex;
  font-size: 35px;
  :hover {
    color: #EF8354;
    text-decoration: none;
    cursor: pointer;
  };
  height: 30px;
  right: 20px;
`;
