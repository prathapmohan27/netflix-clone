import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import {
  Logo,
  Nav,
  Ul,
  User,
  ListButtonContainer,
  ListButton,
  CloseButtonContainer,
  Path,
} from './NavBarStyle';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import DropDown from './dropDown/DropDown';

const NavBar = () => {
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
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

  const showDropDown = () => {
    setIsDropDown(!isDropDown);
  };

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
          <Path to="/">Home</Path>
        </li>
        <li>
          <Path to="/movies">Movie</Path>
        </li>
        <li>
          <Path to="/recent">Recently Added</Path>
        </li>
        {/* <li>Tv Shows</li>
        <li>My List</li> */}
      </Ul>
      <User>
        <img onClick={showDropDown} src={user} alt="user" />
      </User>
      <DropDown show={isDropDown} />
      <ListButtonContainer>
        <ListButton onClick={showSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </ListButton>
      </ListButtonContainer>
    </Nav>
  );
};

export default NavBar;
