import { Col, Container, Row } from "react-bootstrap";
import PortraitCard from "../cards/PortraitCard";

const Gallery = () => {
    return(
        <Container className='customContainer'>

            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                        <PortraitCard></PortraitCard>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Gallery