import { Container, Main } from './StartStyle';
import { Path } from '../navBar/NavBarStyle';
import InitialHeader from './initialHeader/InitialHeader';

const Start = () => {
  return (
    <div>
      <InitialHeader />
      <Container>
        <Main>
          <h1>Unlimited movies, TV</h1>
          <h1>shows and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <div>
            <button>
              <Path to="/home">Get Started</Path>
            </button>
          </div>
        </Main>
      </Container>
    </div>
  );
};

export default Start;
