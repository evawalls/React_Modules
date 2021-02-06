import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {

    return (
        <Header>
            <Navbar classname="header">
                <NavbarBrand href="/">React Library</NavbarBrand>
                <Nav classname="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/evawalls/"
                    </NavItem>
                </Nav>
            </Navbar>
        </Header>
    );
};

export default Header;