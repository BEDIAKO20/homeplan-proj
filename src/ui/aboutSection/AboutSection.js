import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../aboutSection/AboutSection.css";
import aboutImg from "../../assets/3d-house-about.jpg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import TruncateMarkup from "react-truncate-markup";

const AboutSection = ({ text, lines = 3 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="about__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content mt-5">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Manaspacegroup</h2>
              <TruncateMarkup
                lines={isExpanded ? Infinity : 3}
                ellipsis={
                  <span>
                    ... <p  className="read-link"  onClick={toggleExpand}>Read more</p>
                  </span>
                }
              >
                <p className="section__description">
                  Welcome to Your Manaspacegroup, where innovation meets
                  architectural excellence. We take pride in being your one-stop
                  destination for all your building plan needs. Whether you're
                  embarking on a new construction project, renovating an
                  existing space, or simply seeking inspiration, we are here to
                  empower your vision. Our Mission At Manaspacegroup, our
                  mission is to redefine the way people approach building
                  design. We believe that every structure has a story, and we
                  are dedicated to helping you tell yours. Our platform is
                  designed to streamline the process of accessing high-quality
                  building plans, ensuring that your projects are not only
                  visually stunning but also practical and efficient. What Sets
                  Us Apart? Extensive Collection: Explore a vast and diverse
                  collection of building plans curated to cater to various
                  architectural styles, sizes, and functionalities. From
                  contemporary homes to commercial spaces, our library is a
                  treasure trove of design possibilities
                </p>
              </TruncateMarkup>

              {isExpanded && (
                <p className="section__description">
                  Quality Assurance: We understand the importance of precision
                  in architectural planning. Our team of experts ensures that
                  each building plan meets the highest standards of quality,
                  adhering to local building codes and regulations.
                  User-Friendly Platform: Navigating through the world of
                  building plans has never been easier. Our user-friendly
                  platform allows you to search, customize, and visualize your
                  chosen plans effortlessly. Collaborative Design: We believe in
                  the power of collaboration. Connect with experienced
                  architects and designers, share ideas, and refine your plans
                  to perfection. Our platform fosters a creative community
                  dedicated to turning dreams into reality. Our Commitment At
                  Manaspacegroup, we are committed to empowering individuals and
                  businesses with the tools they need to bring their
                  architectural visions to life. Whether you are a seasoned
                  professional or a first-time builder, our platform is designed
                  to support you at every step of the journey. Join us in the
                  pursuit of architectural excellence. Let's build a future
                  where every structure is a testament to thoughtful design and
                  meticulous planning. Feel free to customize this content to
                  better align with your company's values, goals, and unique
                </p>
              )}

              {/* {!isExpanded && <button onClick={toggleExpand}>Read more</button>} */}
              {isExpanded && <p className="read-link" onClick={toggleExpand}>Read less</p>}

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <AiOutlineCheckCircle className="description-check" /> Lorem
                  ipsum dolor sit amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <AiOutlineCheckCircle className="description-check" /> Lorem
                  ipsum dolor sit amet.
                </p>
              </div>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <AiOutlineCheckCircle className="description-check" /> Lorem
                  ipsum dolor sit amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <AiOutlineCheckCircle className="description-check" /> Lorem
                  ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
