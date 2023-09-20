import React from "react";
import Carouel from "../../ui/carousel/Carousel";
import Carddi from "../../ui/CardDl/Carddi";
import homeplanData from "../../assets/Data/homeplans";
import { Container,Row,Col } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Carouel />
      <Container>
        <Row>
          <Col md={3} lg={4}>
          {homeplanData.map((item) => (
        <Carddi key={item.id} item={item} />
      ))}
          </Col>
        </Row>
      </Container>
      {/* <div className="container-md ">
        <div className="row">
          <div className="col-md-3">
          {homeplanData.map((item) => (
        <Carddi key={item.id} item={item} />
      ))}
          </div>
        </div>
      </div> */}
     
    </div>
  );
}

export default Home;
