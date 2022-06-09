import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
// import {BrowserRouter as Router, Link} from 'react-router-dom';

const Header = () => {
  const nav = useNavigate();
  const [navopen, setnavopen] = useState(false);
  return (
    <div>
      <Navbar color="dark" expand="md" dark>
        <NavbarBrand href="/">Book Crit</NavbarBrand>
        <NavbarToggler onClick={() => setnavopen(!navopen)} />
        <Collapse isOpen={navopen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink onClick={() => nav("/add")} >
                Add Book
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Login
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown
            inNavbar
            nav
          >
            <DropdownToggle
              caret
              nav
            >
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          </Nav>
          {/* <NavbarText>
          Simple Text
        </NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
