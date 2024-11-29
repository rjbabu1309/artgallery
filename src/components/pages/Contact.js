import Button from "@restart/ui/esm/Button";
import { Col, Form, Row } from "react-bootstrap";

const Contact = () => {
    return (
        <div className='customContainer' style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ width: "40%",}}>
                <h3>Get in Touch, have exiting quotes!</h3>
                <Form>
                    <Row className="mb-3">
                        <h5>Name</h5>
                        <Form.Group as={Col} controlId="formGridName">
                            {/* <Form.Label>Name</Form.Label> */}
                            <Form.Control type="text" placeholder="First name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                            {/* <Form.Label></Form.Label> */}
                            <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <h3>Email address</h3>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <h4>Address</h4>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Contact;