import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem;
  h2::first-letter {
    text-transform: capitalize;
  }
`;

export const Row = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 0.5rem;
  padding: 1rem;

  &::-webkit-scrollbar {
    width: 1px !important;
  }
  &::-webkit-scrollbar {
    height: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #302e2e;
  }
`;

export const ImgContainer = styled.div`
  width: 10rem;
  height: 15rem;
  margin-right: 1rem;
  box-sizing: border-box;
  flex: 0 0 auto;
  transition: transform 300ms linear;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SmallImgContainer = styled(ImgContainer)`
  width: 10rem;
  height: 6rem;
`;
