import { NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom' ;
import { useAppSelector } from '../../store/setup/hooks';
import { selectScroll } from '../../store/selectors/global.selectors';

const FooterMenu = () : JSX.Element => {

  const scrollInfo = useAppSelector(selectScroll);

  return (
    <div className={scrollInfo.isScrollingDown ?'footer-menu' : 'footer-menu hidden'}>
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