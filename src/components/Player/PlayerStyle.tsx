import styled from 'styled-components';
import { Div } from '../header/HeaderStyle';

interface propsInterface {
  show: boolean;
}

export const Container = styled(Div)`
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const ButtonContainer = styled.div<propsInterface>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  button {
    border: none;
    outline: none;
    font-size: 3rem;
    padding: none;
    background-color: transparent;
    cursor: pointer;
    color: inherit;
  }
`;

export const VideoContainer = styled.div<propsInterface>`
  display: ${(props) => (props.show ? 'none' : 'block')};
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    align-self: flex-end !important;
    iframe {
      margin-top: 20%;
      width: 100%;
    }
  }
`;
