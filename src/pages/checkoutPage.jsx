import { useSelector, useDispatch} from 'react-redux';
import '../sass/cart.css'
import '../sass/checkout.css'
import { useState, useEffect } from 'react';
import { fetchPersonalProfileData } from '../redux/api/personalProfileSlice';
import { clearCart } from '../redux/state/shoppingCartState';

import {Container, Row, Col, Card, Button } from 'react-bootstrap';
import couponIcon from '../assets/couponIcon.png';

function CheckoutPage() {
  const cartData = useSelector((state) => state.cart);
  const apiProfileData = useSelector((state) => state.profileData);
  const dispatch = useDispatch();
  const [checkoutTotalPrice, setCheckoutTotalPrice] = useState(0);
  const [couponUsageCounts, setCouponUsageCounts] = useState({});
  const [isCouponAppliedFalse, setIsCouponAppliedFalse] = useState(false);
  
  const fruitCartData = Array.isArray(cartData.items) ? cartData.items.filter((item) => item.category === 'fruit'||item.category === 'vegetable' ) : [];
  const teaCartData = Array.isArray(cartData.items) ? cartData.items.filter((item) => item.category === 'tea'|| item.category === 'milkTea'):[];
  const fruitCartTotal = fruitCartData.reduce((sum, item) => sum + item.totalPrice, 0);
  const teaCartTotal = teaCartData.reduce((sum, item) => sum + item.totalPrice, 0);

  const couponUsagePrice = -(checkoutTotalPrice - cartData.cartTotalPrice)



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
      let isCouponApplied = false;
      switch (Number(data.couponId)) {
        case 1:
          if (fruitCartTotal >= 100) {
            price -= Number(data.discount);
            updateCouponUsageCount(data.couponId);
            isCouponApplied = true;
          }
          break;
        case 2:
          if (teaCartTotal > 0) {
            price -= Number(data.discount);
            updateCouponUsageCount(data.couponId);
            isCouponApplied = true;
          }
          break;
        default:
          break;
      }
      if (!isCouponApplied) {
        setIsCouponAppliedFalse(true);
      }else{
        setIsCouponAppliedFalse(false);}
      return price; 
    });
  };

