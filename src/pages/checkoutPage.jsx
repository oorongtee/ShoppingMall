import { useSelector, useDispatch} from 'react-redux';
import '../sass/cart.css'
import { useState, useEffect } from 'react';
import { fetchPersonalProfileData } from '../redux/api/personalProfileSlice';
import { clearCart } from '../redux/state/shoppingCartState';

function CheckoutPage() {
  const cartData = useSelector((state) => state.cart);
  const apiProfileData = useSelector((state) => state.profileData);
  const dispatch = useDispatch();
  const [checkoutTotalPrice, setCheckoutTotalPrice] = useState(0);
  const [couponUsageCounts, setCouponUsageCounts] = useState({});
  
  const fruitCartData = Array.isArray(cartData.items) ? cartData.items.filter((item) => item.category === 'fruit'||item.category === 'vegetable' ) : [];
  const teaCartData = Array.isArray(cartData.items) ? cartData.items.filter((item) => item.category === 'tea'|| item.category === 'milkTea'):[];
  const fruitCartTotal = fruitCartData.reduce((sum, item) => sum + item.totalPrice, 0);
  const teaCartTotal = teaCartData.reduce((sum, item) => sum + item.totalPrice, 0);


  useEffect(() => {
    dispatch(fetchPersonalProfileData());
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    if (cartData && cartData.cartTotalPrice) {
      setCheckoutTotalPrice(cartData.cartTotalPrice);
    }
  }, [cartData]);
  
  const updateCouponUsageCount = (couponId) => {
    setCouponUsageCounts((prevCounts) => ({
      ...prevCounts,
      [couponId]: (prevCounts[couponId] || 0) + 1,
    }));
  };
  
  //嚴格模式導致渲染兩次純屬正常：updateCouponUsageCount會讓優惠券多執行一次
  const checkoutPrice = (data) => {
    setCheckoutTotalPrice((currentPrice) => {
      let price = Number(currentPrice);
      switch (Number(data.couponId)) {
        case 1:
          if (fruitCartTotal >= 100) {
            price -= Number(data.discount);
            updateCouponUsageCount(data.couponId);
          }
          break;
        case 2:
          if (teaCartTotal > 0) {
            price -= Number(data.discount);
            updateCouponUsageCount(data.couponId);
          }
          break;
        default:
          break;
      }
      return price; 
    });
  };


  const handleCheckout = async () => {
    const checkoutData = {
      userId: apiProfileData.data.data[0].userId,
      items: cartData.items.map(item =>({
        productName:item.name,
        amount: item.amount.toString(),
      })),
      couponId1: couponUsageCounts[1] || 0,
      couponId2: couponUsageCounts[2] || 0,
      totalPrice: checkoutTotalPrice
    }
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkoutData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      dispatch(clearCart(true)); //清空購物車
      setCheckoutTotalPrice(0); //重設總價
      setCouponUsageCounts({}); //重設優惠券

      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
      console.log("1",checkoutData);
  }

  return (
    <div>
    <div>
        {fruitCartData && fruitCartData.map((item, index) => (
        <div key={index}>
          <h1>蔬果</h1>
          <h2>{item.name}</h2>
          <p>{item.totalPrice}</p>
          <h2>{item.amount}</h2>
        </div>
      ))}
        {teaCartData && teaCartData.map((item, index) => (
          <div key={index}>
            <h1>手搖</h1>
            <h2>{item.name}</h2>
            <p>{item.totalPrice}</p>
            <h2>{item.amount}</h2>
          </div>
        ))}
        <p>{cartData.cartTotalPrice}</p>
    </div>
    <div>
        {
          apiProfileData.data && apiProfileData.data.data && apiProfileData.data.data.map((data) => (
            <li key={data.id}>
            錢包餘額
              {data.walletBalance}
            </li>
          ))
        }
    </div>
    <div>
        {
          apiProfileData.data && apiProfileData.data.data && apiProfileData.data.data[0].coupons.map((data, index) => (
            <li key={index}>
            <p>編號：{data.couponId}</p>
            <p>{data.description}</p>
            <p>折扣：{data.discount}</p>
            <p>數量：{data.amount}</p>
            <p>到期日：{data.expiryDate}</p>
            <button onClick={() => checkoutPrice(data)}>使用</button>
            </li>
          ))
        }
    </div>
    <div>
        <p>總價：{checkoutTotalPrice}</p> 
        <button onClick={() => dispatch(clearCart(true))}>清空購物車</button>
    </div>

    <button onClick={() => handleCheckout()}>Checkout</button>


    </div>
    
  );
}

export default CheckoutPage;