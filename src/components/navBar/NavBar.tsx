import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
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
import { logOut } from '../helperFunction/firebase';

const NavBar = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const navigate = useNavigate();

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

  const handleLogOut = () => {
    logOut();
    navigate('/');
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
        <Li onClick={handleLogOut}>Log Out</Li>
      </Ul>
      <LogOut onClick={handleLogOut}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
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