//結帳打api出去
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
    <Container className="">
      <Row>
        <Col xs={7} lg={7}>
        <div className="p-3 rounded cartSummaryCard">
        <h3 className="tk-aktiv-grotesk">Shopping Cart Summary</h3>

        <Row className="gx-0 d-flex flex-column">
            <h5 className="tk-aktiv-grotesk-condensed">Vegetable</h5>
            {fruitCartData.length === 0 ? (<p className="tk-aktiv-grotesk-thin">None</p>) : (
            <div className="tk-aktiv-grotesk-condensed">
            {
              fruitCartData && fruitCartData .map((item, index) => (
                <Col key={index} className="mb-4">
                <Card>
                  <Card.Body className="d-flex">
                  <Row className="flex-grow-1">

                  <Col xs={8} lg={8} className="d-flex align-items-center justify-content-start">
                    <Card.Img src={item.url} style={{ maxWidth: '80px', maxHeight: '80px' }} alt={item.name} />
                    <div className="text-start" style={{ fontSize: '1rem', padding: '1rem' }}>
                      <Card.Text className="mb-1">{item.name}</Card.Text>
                      <Card.Text className="mb-1">${item.totalPrice}</Card.Text>
                    </div>
                  </Col>
                  <Col xs={2} lg={2}></Col>

                  <Col xs={2} lg={2} className="d-flex align-items-center justify-content-end">
                    <div className="d-flex justify-content-end">
                    <p style={{ fontSize: '0.8rem', padding: '0.8rem' }}>Amount:{item.amount}</p>
                    </div>
                  </Col>

                  </Row>
                  </Card.Body>

                </Card>
                </Col>
              ))
            }
            </div>)}
          <div className="d-flex align-items-center justify-content-end">
            <p className="tk-aktiv-grotesk-thin">Price：{fruitCartTotal}</p>
          </div>
        </Row>

        <Row className="gx-0 d-flex flex-column">
            <h5 className="tk-aktiv-grotesk-condensed">Drink</h5>
            {teaCartData.length === 0 ? (<p className="tk-aktiv-grotesk-thin">None</p>) : (
            <div className="tk-aktiv-grotesk-condensed">
            {
              teaCartData && teaCartData.map((item, index) => (
                <Col key={index} className="mb-4">
                <Card>
                  <Card.Body className="d-flex">
                  <Row className="flex-grow-1">

                  <Col xs={8} lg={8} className="d-flex align-items-center justify-content-start">
                    <Card.Img src={item.url} style={{ maxWidth: '80px', maxHeight: '80px' }} alt={item.name} />
                    <div className="text-start" style={{ fontSize: '1rem', padding: '1rem' }}>
                      <Card.Text className="mb-1">{item.name}</Card.Text>
                      <Card.Text className="mb-1">${item.totalPrice}</Card.Text>
                    </div>
                  </Col>
                  <Col xs={2} lg={2}></Col>

                  <Col xs={2} lg={2} className="d-flex align-items-center justify-content-end">
                    <div className="d-flex justify-content-end">
                    <p style={{ fontSize: '0.8rem', padding: '0.8rem' }}>Amount:{item.amount}</p>
                    </div>
                  </Col>

                  </Row>
                  </Card.Body>

                </Card>
                </Col>
              ))
            }
            </div>)}
          <div className="d-flex align-items-center justify-content-end">
            <p className="tk-aktiv-grotesk-thin">Price：{teaCartTotal}</p>
          </div>
        </Row>
        </div>
        </Col>

        <Col xs={5} lg={5}>
        <Row className="p-3 rounded walletCard">
          <div className="">
          <h3>Wallet</h3>
          <div>Ray Cash：{apiProfileData.data && apiProfileData.data.data && apiProfileData.data.data[0].walletBalance}</div>
          </div>
        </Row>
        <Row className="d-flex justify-items-center flex-column"> 
                <div>
                {
                  apiProfileData.data && apiProfileData.data.data && apiProfileData.data.data[0].coupons.map((data, index) => (
                    <div key={index} className="couponCard"> 
                      <Row>
                        <Col xs={8} lg={8}>
                          <h2>{data.description}</h2>
                        </Col>
                        <Col xs={4} lg={4}>
                        <div>
                          <img src={couponIcon} alt="Coupon Icon" style={{ maxWidth: '80%' }}/>
                        </div>
                        </Col>
                      </Row>
                    <div className="mb-3">
                    <p style={{ marginTop: '1px', marginBottom: '1px' }}>Discount:{data.discount}</p>
                    <p style={{ marginTop: '1px', marginBottom: '1px' }}>Amount:{data.amount}</p>
                    <p style={{ marginTop: '1px', marginBottom: '1px' }}>ExpiryDate:{data.expiryDate}</p>
                    </div>
                    <Button onClick={() => checkoutPrice(data) } variant="outline-success" className="rounded-pill text-black">使用</Button>
                    </div>
                  ))
                }
                </div>
          {isCouponAppliedFalse === true && <p>Coupon cannot be applied</p>}
        </Row>

        <Row className="p-3 rounded totalPriceCard" style={{backgroundColor: 'azure'}}>
          <div className="tk-aktiv-grotesk-thin">
          <p>Original Price：{cartData.cartTotalPrice}</p>
          <p>Discount：{couponUsagePrice}</p>
          <p>Total Price：{checkoutTotalPrice}</p>
          <Button onClick={() => handleCheckout() }variant="outline-success" className="rounded-pill text-black">Checkout</Button>
          
          </div>
        </Row>
        </Col>
      </Row>
    </Container>
    </div>
    
  );
}

export default CheckoutPage;