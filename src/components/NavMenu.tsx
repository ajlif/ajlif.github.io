import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link, NavLink as RRNavLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import ajLogo from '../shared/static/ajLogo.png';
import Skeleton from '@material-ui/lab/Skeleton';
import './NavMenu.scss';

type navMenuState = {
    isOpen: boolean,
    name: string,
    surName: string,
    istitute: string,
    isLoading: boolean
}

export default class NavMenu extends React.PureComponent<{}, navMenuState> {
    public state = {
        isOpen: false,
        name: "",
        surName: "",
        istitute: "",
        isLoading: true
    };

    componentDidMount = () => {
        //this.fetchInitialData();
    }

    getInstituteLogo = (institute: string) : any => {
        switch (institute){
            case '1': 
                return '';
            case "2" :
                return '';
        }
    }

    public render() {
        const { isOpen, name,surName, istitute, isLoading} = this.state;
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow" light>
                        <Container>
                            <NavbarToggler onClick={this.toggle} />
                            {isLoading ? (
                                    <>
                                    <img className='img-logo' src={ajLogo} alt="Ala Jlif Logo" loading='lazy'/>
                                    </>
                                ) : (
                                    <>
                                        <NavbarBrand tag={Link} to="/" ><img src={this.getInstituteLogo(istitute)} alt="Logo" className="logo" /></NavbarBrand>
                                    </>
                                )}
                            
                            <Collapse className="d-sm-inline-flex" isOpen={isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink exact tag={RRNavLink} to="/background" activeClassName="menu-selected"><strong className="menu">My Background</strong></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink exact tag={RRNavLink} to="/" activeClassName="menu-selected"><strong className="menu">My Cv</strong></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink exact tag={RRNavLink} to="/trips" activeClassName="menu-selected"><strong className="menu">My trips</strong></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink exact tag={RRNavLink} to="/pictures" activeClassName="menu-selected"><strong className="menu">My pictures</strong></NavLink>
                                </NavItem>
                            </ul>
                            </Collapse>

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
                        </Container>
                </Navbar>
            </header>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}