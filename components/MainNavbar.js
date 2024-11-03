import { Nav, Navbar } from 'react-bootstrap';
import NavbarLogo from './NavbarLogo';
import SocialMediaLinks from '../components/SocialMediaLinks';
import { teko } from '../styles/fonts';
import styles from '../styles/mainnavbar.module.css';

function MainNavbar() {
  return (
    <Navbar expand="lg" className={`${teko.className} fixed-top bg-light`}>
      <Navbar.Brand href="/"><div className={styles.svgContainer} style={{paddingBottom: '31.43%'}}>
                  <NavbarLogo />
              </div></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto fst-italic text-uppercase">
          <Nav.Link href="/bio">Bio</Nav.Link>
          <Nav.Link href="/results">Results</Nav.Link>
          <Nav.Link href="/photos">Photos</Nav.Link>
          <Nav.Link href="/videos">Videos</Nav.Link>
          <Nav.Link href="/sponsors">Sponsors</Nav.Link>
          <Nav.Link href="/links">Links</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <SocialMediaLinks />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;