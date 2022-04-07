import styled from 'styled-components';

interface ulInterface {
  show: boolean;
}

const Ul = styled.ul<ulInterface>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  right: 4rem;
  top: 2rem;
  list-style-type: none;
  background-color: rgba(26, 13, 13, 0.6);
  padding-left: 0;
  li {
    cursor: pointer;
    padding: 0.3rem 0.8rem;
    margin-bottom: 0.3rem;
  }
`;

const DropDown = ({ show }: ulInterface) => {
  return (
    <Ul show={show}>
      <li>gmail</li>
      <li>Log Out</li>
    </Ul>
  );
};

export default DropDown;
