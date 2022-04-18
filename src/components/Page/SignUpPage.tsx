import SignUp from '../auth/signUp/SignUp';
import InitialHeader from '../Start/initialHeader/InitialHeader';
import { StartContainer } from '../Start/StartStyle';

const SignUpPage = () => {
  return (
    <>
      <InitialHeader />
      <StartContainer>
        <SignUp />
      </StartContainer>
    </>
  );
};

export default SignUpPage;
