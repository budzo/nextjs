import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Budzo Racing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/bio">Bio</Nav.Link>
            <Nav.Link href="/results">Results</Nav.Link>
            <Nav.Link href="/photos">Photos</Nav.Link>
            <Nav.Link href="/videos">Videos</Nav.Link>
            <Nav.Link href="/sponsors">Sponsors</Nav.Link>
            <Nav.Link href="/links">Links</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExample;