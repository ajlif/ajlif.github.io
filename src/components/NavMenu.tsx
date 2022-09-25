import { useState } from 'react';
import { Collapse, Container, Navbar, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom' ;
import ajLogo from '../shared/images/ajLogo.png';
import '../styles/NavMenu.scss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MaterialUISwitch from '../shared/components/MaterialUISwitch';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/setup/hooks';
import { selectTheme } from '../store/selectors/global.selectors';
import { setTheme } from '../store/slices/themeSlice';
import { themes } from '../shared/interfaces/cv.interfaces';

const NavMenu = (): JSX.Element => {

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const theme = useAppSelector(selectTheme);
  const isLight = theme.theme === themes.LIGHT;

  return (
    <header className={isLight? '':'header-dark'}>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow">
        <Container>
          <div className={isOpen ? 'burger--active' : 'burger'} onClick={() => setIsOpen(!isOpen)}>
            <div className="burger__patty"></div>
          </div>
          <FormGroup>
            <FormControlLabel
              control={<MaterialUISwitch />}
              label=""
              onClick={() => dispatch(setTheme())}
              checked={!isLight}
            />
          </FormGroup>
          <img className='img-logo' src={ajLogo} alt="Ala Jlif Logo" loading='lazy' />
          <Collapse className="d-sm-inline-flex" isOpen={isOpen} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink exact tag={RRNavLink} to="/" activeClassName="menu-selected"><strong className={isLight? 'menu':'title-dark'}>My Cv</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact tag={RRNavLink} to="/projects" activeClassName="menu-selected"><strong className={isLight? 'menu':'title-dark'}>My Projects</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact tag={RRNavLink} to="/trips" activeClassName="menu-selected"><strong className={isLight? 'menu':'title-dark'}>My Trips</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact tag={RRNavLink} to="/pictures" activeClassName="menu-selected"><strong className={isLight? 'menu':'title-dark'}>My pictures</strong></NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default NavMenu;
