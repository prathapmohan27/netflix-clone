import styled from 'styled-components';

export const Div = styled.div`
  padding: 1rem;
  width: 40rem;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  transform: scaleY(1.4);
  background-color: #000000;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    padding: 0.5rem;
    width: 95%;
    transform: scaleY(1);
    border-radius: none;
  }
  img {
    width: 10rem;
    height: 15rem;
    object-fit: cover;
  }
`;

export const Section = styled.section`
  padding-left: 1rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
  p {
    margin-top: 0.8rem;
  }
`;
