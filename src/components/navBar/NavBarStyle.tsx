import styled from 'styled-components';

export const Logo = styled.img`
  width: 8rem;
  object-fit: contain;
  margin-left: 1.5rem;
`;

export const Nav = styled.div`
  padding: 0.5rem;
  background-color: #1a0d0d;
  color: #ededeb;
  display: flex;
  font-family: sans-serif;
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
