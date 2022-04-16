import { InitialNav } from '../StartStyle';
import { Logo } from '../../navBar/NavBarStyle';
import logo from '../../assets/logo.png';

const InitialHeader = () => {
  return (
    <InitialNav>
      <Logo src={logo} alt="logo" />
    </InitialNav>
  );
};

export default InitialHeader;
