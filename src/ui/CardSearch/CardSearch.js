import React from 'react'
import { Container, Row , Card, Form, Col } from 'react-bootstrap';
import  "../CardSearch/CardSearch.css"



function CardSearch() {

    // const boxCard = {
    //     border: 'none',
    //     boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    //     borderRadius:'20px',
    //     position:"relative",
    //     top:"20%"
    // };
    
  return (
    <>
       
       <Container>
        <Row>
        <Card    className='Box-Card'>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
    <Row>
        <Col md={6}>
        <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
        </Col>
        <Col md={6}>
        <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
        </Col>
    </Row>
      </Card.Body>
    </Card>
        </Row>
       </Container>

    </>
  )
}

export default CardSearch