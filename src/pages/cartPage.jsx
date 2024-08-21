//要顯示每一筆CartData來的資料，並且價格顯示是perItemPrice。
//刪除按鈕，點擊後可以刪除該筆資料。
//這裡模仿ubereat，接受購物車redux的更新
//每次有更新就會重新render
//這裡有一個checkout按鈕

//要有chekout按鈕
import { addToCart, removeFromCart, addAmountCart, reduceAmountCart} from '../redux/state/shoppingCartState';
import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import'../sass/cart.css';

import {Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function CartPage({toggleCartPage}) {
  const cartData = useSelector((state) => state.cart);
  const cartTag = useSelector((state) => state.cartShow.cartTag);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToCart());
    dispatch(removeFromCart());
    dispatch(addAmountCart());
    dispatch(reduceAmountCart());
  }, [dispatch]);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };


  //分流：將carData裡面的fruit 以及 tea兩種資料分開
  const fruitCartData = Array.isArray(cartData.items) ? cartData.items.filter((item) => item.category === 'fruit'||item.category === 'vegetable' ) : [];
  const teaCartData = Array.isArray(cartData.items) ? cartData.items.filter((item) => item.category === 'tea'|| item.category === 'milkTea'):[];
  
  return (
    <div className="cartPage">
      {<div onClick={stopPropagation} id="stopPropagation"></div>}
      {<div id="Cart" className={cartTag === "show" ? "show" : ""}>

        <Button onClick={toggleCartPage} variant="outline-success" className="rounded-pill m-1">X</Button>
      {
      cartData.items.length === 0 ? (<h1 className="tk-aktiv-grotesk-extended">Cart empty</h1>):(
      <div>
        <Container className="p-0 m-0 tk-aktiv-grotesk-condensed" style={{maxHeight: '80vh', overflowY: 'auto' }}>
        <Row className="gx-0 d-flex flex-column">
            <h1 className="m-2" style={{maxWidth: '90%'}}>Vegetable</h1>
            {fruitCartData.length === 0 ? (<p>None</p>) : (
            <div>
            {
              fruitCartData && fruitCartData.map((item, index) => (
                <Col key={index} className="mb-4">
                <Card>
                  <Card.Body>
                  <Row>
                  <Col xs={8} lg={8} className="d-flex align-items-center justify-content-start">
                  <Card.Img src={item.url} style={{ maxWidth: '80px', maxHeight: '80px' }} alt={item.name} />
                    <div className="text-start fs-6 p-2 ">
                      <Card.Text className="mb-1 fs-4">{item.name}</Card.Text>
                      <Card.Text className="mb-1">${item.totalPrice}</Card.Text>
                      <Card.Text>Amount：{item.amount}</Card.Text>
                    </div>
                  </Col>
                  <Col xs={4} lg={4} className="d-flex align-items-center justify-content-end gap-2">
                    <div className="d-flex justify-content-center rounded-pill text-black" style={{ backgroundColor: "#E0E0E0"}}>
                      <button style={{ border: 'none', backgroundColor: 'transparent'}} onClick={() => dispatch(addAmountCart(item))}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                      </svg>      
                      </button>
                      <button style={{ border: 'none', backgroundColor: 'transparent'}} onClick={() => dispatch(reduceAmountCart(item))}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                      </button>
                    </div>
                    <div className="d-flex justify-content-center rounded-pill text-black" style={{ backgroundColor: "#E0E0E0"}}>
                      <button style={{ width: '30px', height: '30px', border: 'none', backgroundColor: 'transparent'}} onClick={() => dispatch(removeFromCart(item))}>
                      <i className="bi bi-trash"></i></button>
                    </div>
                  </Col>
                  
                  </Row>
                  </Card.Body>
                </Card>
                </Col>
              ))
            }
            </div>)}
          </Row>
          <Row className="gx-0 d-flex flex-column">
            <h1 className="m-2" style={{maxWidth: '90%'}}>Drink</h1>
            {teaCartData.length === 0 ? (<p>None</p>) : (
            <div>
            {
              teaCartData && teaCartData.map((item, index) => (
                <Col key={index} className="mb-4">
                <Card>
                  <Card.Body>
                  <Row>
                  <Col xs={8} lg={8} className="d-flex align-items-center justify-content-start">
                  <Card.Img src={item.url} style={{ maxWidth: '80px', maxHeight: '80px' }} alt={item.name} />
                    <div className="text-start fs-6 p-2 ">
                      <Card.Text className="mb-1 fs-4">{item.name}</Card.Text>
                      <Card.Text className="mb-1">${item.totalPrice}</Card.Text>
                      <Card.Text>Amount：{item.amount}</Card.Text>
                    </div>
                  </Col>
                  <Col xs={4} lg={4} className="d-flex align-items-center justify-content-end gap-2">
                    <div className="d-flex justify-content-center rounded-pill text-black" style={{ backgroundColor: "#E0E0E0"}}>
                      <button style={{ border: 'none', backgroundColor: 'transparent'}} onClick={() => dispatch(addAmountCart(item))}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                      </svg>      
                      </button>
                      <button style={{ border: 'none', backgroundColor: 'transparent'}} onClick={() => dispatch(reduceAmountCart(item))}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                      </button>
                    </div>
                    <div className="d-flex justify-content-center rounded-pill text-black" style={{ backgroundColor: "#E0E0E0"}}>
                      <button style={{ width: '30px', height: '30px', border: 'none', backgroundColor: 'transparent'}} onClick={() => dispatch(removeFromCart(item))}>
                      <i className="bi bi-trash"></i></button>
                    </div>
                  </Col>
                  </Row>
                  </Card.Body>
                </Card>
                </Col>
              ))
            }
            </div>)}
          </Row>
        </Container>

        <Container className="tk-aktiv-grotesk-condensed">
          <p>Total：{cartData.cartTotalPrice}</p>
          <LinkContainer to="/checkout" className="me-3">
            <div className="d-flex justify-content-center align-items-center">
              <Button onClick={toggleCartPage} variant="outline-success" className="rounded-pill text-black">checkout</Button>
            </div>
          </LinkContainer>
        </Container>
        
      </div>)}
      </div>}
    </div>
  );
}

CartPage.propTypes = {
  toggleCartPage: PropTypes.func,
};

export default CartPage;