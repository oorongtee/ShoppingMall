import { useEffect, useMemo, useRef  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFruitData } from '../../../redux/api/productFruitSlice';
import { fetchTapData } from '../../../redux/api/tapDataSlice';
import PropTypes from 'prop-types';

import '../../../sass/productPage.css'

import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'; 
import { Container, Row, Col, Card,Button } from 'react-bootstrap';

//這裡顯示蔬果的商品卡片。功能有：
//抓蔬果的API資料
//拿蔬果的API資料去查tapData的API資料，把兩個資料結合
//並且將符合的商品價格貼在商品卡片上。

function ProductFruitCard({ selectedFruitCategory,  handleAddFruitToCart }) {
  const apiFruithData = useSelector((state) => state.fruitData);
  const tapDataApiData = useSelector((state) => state.tapData);
  const dispatch = useDispatch();
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchFruitData());
    dispatch(fetchTapData());
  }, [dispatch]);

  //將fruitData和tapData結合
  const combinedFruitData = useMemo(() => {
    if (apiFruithData.status === 'succeeded' && tapDataApiData.status === 'succeeded') {
      return apiFruithData.data.data.map(fruitItem => {
        const correspondingTapItem = tapDataApiData.data.find(tapItem => 
          tapItem.作物名稱 === fruitItem.name && 
          // tapItem.交易日期 === "20240818" && 
          tapItem.市場名稱 === "台北二");
        return { ...fruitItem, tapData: correspondingTapItem };
      });
    }
    return [];
  }, [apiFruithData, tapDataApiData]);

  //將結合的資料處理成好一點的格式，並且加上價格
  const reverseFruitData = combinedFruitData.map((item) => {
    return { ...item, price: item.tapData ? Math.floor(item.tapData.交易金額_元 / item.tapData.交易量_公斤) : 0,};
  })

  //篩選出符合的商品，給fruitlist用的類別篩選
  const filteredFruitItems = reverseFruitData ? 
  reverseFruitData.filter(item => selectedFruitCategory === null || item.category === selectedFruitCategory) : [];

  //處理商品欄位左右滾動
  const handleScroll = (direction) => {
    const scrollAmount = 300;
    if (scrollContainerRef.current) {
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
      scrollContainerRef.current.scrollLeft = newScroll;
    }
  };

  return (
    <div>

      <div className="d-flex justify-content-between">
        <div>
          <h1 className="tk-aktiv-grotesk-condensed">Product</h1>
        </div>
        <div>
          <Button variant="light" onClick={() => handleScroll('left')}><ChevronLeft /></Button>
          <Button variant="light" onClick={() => handleScroll('right')}><ChevronRight /></Button>
        </div>
      </div> 

      {apiFruithData.status === 'loading' || tapDataApiData.status === 'loading' && <p className="tk-aktiv-grotesk-thin">Loading...</p>}
      {apiFruithData.status === 'succeeded' && tapDataApiData.status === 'succeeded' && combinedFruitData && (
        <Container className="p-0 m-0 tk-aktiv-grotesk-thin">
          <Row className="gx-0 align-items-stretch homepageCard-bordered-row" ref={scrollContainerRef} style={{ overflowX: 'auto', width: '100%' }}>
        {
              filteredFruitItems.map((fruitItem) => (
                <Col key={fruitItem.id} xs={6} md={4} lg={3} className="p-2">
                <Card className="custom-product-card">
                  <Card.Img variant="top" src={fruitItem.url} className="custom-product-card-img" alt={fruitItem.name}/>
                  <Card.Body className="custom-product-card-body">
                    <Card.Title>{fruitItem.name}</Card.Title>
                    <Card.Text>{fruitItem.description}</Card.Text>
                    <Card.Text>${fruitItem.price}</Card.Text>
                    <Button variant="primary" onClick={() => handleAddFruitToCart(fruitItem)}>Add to Cart</Button>
                  </Card.Body>
                </Card>
                </Col>
              ))
            }
          </Row>
        </Container>
      )}    
      {apiFruithData.status === 'failed' || tapDataApiData.status === 'failed' && <p className="tk-aktiv-grotesk-thin">Error</p>}
    </div>
  );
}

ProductFruitCard.propTypes = {
  handleAddFruitToCart: PropTypes.func,
  selectedFruitCategory: PropTypes.string,
};
export default ProductFruitCard;