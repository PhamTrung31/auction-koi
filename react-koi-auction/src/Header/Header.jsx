import { Nav, NavDropdown, Navbar, Container, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">BetoKoi</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="Auction" id="collapsible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/currentAuction">Current Auction</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pastAuction">
                                Past Auction
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link id="regis" as={Link} to="/register">
                            Register
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header