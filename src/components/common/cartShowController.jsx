import {  useEffect } from 'react';
import CartPage from '../../pages/cartPage'; 
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartShow,toggleCartNotShow } from '../../redux/state/CartShowControllerState';

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