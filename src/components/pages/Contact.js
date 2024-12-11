import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="d-flex flex-column justify-content-between vh-90">
      <Container className="text-center my-5">
        <h1 className="mb-4">Contact Now</h1>
        <Container className="d-flex align-items-center justify-content-center rounded-circle p-3">
       <Row className="justify-content-center">
         <Col xs={12} md={6} lg={4} className="mb-4">
           <Button
             variant="outline-primary"
             href="https://instagram.com/sketchoo.art"
             target="_blank"
             className="d-flex align-items-center justify-content-center rounded-circle p-3"
            style={{ width: '70px', height: '70px' }}
           >
             <FontAwesomeIcon icon={faInstagram} className="" />
           </Button>
         </Col>
         <Col xs={12} md={6} lg={4} className="mb-3">
           <Button
             variant="outline-danger"
             href="mailto:ellalumibao05@gmail.com "
             className="d-flex align-items-center justify-content-center rounded-circle p-3"
             style={{ width: '70px', height: '70px' }}
           >
             <FontAwesomeIcon icon={faGoogle} className="" />
           </Button>
         </Col>
         <Col xs={12} md={6} lg={4} className="mb-3">
           <Button
             variant="outline-info"
             href="https://t.me/sketchoo.art"
             target="_blank"
             className="d-flex align-items-center justify-content-center rounded-circle p-3"
             style={{ width: '70px', height: '70px' }}
           >
             <FontAwesomeIcon icon={faTelegram} className="" />
           </Button>
        </Col>
       </Row>
      </Container>
      </Container>
      <h3 className="text-center mb-4">Please reach out on social media and place your order with us!!</h3>
      <p className="text-center mb-4">Please contact us with your address details and the sample picture to have sketch.<br /> 
             We do ship the orders, shipping charges are additional. <br />© 2024 Sketchoo.art. All Rights Reserved.</p>
    </div>
  );
};

export default Contact;
