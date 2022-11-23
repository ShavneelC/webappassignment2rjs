import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar(props) {

  const [token, setToken] = useState("");
  const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        if(localStorage.getItem("token")){
          setToken(localStorage.getItem(token));
            setHasToken(true);
            }
        }, [token]);

    return (

            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Attendance Marker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {hasToken  ?
                <Nav.Link href="login">Logout</Nav.Link> :
                <Nav.Link href="login">Login</Nav.Link>
            }
            <Nav.Link href="Classes">Classes</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;