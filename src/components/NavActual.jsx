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
            <Link to="/home" className='nav-link'>HOME</Link>
            <Link to="/about" className='nav-link'>ABOUT</Link>
            <Link to="/discuss" className='nav-link'>DISCUSS</Link>
            <Link to="/intake" className='nav-link'>INTAKE</Link>
            <Link to="/resources" className='nav-link'>RESOURCES</Link>
            <Link to="/signup" className='nav-link'>SIGN UP</Link>
            <Link to="/login" className='nav-link'>LOG IN</Link>
            <Link to="/profile" className='nav-link'>PROFILE</Link>




          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
