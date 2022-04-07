import { Logo, Nav, Ul, User } from './NavBarStyle';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import DropDown from './dropDown/DropDown';
import { useState } from 'react';

const NavBar = () => {
  const [isDropDown, setIsDropDown] = useState<boolean>(false);

  const showDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <Nav>
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
