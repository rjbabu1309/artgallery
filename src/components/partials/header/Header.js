import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" bg="white" variant="light" >
  <Container>
  {/* <Navbar.Brand ><Link to='/'><img className='logo' src="logo.jpg" alt="" /></Link></Navbar.Brand> */}
  <Navbar.Brand href='/'> <h1  className="font-Finger-Paint font96">Ella Mae<br/>Lumibao</h1></Navbar.Brand>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
    <Nav>
      <Nav.Link as={Link} to='gallery'>Gallery</Nav.Link>
      <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
      <Nav.Link as={Link} to='/order'>Order Now</Nav.Link>
      <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
      <Nav.Link href='https://www.instagram.com/alleam_20/' target='_blank'>Instagram</Nav.Link>
      {/* <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Header