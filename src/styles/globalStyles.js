import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body, html, #root {
        height: 100%;
        font-family: sans-serif;
        font-size: 1rem;
    }

    button{
      cursor: pointer;
      background: ${colors.primaryColor};
      color: white;
      font-size: 0.9rem;
      padding: 10px;
      width: 10em;
      border: 1px solid white;
      border-radius: 3em;
    }

    button:hover {
      background: white;
      color: ${colors.primaryColor};
    }

`;

export const ModalContainer = styled.section`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(122,122,122,0.2);
    overflow: auto;

    @media (max-width: 1100px){

      width: auto;
      height: auto;
      overflow-y: auto;
      overflow-x: hidden;
    }
`;

export default GlobalStyle;
