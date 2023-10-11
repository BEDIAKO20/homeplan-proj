import React from "react";
import Carouel from "../../ui/carousel/Carousel";
import Carddi from "../../ui/CardDl/Carddi";
import  CardSearch from '../../ui/CardSearch/CardSearch'
// import homeplanData from "../../assets/Data/homeplans";
import { Container, Row, Col } from "react-bootstrap";
import AboutSection from "../../ui/aboutSection/AboutSection";
import ServicesList from "../../ui/Sevices/Sevices";



function Home() {
  return (
    <div>
      <section className="p-0  carouel-section">
      <Carouel />

      <CardSearch/>
      {/* <div className="">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best  plan  here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
               
              </Col>
            </Row>
          </Container>
        </div> */}
      </section>
    

<AboutSection/>

{/* ========== services section ============ */}
<section>
        <Container>
          <Row>
            <Col lg="12" className="my-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>
            <ServicesList/>
            {/* <ServicesList /> */}
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}



      <div>
        <Carddi />
      </div>
    </div>
  );
}

export default Home;
