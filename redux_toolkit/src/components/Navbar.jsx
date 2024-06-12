import { Container, Nav,  Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const cartProducts = useSelector(state => state.cart);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Redux Toolkit</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to={"/"} as={Link}>
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Toggle></Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>
              My Bag {cartProducts.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
