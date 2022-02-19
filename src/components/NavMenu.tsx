import { useState} from "react";
import { Collapse, Container, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import ajLogo from '../shared/static/ajLogo.png';
import './NavMenu.scss';

const NavMenu = (): JSX.Element => {

const [isOpen, setIsOpen] = useState(false);

return (
    <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow" light>
            <Container>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <img className='img-logo' src={ajLogo} alt="Ala Jlif Logo" loading='lazy' />
                <Collapse className="d-sm-inline-flex" isOpen={isOpen} navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink exact tag={RRNavLink} to="/" activeClassName="menu-selected"><strong className="menu">My Cv</strong></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact tag={RRNavLink} to="/projects" activeClassName="menu-selected"><strong className="menu">My Projects</strong></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact tag={RRNavLink} to="/frontendtips" activeClassName="menu-selected"><strong className="menu">My FE tips</strong></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact tag={RRNavLink} to="/trips" activeClassName="menu-selected"><strong className="menu">My Trips</strong></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact tag={RRNavLink} to="/pictures" activeClassName="menu-selected"><strong className="menu">My pictures</strong></NavLink>
                        </NavItem>
                    </ul>
                </Collapse>

                {/*
                        <div className="d-flex flex-row-reverse">
                            {isLoading ? (
                                <>
                                    <Skeleton className="align-self-center" variant="text" width={140} height={35} />
                                    <Skeleton className="m-1" variant="circle" width={40} height={40} />
                                </>
                            ) : (
                                <>
                                    <strong className="align-self-center user">{name + " " + surName}</strong>
                                    <Avatar className="m-2">{name.substring(0, 1) + surName.substring(0, 1)}</Avatar>
                                </>
                            )}
                        </div>
                        */}
            </Container>
        </Navbar>
    </header>
);
}
export default NavMenu;