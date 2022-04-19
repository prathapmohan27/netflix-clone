import SignIn from '../auth/signIn/SignIn';
import InitialHeader from '../Start/initialHeader/InitialHeader';
import { StartContainer } from '../Start/StartStyle';

const SignInPage = () => {
  return (
    <>
      <InitialHeader />
      <StartContainer>
        <SignIn />
      </StartContainer>
    </>
  );
};

export default SignInPage;
