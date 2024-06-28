import { useEffect, useMemo  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFruitData } from '../../../redux/api/productFruitSlice';
import { fetchTapData } from '../../../redux/api/tapDataSlice';
import PropTypes from 'prop-types';

import { Container, Row, Col, Card,Button } from 'react-bootstrap';

//這裡顯示蔬果的商品卡片。功能有：
//抓蔬果的API資料
//拿蔬果的API資料去查tapData的API資料，把兩個資料結合
//並且將符合的商品價格貼在商品卡片上。

function ProductFruitCard({ selectedFruitCategory,  handleAddFruitToCart }) {
  const apiFruithData = useSelector((state) => state.fruitData);
  const tapDataApiData = useSelector((state) => state.tapData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFruitData());
    dispatch(fetchTapData());
  }, [dispatch]);


  const combinedFruitData = useMemo(() => {
    if (apiFruithData.status === 'succeeded' && tapDataApiData.status === 'succeeded') {
      return apiFruithData.data.data.map(fruitItem => {
        const correspondingTapItem = tapDataApiData.data.find(tapItem => 
          tapItem.作物名稱 === fruitItem.name && 
          tapItem.交易日期 === "20240612" && 
          tapItem.市場名稱 === "豐原區");
        return { ...fruitItem, tapData: correspondingTapItem };
      });
    }
    return [];
  }, [apiFruithData, tapDataApiData]);


  const reverseFruitData = combinedFruitData.map((item) => {
    return { ...item, price: item.tapData ? Math.floor(item.tapData.交易金額_元 / item.tapData.交易量_公斤) : 0,};
  })

  const filteredFruitItems = reverseFruitData ? 
  reverseFruitData.filter(item => selectedFruitCategory === null || item.category === selectedFruitCategory) : [];

  return (
    <div>
      <h1>User:</h1>
      {apiFruithData.status === 'loading' && <p>Loading...</p>}
      {apiFruithData.status === 'succeeded' && tapDataApiData.status === 'succeeded' && combinedFruitData && (
        <Container className="p-0 m-0" style={{ width: '960px' }}>
          <Row className="gx-0 align-items-stretch homepageCard-bordered-row">
        {
              filteredFruitItems.map((fruitItem) => (
                <Col key={fruitItem.id} xs={6} md={4} lg={3} className="p-2">
                <Card className="custom-card">
                  <Card.Img variant="top" src={fruitItem.url} className="custom-card-img" alt={fruitItem.name}/>
                  <Card.Body className="custom-card-body">
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
    </div>
  );
}

ProductFruitCard.propTypes = {
  handleAddFruitToCart: PropTypes.func,
  selectedFruitCategory: PropTypes.string,
};
export default ProductFruitCard;