import styled from 'styled-components';
import { Div } from '../header/HeaderStyle';

interface propsInterface {
  show: boolean;
}

export const Container = styled(Div)`
  justify-content: center;
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
`;
