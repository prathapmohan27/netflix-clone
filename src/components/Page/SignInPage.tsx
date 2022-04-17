import Login from '../auth/login/Login';
import InitialHeader from '../Start/initialHeader/InitialHeader';
import { StartContainer } from '../Start/StartStyle';

const SignInPage = () => {
  return (
    <>
      <InitialHeader />
      <StartContainer>
        <Login />
      </StartContainer>
    </>
  );
};

export default SignInPage;
