import { Div, Section, HeaderButton } from './HeaderStyle';

const Header = () => {
  return (
    <Div>
      <Section>
        <h1>Game Of Thrones</h1>
        <div>
          <HeaderButton>Play</HeaderButton>
          <HeaderButton>My List</HeaderButton>
        </div>
        <p>
          Nine noble families wage war against each other in order to gain
          control over the mythical land of Westeros.
        </p>
      </Section>
    </Div>
  );
};

export default Header;
