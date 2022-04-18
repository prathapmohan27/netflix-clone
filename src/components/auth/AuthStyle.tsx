import styled from 'styled-components';

interface propsInterface {
  str: string;
}

export const FormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  width: 20rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  h1 {
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SignButton = styled.button`
  width: 100%;
  margin-top: 2rem;
  color: inherit;
  background-color: #e50914;
  outline: none;
  border: none;
  padding: 0.5rem 0;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 0.7rem;
  border-radius: 0.2rem;
  font-size: 1rem;
  background-color: rgb(59, 59, 59);
  color: #737373;
  input {
    width: 100%;
    border: none;
    outline: none;
    background-color: inherit;
    color: white;
  }
  input:focus + label {
    top: 0;
    font-size: 0.7rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  p {
    color: #737373;
  }
`;

export const Label = styled.label<propsInterface>`
  position: absolute;
  top: ${(props) => (props.str === '' ? '0.6rem' : '0')};
  left: auto;
  font-size: ${(props) => (props.str === '' ? '' : '0.7rem')};
  cursor: text;
  z-index: 5;
  transition: top 200ms linear;
`;

export const Meg = styled.span`
  color: #e87c03;
  font-size: 0.8rem;
`;
