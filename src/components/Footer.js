import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./footer.css";
import logo from "../components/images/logo.png";

function Footer() {
  return (
    <div className="footer-fix">
      <Container>
        <br />
        <br />
        <Row className="footer-up">
          <Col md={12} lg={6}>
            <img src={logo} alt="logo" className="foot-logo" />
            <br />
            <p>
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
            <br />
            <br />
          </Col>
          <Col md={6} xs={12} lg={3} className="foot-up-right">
            <h3>Our Technologies</h3>
            <p>
              <span>ReactJS</span>
              <br />
              <span>Gatsby</span>
              <br />
              <span>NextJS</span>
              <br />
              <span>NodeJS</span>
              <br />
              <span>GraphQL</span>
              <br />
              <span>Laravel</span>
            </p>
          </Col>
          <br />
          <br />
          <Col md={6} xs={12} lg={3} className="foot-up-right">
            <h3>Our Services</h3>
            <p>
              <span>Social Media Marketing</span>
              <br />
              <span>Web & Mobile App Development</span>
              <br />
              <span>Data & Analytics</span>
              <br />
              <span>Google Marketing Solutions</span>
              <br />
              <span>Search Engine Optimization</span>
            </p>
          </Col>
          <br />
          <br />
        </Row>
        <hr />
        <Row className="footer-down">
          <Col xs={12}>Privacy Policy | Terms & Conditions</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;


