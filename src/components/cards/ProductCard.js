import Button from "@restart/ui/esm/Button";
import { Card } from "react-bootstrap";
import './ProductCard.css'

const ProductCard = (props) => {
    return (
        <Card className='mg-tb'>
            {/* <Card.Header>Featured</Card.Header> */}
            <Card.Body className='box'>

                <Card.Img src='art.jpg' className="product-img"></Card.Img>
                <div className='product-contant'>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        It's cost about <span>{props.price} pesos</span>.
                    </Card.Text>
                    <Button className='btn' href={props.url} variant="primary">Order Now</Button>
                </div>

            </Card.Body>
        </Card>
    );
}

export default ProductCard