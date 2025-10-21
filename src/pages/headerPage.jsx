import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleCartShow} from '../redux/state/CartShowControllerState.jsx';
import { AuthLoginContext } from '../components/login/authLoginContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// LOGO pic
// 購物車與登入與個人頭像

function HeaderPage() {
  const { isLoggedIn, setToken } = useContext(AuthLoginContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShowCartTag = () => {
    dispatch(toggleCartShow());
  };
  //把登入token拿掉
  const handleLogout = () => {
    setToken(null);
  };
  const handleLogin = () => {
    navigate('/login');
  }
  //購物車內的商品數量，從redux/shoppingCartState拿
  const cartItemCount = useSelector((state) => state.cart.items.length);

  return (
    <Navbar expand="lg" bg="white">
      <Container fluid className="p-0 m-0">
        <Navbar.Brand href="/">
        <img
          src="/pic/pokemon.png" 
          width="70" 
          height="70" 
          className="d-inline-block align-top"
          alt="Brand Logo" 
        />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto d-flex justify-content-center align-items-center tk-aktiv-grotesk-thin">
            <LinkContainer to="/fruit">
              <Nav.Link className="">Fruit</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tea">
              <Nav.Link className="">Tea</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="d-flex justify-content-end align-items-center">

            <Nav.Link className="d-flex justify-content-center align-items-center" onClick={isLoggedIn ? handleLogout : handleLogin}>
              <Button variant="outline-success" className="rounded-pill text-black d-none d-lg-block me-3 tk-aktiv-grotesk-thin">
                {isLoggedIn? 'Logout' : 'Login'}
              </Button>
              <span className="d-lg-none tk-aktiv-grotesk-thin" onClick={isLoggedIn ? handleLogout : handleLogin} style={{cursor: 'pointer', color: 'black'}}>
                {isLoggedIn ? 'Logout' : 'Login'}
              </span>
            </Nav.Link>

            <Nav.Link className="btn btn-success position-relative" onClick={handleShowCartTag}>
              <img
                src="/pic/shopping-cart.svg"
                width="30"
                height="30"
                className="d-inline-block align-top d-none d-lg-inline me-3"
                alt="profile-round"
              />
              <div
                className="position-absolute translate-middle rounded-circle bg-info text-black d-flex justify-content-center align-items-center"
                style={{ width: "25px", height: "25px", right: -15, top: 1 }}
              >
                {cartItemCount}
              </div>
              <span className="d-lg-none tk-aktiv-grotesk-thin">cart</span>
            </Nav.Link>

            <LinkContainer to="/profile" className="btn btn-success">
              <Nav.Link>
                <img
                src="/pic/profile-round.svg" 
                width="30" 
                height="30" 
                className="d-inline-block align-top d-none d-lg-inline me-3"
                alt="profile-round" 
                />
                <span className="d-lg-none tk-aktiv-grotesk-thin">profile</span>
            </Nav.Link>

            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderPage;