import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const Modal = styled.div`
  min-width: 85%;
  min-height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px){
      flex-flow: column wrap;
    }
`;

export const BoxLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center ;
  flex-direction: column;
  background-color: ${colors.primaryColor};
  width: 30em;
  height: 35em;
  padding: 6em;
  border-radius: 1em 0 0 1em;

  h1{
    font-size: 1.9rem;
    color: white;
    margin-bottom: 0.6rem;
  }

  span{
    color: white;
    margin-bottom: 1rem;
  }

  @media (max-width: 1100px){
    width: auto;
    height: 90vh;
    border-radius: 0;
  }
`;

export const BoxRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center ;
  flex-direction: column;
  background-color: white;
  max-width: 35em;
  min-height: 35em;
  padding: 6em;
  border-radius: 0 1em 1em 0;

  h1{
    font-size: 1.9rem;
    color: ${colors.primaryColor};
    margin-bottom: 0.6rem;
  }

  span{
    color: rgba(122,122,122,0.7);
    margin-bottom: 1rem;
  }

  input {
    background: rgba(122,122,122,0.15);
    width: 80%;
    font-size: 1rem;
    height: 3em;
    padding-left: 0.5em;
    margin-top: 1em;
    border: none;
  }

  button{
    margin-top: 1em;
    background: white;
    color: ${colors.primaryColor};
    border: 1px solid ${colors.primaryColor};
  }

  button:hover {
      background: ${colors.primaryColor};
      color: white;
    }

    @media (max-width: 1100px){
      width: fit-content;
      height: 90vh;
      padding: 0;
      border-radius: 0;


    }
`;

export const Icons = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24rem;

  button{
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
      color: ${colors.primaryColor};
      width: 3em;
      border: 1px solid ${colors.primaryColor};
      border-radius: 100%;
      margin: 0.5em;
  }

  @media (max-width: 1100px){
    height: auto;
    width: auto;
  }
`;
