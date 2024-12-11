import { Container} from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (
        <Container className='customContainer '>
            <ImageContainer></ImageContainer>
            <div className='contant'>
                <h3>Hey! Welcome to my portfolio.</h3>
                <h6>Transform your cherished memories into stunning sketches.<br /> </h6>
                <h4><span>Get yours or surprise your</span> <span>love ones!</span></h4>
                <p>Contact us to have a personalized quote!</p>
            </div>
        </Container>
    );
}

export default Home




const styles = {
  container: {
    width: "30vw", // 40% of the viewport width
    maxWidth: "100%", // Ensures responsiveness
    minWidth: 300,
    aspectRatio: "1", // Keeps it square (1:1)
    overflow: "hidden", // Prevents overflow
    border: "2px solid #ddd", // Optional: Add a border
    borderRadius: "8px", // Optional: Rounded corners
    margin: "auto",
  },
  image: {
    width: "100%", // Ensures the image fills the container
    height: "100%", // Ensures the image fills the container
    objectFit: "cover", // Crops the image if needed
  },
};

const ImageContainer = () => {
  return (
    <div  className="d-flex justify-content-center align-items-center"
      style={styles.container}
    >
      <img
        src="art_7.jpg" // Replace with your image URL
        alt="Responsive"
        style={styles.image}
      />
    </div>
  );
};


