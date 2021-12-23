import { Container} from "react-bootstrap";

const Home = () => {
    return (
        <Container className='customContainer '>
            <img className='animation'   src="art.jpg" alt="" />
            <div className='contant'>
                <h3>Hi! Welcome to my portfolio.</h3>
                <p><span>Ella Mae Lumibao</span> is a <span>Portraitist</span>.<br/> Learnt 
                art from the online world.</p>
                
            </div>
        </Container>
    );
}

export default Home