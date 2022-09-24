import { NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom' ;
import { useEffect, useState } from 'react';

const FooterMenu = () : JSX.Element => {

  const [showScrollUp, setshowScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll(): void {
    setshowScrollUp(window.scrollY > 20);
  }


  return (
    <div className={showScrollUp ?'footer-menu' : 'footer-menu hidden'}>
      <NavLink exact tag={RRNavLink} to="/" activeClassName="menu-selected">
        <i className="bi bi-house-fill social-footer"></i>
      </NavLink>

      <NavLink
        exact
        tag={RRNavLink}
        to="/projects"
        activeClassName="menu-selected"
      >
        <i className="bi bi-stack social-footer"></i>
      </NavLink>

      <NavLink
        exact
        tag={RRNavLink}
        to="/trips"
        activeClassName="menu-selected"
      >
        <i className="bi bi-globe social-footer"></i>
      </NavLink>

      <NavLink
        exact
        tag={RRNavLink}
        to="/pictures"
        activeClassName="menu-selected"
      >
        <i className="bi bi-image social-footer"></i>
      </NavLink>
    </div>
  );
};

export default FooterMenu;