import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'; 

const NavbarBar = (props) => {
    console.log('bahi wala',props.repo);
    return (
        <>
        
            <Navbar  sticky="top" expand="lg" className="navbar">
                <Container>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav bg-light">
                        <Nav className="me-auto navLink">

                            <Nav.Link href="#home" className='links active'><img src="../../public/images/Frame.png"/> Profile</Nav.Link>

                            <Nav.Link  className='links'><img src="../../public/images/Vector (11).png"/> Repositories <span className='span'>{props.repo || 0}</span></Nav.Link>

                            <Nav.Link  className='links'><img src="../../public/images/Frame (1).png"/> Projects </Nav.Link>

                            <Nav.Link className='links'><img src="../../public/images/acha.png"/> Stars </Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavbarBar