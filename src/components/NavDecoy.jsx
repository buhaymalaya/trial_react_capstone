import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">      
    <Container>
        <Navbar.Brand href="#">
          <span className="logo-text">[esc]</span> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Link to="/" className='nav-link'>HOME</Link>
            <Link to="/aboutdecoy" className='nav-link'>ABOUT</Link>
            <Link to="/about" className='nav-link'>HELP</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
