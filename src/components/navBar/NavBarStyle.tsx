import styled from 'styled-components';

interface scrollInterface {
  scroll: boolean;
}

export const Nav = styled.nav<scrollInterface>`
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

export const Ul = styled.ul`
  list-style: none;
  display: flex;
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

// export const ListButtonContainer = styled.div`
//   display: none;
//   align-self: center;
//   margin-right: 1rem;
// `;

// export const ListButton = styled.button`
//   color: #ededeb;
//   font-size: 2.5rem;
//   background-color: transparent;
//   border: none;
//   outline: none;
// `;
