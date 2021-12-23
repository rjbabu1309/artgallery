import { Card} from "react-bootstrap";
import './PortraitCard.css'
const PortraitCard = () => {
    return (
        <Card className='card-custom'>
            <div className='card-imgs'>
                <Card.Img className='imgs' variant="top" src="art.jpg" />
            </div>
            {/* <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Link href="/details">Lorem, ipsum.</Card.Link>
            </Card.Body> */}
        </Card>
    );
}

export default PortraitCard