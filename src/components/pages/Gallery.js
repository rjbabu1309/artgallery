import { Col, Container, Row } from "react-bootstrap";
import PortraitCard from "../cards/PortraitCard";

const ImageArray= [
    "art_1.jpg",
    "art_2.jpg",
    "art_5.jpg",
    "art_3.jpg",
    "art_4.jpg",
    
    // "art_13.jpg",
    "art_8.jpg",
    // "art_9.jpg",
    // "art_10.jpg",
    "art_11.jpg",
    "art_6.jpg",
    "art_7.jpg",
    // "art_12.jpg",
    
];

const Gallery = () => {
    return(
        <Container className='customContainer'>

            <Row xs={1} md={3} className="g-4">
                {ImageArray.map((ele, idx) => (
                    <Col>
                        <PortraitCard src={ele}></PortraitCard>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Gallery