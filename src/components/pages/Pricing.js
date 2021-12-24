import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import ProductCard from "../cards/ProductCard";

const Pricing = () => {
    return (
        <Container>
        <ProductCard title={'Without Frame'} price={400} url={'/contact'}> </ProductCard>
        <ProductCard title={'With Frame'} price={800} url={'/contact'}></ProductCard>
        </Container>
    );
}

export default Pricing;