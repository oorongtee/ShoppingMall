import { useEffect, useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeaData } from '../../../redux/api/productTeaSlice';
import PropTypes from 'prop-types';

import { Container, Row, Col, Card,Button } from 'react-bootstrap';

//這裡顯示蔬果的商品卡片。功能有：
//抓蔬果的API資料
//拿蔬果的API資料去查tapData的API資料，把兩個資料結合
//並且將符合的商品價格貼在商品卡片上。

function ProductTeaCard({ selectedTeaCategory,  handleAddTeaToCart }) {
  const apiTeaData = useSelector((state) => state.teaData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeaData());
  }, [dispatch]);

  const combinedTeaData = useMemo(() => {
    if (apiTeaData.status === 'succeeded') {
      return apiTeaData.data.data.map(teaItem => {
        const correspondingTeaItem = {}
        return { ...teaItem, correspondingTeaItem};
      });
    }
    return [];
  }, [apiTeaData])

  const filteredTeaItems = combinedTeaData ? 
    combinedTeaData.filter(item => selectedTeaCategory === null || item.category === selectedTeaCategory) : [];
  
  return (
    <div>
      <h1>User:</h1>
      {apiTeaData.status === 'loading' && <p>Loading...</p>}
      {apiTeaData.status === 'succeeded' && apiTeaData.status === 'succeeded' && (
        <Container className="p-0 m-0" style={{ width: '960px' }}>
          <Row className="gx-0 align-items-stretch homepageCard-bordered-row">
            {
              filteredTeaItems.map((teaItem) => (
                <Col key={teaItem.id} xs={6} md={4} lg={3} className="p-2">
                <Card className="custom-card">
                  <Card.Img variant="top" src={teaItem.url} className="custom-card-img" alt={teaItem.name}/>
                  <Card.Body className="custom-card-body">
                    <Card.Title>{teaItem.name}</Card.Title>
                    <Card.Text>{teaItem.description}</Card.Text>
                    <Card.Text>${teaItem.price}</Card.Text>
                    <Button variant="primary" onClick={() => handleAddTeaToCart(teaItem)}>Add to Cart</Button>
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

ProductTeaCard.propTypes = {
  handleAddTeaToCart: PropTypes.func,
  selectedTeaCategory: PropTypes.string,
};
export default ProductTeaCard;