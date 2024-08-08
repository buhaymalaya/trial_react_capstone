import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">      
    <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>[esc]</Link>
        </Navbar.Brand>        
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Link to="/home" className='nav-link'>HOME</Link>
            <Link to="/about" className='nav-link'>ABOUT</Link>
            <Link to="/discusslogin" className='nav-link'>DISCUSS</Link>
            <Link to="/intakelogin" className='nav-link'>INTAKE</Link>
            <Link to="/resources" className='nav-link'>RESOURCES</Link>
            <Link to="/signup" className='nav-link'>SIGN UP</Link>
            <Link to="/login" className='nav-link'>LOGIN</Link>
            <Link to="/profilelogin" className='nav-link'>PROFILE</Link>




          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
