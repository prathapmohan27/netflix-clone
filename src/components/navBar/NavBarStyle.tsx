import styled from 'styled-components';

interface propsInterface {
  scroll?: boolean;
  isSidebar?: boolean;
}

export const Nav = styled.nav<propsInterface>`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 0.5rem;
  background-color: ${(props) => (props.scroll ? 'black' : 'transparent')};
  color: #ededeb;
  display: flex;
`;

export const Logo = styled.img`
  width: 8rem;
  object-fit: contain;
  margin-left: 1.5rem;
`;

export const Ul = styled.ul<propsInterface>`
  list-style: none;
  display: flex;
  @media only screen and (max-width: 768px) {
    display: ${(props) => (props.isSidebar ? 'flex' : 'none')};
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100vh;
    background-color: #000000;
    margin: 0;
    flex-direction: column;
    padding: 0.5rem;
    div {
      display: block;
      align-self: flex-end;
      margin-right: 0.8rem;
    }
    li {
      margin-top: 1rem;
    }
  }

  li {
    cursor: pointer;
    margin-right: 2.5rem;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const User = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  align-self: center;
  img {
    width: 2.5rem;
    object-fit: contain;
    border-radius: 0.5rem;
  }
`;

export const ListButtonContainer = styled.div`
  display: none;
  align-self: center;
  margin-right: 1rem;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const ListButton = styled.button`
  color: #ededeb;
  font-size: 2.5rem;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const CloseButtonContainer = styled.div`
  display: none;
  font-size: 1.5rem;
  button {
    border: none;
    outline: none;
    background-color: transparent;
  }
`;
