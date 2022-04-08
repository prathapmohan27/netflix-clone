import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  color: #ededeb;
  width: 100%;
  height: 50vh !important;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.7);
  background-image: url('https://cdn.pixabay.com/photo/2017/10/13/14/15/fantasy-2847724__340.jpg');
  background-size: cover;
`;

export const Section = styled.section`
  padding: 2rem;
  margin-top: 8rem;
  margin-bottom: 5rem;
  h1 {
    font-size: 2.5rem;
    font-weight: 800;
  }
  p {
    width: 30rem;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

export const HeaderButton = styled.button`
  color: #ededeb;
  padding: 0.5rem 1rem;
  background-color: rgba(46, 49, 49, 0.5);
  border: none;
  outline: none;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: #ededeb;
  }
`;
