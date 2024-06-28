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

import { Button } from 'react-bootstrap';
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
      {<div onClick={stopPropagation} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>}
      {<div id="Card" className={cartTag === "show" ? "show" : ""}>
        <button onClick={toggleCartPage}>X</button>

        {fruitCartData && fruitCartData.map((item, index) => (
        <div key={index}>
          <h1>蔬果</h1>
          <h2>{item.name}</h2>
          <p>{item.totalPrice}</p>
          <h2>{item.amount}</h2>
          <button onClick={() => dispatch(addAmountCart(item))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item))}>刪除</button>
          <button onClick={() => dispatch(reduceAmountCart(item))}>-</button>
        </div>
      ))}
        {teaCartData && teaCartData.map((item, index) => (
          <div key={index}>
            <h1>手搖</h1>
            <h2>{item.name}</h2>
            <p>{item.totalPrice}</p>
            <h2>{item.amount}</h2>
            <button onClick={() => dispatch(addAmountCart(item))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item))}>刪除</button>
            <button onClick={() => dispatch(reduceAmountCart(item))}>-</button>
          </div>
        ))}
        <p>{cartData.cartTotalPrice}</p>
        <LinkContainer to="/checkout" className="me-3">
          <div className="d-flex justify-content-center align-items-center">
            <Button onClick={toggleCartPage} variant="outline-success" className="rounded-pill text-black">checkout</Button>
          </div>
        </LinkContainer>

      </div>}
    </div>
  );
}

CartPage.propTypes = {
  toggleCartPage: PropTypes.func,
};

export default CartPage;