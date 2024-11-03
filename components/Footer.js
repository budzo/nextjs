import { Container, Row, Col } from 'react-bootstrap';
import { teko } from '../styles/fonts';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className={`${teko.className} footer`}>
        <Container>
            <Row>
                <Col>
                    <div className="footer-text py-2 text-center text-uppercase fs-5">&copy; {currentYear} Budzo Racing</div>
                </Col>
            </Row>
        </Container>
      </footer>
    );
  };
  
  export default Footer;