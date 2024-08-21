import {  useEffect } from 'react';
import CartPage from '../../pages/cartPage'; 
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartShow,toggleCartNotShow } from '../../redux/state/CartShowControllerState';

//控制購物車頁面的顯示，請參考redux>>state>>CartShowControllerState.jsx

function CartShowController() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const cartTag = useSelector((state) => state.cartShow.cartTag);

  useEffect(() => {
    if (cartData && cartData.items.length > 0) {
      dispatch(toggleCartShow());
    }
  }, [cartData]);

  const toggleCartPage = () => {
    dispatch(toggleCartNotShow());
  };

  return (
    <>
      {cartTag && <CartPage toggleCartPage={toggleCartPage} />}
    </>
  );
}

export default CartShowController;