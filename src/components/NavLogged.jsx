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
            <Link to="/discuss" className='nav-link'>DISCUSS</Link>
            <Link to="/intakepage" className='nav-link'>INTAKE</Link>
            <Link to="/profile" className='nav-link'>PROFILE</Link>
            <Link to="/logout" className='nav-link'>LOGOUT</Link>




          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
