import { Card} from "react-bootstrap";
import './PortraitCard.css'
const PortraitCard = (props) => {
    return (
        <Card className='card-custom'>
            <div className='card-imgs'>
                <Card.Img className='imgs' variant="top" src={props.src} />
            </div>
        </Card>
    );
}

export default PortraitCard