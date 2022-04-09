import styled from 'styled-components';
interface imgInterface {
  url: string;
}
export const Div = styled.div<imgInterface>`
  display: flex;
  align-items: center;
  color: #ededeb;
  width: 100%;
  height: 50vh !important;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(${(props) => props.url || 'transparent'});
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
  @media only screen and (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
      width: 100%;
    }
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
