import { Logo, Nav, Ul, User } from './NavBarStyle';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import DropDown from './dropDown/DropDown';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

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

  return (
    <Nav scroll={scroll}>
      <Logo src={logo} alt="netflix" />
      <Ul>
        <li>Home</li>
        <li>Tv Shows</li>
        <li>Movie</li>
        <li>Recently Added</li>
        <li>My List</li>
      </Ul>

      <User>
        <img onClick={showDropDown} src={user} alt="user" />
      </User>
      <DropDown show={isDropDown} />
    </Nav>
  );
};

export default NavBar;
