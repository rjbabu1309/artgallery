import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import ProductCard from "../cards/ProductCard";

const Pricing = () => {
    return (
        <Container>
        <ProductCard title={'Without Frame'} price={500} url={'/contact'} imgSrc="art_wo_frame.jpg"> </ProductCard>
        <ProductCard title={'With Frame'} price={1000} url={'/contact'} imgSrc="art_w_frame.jpg"></ProductCard>
        </Container>
    );
}

export default Pricing;