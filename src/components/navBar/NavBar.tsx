import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import {
  Logo,
  Nav,
  Ul,
  LogOut,
  ListButtonContainer,
  ListButton,
  CloseButtonContainer,
  Path,
  Li,
} from './NavBarStyle';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [isSidebar, setIsSidebar] = useState<boolean>(false);

  function handleScroll() {
    if (window.pageYOffset > 15) {
      setScroll(true);
    }
    if (window.pageYOffset < 15) {
      setScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <Nav scroll={scroll}>
      <Logo src={logo} alt="netflix" />
      <Ul isSidebar={isSidebar}>
        <div>
          <CloseButtonContainer onClick={showSidebar}>
            <FontAwesomeIcon icon={faXmark} />
          </CloseButtonContainer>
        </div>
        <li>
          <Path to="/home">Home</Path>
        </li>
        <li>
          <Path to="/movies">Movie</Path>
        </li>
        <li>
          <Path to="/recent">Recently Added</Path>
        </li>
        <Li>
          <Path to="/">Log Out</Path>
        </Li>
      </Ul>
      <LogOut>
        <Path to="/">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </Path>
      </LogOut>
      <ListButtonContainer>
        <ListButton onClick={showSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </ListButton>
      </ListButtonContainer>
    </Nav>
  );
};

export default NavBar;
