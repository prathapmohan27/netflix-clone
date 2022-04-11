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
  img {
    width: 10rem;
    height: 15rem;
    object-fit: cover;
  }
`;

export const Section = styled.section`
  padding-left: 1rem;
  p {
    margin: 0.8rem;
  }
`;
