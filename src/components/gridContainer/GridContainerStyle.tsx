import styled from 'styled-components';

export const Grid = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1.5rem;
  @media only screen and (max-width: 768px) {
    margin: 0;
    gap: 0.3rem;
  }
`;

export const Main = styled.div`
  margin-top: 5rem;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 768px) {
    margin-top: 20%;
    width: 100%;
    h2 {
      margin-left: 0.5rem;
    }
  }
`;
