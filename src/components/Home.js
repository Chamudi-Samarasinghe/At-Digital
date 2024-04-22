import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useState } from 'react';


import cover from "../components/images/cover.jpg";
import image1 from "../components/images/1.png";
import image2 from "../components/images/2.png";
import "./Home.css";



function Home() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <figure className="position-relative">
        <img
          src={cover}
          className="img-fluid"
          alt="cover"
          style={{ height: "auto", width: "100%", maxHeight: "90vh", objectFit: "cover"}}
        />
        <figcaption>
          <h1>
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
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
              Your web and mobile Apps are pieces of the puzzle to grow your business. 
              We use frameworks which tailor content and engagement methods to respond 
              to different intents shown by your potential customers who interact with 
              your business online.
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
        <br />
        <br />
        
        <Row className="reverse-row" id="123" style={{ display: 'flex', justifyContent: 'center',  }} >

          <Col xs={12} md={8} className="text-col"  >
            <div >
              <h3 className="text-heading" style={{ textAlign:"center", fontSize:"27px" }}>Frequently asked questions</h3>
              <br />

              <div className="faq-box">
                <button className={`accordion ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>
                  Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                </button>
                <div className={`panel ${activeIndex === 1 ? 'show' : ''}`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla
                    faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                  </p>
                </div>
              </div>


              <div className="faq-box">
                  <button className={`accordion ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>
                   Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
                  </button>
             <div className={`panel ${activeIndex === 2 ? 'show' : ''}`}>
               <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci deserunt asperiores delectus
                   repellat magni!
                 </p>
             </div>
            </div>

              
            <div className="faq-box">
               <button className={`accordion ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
                  Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
               </button>
               <div className={`panel ${activeIndex === 3 ? 'show' : ''}`}>
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci deserunt asperiores delectus
                 repellat magni!
                  </p>
               </div>
            </div>

          
          </div>

          
          </Col>
          
        </Row>
       
        <br />
        
      </Container>
      
    </div>

    
  );
  
}



export default Home;


