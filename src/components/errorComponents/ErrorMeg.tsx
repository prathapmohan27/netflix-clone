import logo from '../assets/logo.png';
import { Img, ErrorContainer } from './ErrorStyle';

const ErrorMeg = () => {
  return (
    <ErrorContainer>
      <Img src={logo} alt="logo" />
      <h1>Whoops,something went Wrong...</h1>
      <p>
        We're having trouble playing this title right now. Please try again
        later or select a different title
      </p>
    </ErrorContainer>
  );
};

export default ErrorMeg;
