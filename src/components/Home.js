import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import cover from "../components/images/cover.jpg";
import image1 from "../components/images/1.png";
import image2 from "../components/images/2.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <figure className="position-relative">
        <img
          src={cover}
          alt="cover"
          // className="img-fluid cover-image"
          className="img-fluid"
          width="100%"
          style={{ height: 700, objectFit: "cover" }}
        />
        <figcaption>
          <h1>
            We crushe your competitors, goals, and sales records - without the
            B.S.
          </h1>
          <br />
          <button>GET FREE CONSULTASTION</button>
          <br />
          <br />
        </figcaption>
      </figure>

      <Container>
        <Row>
          <Col xs={12} md={4} className="image-col">
            <img src={image1} alt="1" className="img-fluid" />
          </Col>
          <Col xs={12} md={8} className="text-col">
            <div>
              <h3 className="text-heading">Web & Mobile App Development</h3>
              <br />
              <p className="text-content">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <button className="home button">LEARN MORE</button>
            </div>
          </Col>
        </Row>
        <br />
        <Row className="reverse-row">
          <Col xs={12} md={4} className="image-col">
            <img src={image2} alt="2" className="img-fluid" />
          </Col>
          <Col xs={12} md={8} className="text-col">
            <div>
              <h3 className="text-heading">Digital Strategy Consulting</h3>
              <br />
              <p className="text-content">
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                will never work in isolation and every business needs a
                different mix. We provide a clear concept and strategic overview
                to find the most efficient model for your business.
              </p>
              <button className="home button">LEARN MORE</button>
            </div>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Home;


