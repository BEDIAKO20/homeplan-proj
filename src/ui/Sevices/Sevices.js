import React from "react";
import { Col } from "react-bootstrap";
import {BsFillHouseDownFill} from "react-icons/bs"
import "../Sevices/Sevices.css"
// import servicesData from "../../assets/data/serviceData";
import serviceData from "../../assets/Data/SeviceData";

const ServicesList = () => {
  return (
    <>
      {serviceData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <span className="mb-3 d-inline-block">
      <BsFillHouseDownFill/>
      {/* {item.icon} */}
      </span>

      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
);

export default ServicesList;