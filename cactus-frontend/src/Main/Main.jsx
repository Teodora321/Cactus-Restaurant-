import React from 'react';
import styled from 'styled-components';

function Main() {
    return (
        <MainContainer>
         <img src="./main-bg.jpg" alt="main" /> 
        </MainContainer>
    )
}
export default Main

const MainContainer = styled.main`
       img{
        width:100%;
        height:100%   
       } 
`