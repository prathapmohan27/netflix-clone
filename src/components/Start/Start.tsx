import { StartContainer, Main } from './StartStyle';
import { Path } from '../navBar/NavBarStyle';
import InitialHeader from './initialHeader/InitialHeader';

const Start = () => {
  return (
    <div>
      <InitialHeader />
      <StartContainer>
        <Main>
          <h1>Unlimited movies, TV</h1>
          <h1>shows and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <div>
            <Path to="/sign-in-page">
              <button>Get Started</button>
            </Path>
          </div>
        </Main>
      </StartContainer>
    </div>
  );
};

export default Start;
