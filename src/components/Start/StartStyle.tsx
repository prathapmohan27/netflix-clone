import styled from 'styled-components';
import bg from '../assets/bg.jpg';

export const Container = styled.div`
  background-image: url(${bg});
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.6);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Main = styled.main`
  text-align: center;
  h1 {
    font-size: 3.5rem;
  }
  p {
    font-size: 1.5rem;
  }
  button {
    background-color: #e50914;
    color: inherit;
    outline: none;
    font-size: 2rem;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
    padding: 1rem 1.5rem;
  }
`;

export const InitialNav = styled.div`
  position: absolute;
  top: 0;
  padding-top: 1rem;
  img {
    width: 11rem;
  }
`;
