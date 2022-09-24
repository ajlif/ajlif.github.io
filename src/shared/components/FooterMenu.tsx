import { NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom' ;

const FooterMenu = () : JSX.Element => {


  return (
    <div className="footer-menu">
      <NavItem>
        <NavLink exact tag={RRNavLink} to="/" activeClassName="menu-selected">
          <i className="bi bi-house-fill social-footer"></i>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink exact tag={RRNavLink} to="/projects" activeClassName="menu-selected">
          <i className="bi bi-stack social-footer"></i>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink exact tag={RRNavLink} to="/trips" activeClassName="menu-selected">
          <i className="bi bi-globe social-footer"></i>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink exact tag={RRNavLink} to="/pictures" activeClassName="menu-selected">
          <i className="bi bi-image social-footer"></i>
        </NavLink>
      </NavItem>

    </div>
  );
};

export default FooterMenu;