import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleCartShow} from '../redux/state/CartShowControllerState.jsx';

//LOGO pic
// 購物車與登入與個人頭像

function HeaderPage() {

  const dispatch = useDispatch();

  const handleShowCartTag = () => {
    dispatch(toggleCartShow());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="p-0 m-0">
        <Navbar.Brand href="/">
        <img
          src="src/assets/pokemon.png" 
          width="70" 
          height="70" 
          className="d-inline-block align-top"
          alt="Brand Logo" 
        />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <LinkContainer to="/fruit">
              <Nav.Link>Fruit</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tea">
              <Nav.Link>Tea</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/checkout">
              <Nav.Link>Checkout</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="justify-content-end">

            <LinkContainer to="/login" className="me-3">
              <div className="d-flex justify-content-center align-items-center">
                <Button variant="outline-success" className="rounded-pill text-black">Login</Button>
              </div>
            </LinkContainer>

            <Nav.Link className="btn btn-success me-3" onClick={handleShowCartTag}>
              <img
                src="src/assets/shopping-cart.svg"
                width="30"
                height="30"
                className="d-inline-block align-top d-none d-lg-inline"
                alt="profile-round"
              />
              <span className="d-lg-none">cart</span>
            </Nav.Link>

            <LinkContainer to="/profile" className="btn btn-success me-3">
              <Nav.Link>
                <img
                src="src/assets/profile-round.svg" 
                width="30" 
                height="30" 
                className="d-inline-block align-top d-none d-lg-inline"
                alt="profile-round" 
                />
                <span className="d-lg-none">profile</span>
            </Nav.Link>

            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderPage;