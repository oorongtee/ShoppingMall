import { useEffect, useMemo, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeaData } from '../../../redux/api/productTeaSlice';
import PropTypes from 'prop-types';
import '../../../sass/productPage.css'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'; 
import { Container, Row, Col, Card,Button } from 'react-bootstrap';

//這裡顯示蔬果的商品卡片。功能有：
//抓蔬果的API資料
//拿蔬果的API資料去查tapData的API資料，把兩個資料結合
//並且將符合的商品價格貼在商品卡片上。

function ProductTeaCard({ selectedTeaCategory,  handleAddTeaToCart }) {
  const apiTeaData = useSelector((state) => state.teaData);
  const dispatch = useDispatch();
  const scrollContainerRef = useRef(null);

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
      
      {apiTeaData.status === 'loading' && <p className="tk-aktiv-grotesk-thin">Loading...</p>}
      {apiTeaData.status === 'succeeded' && apiTeaData.status === 'succeeded' && (
        <Container className="p-0 m-0 tk-aktiv-grotesk-thin">
          <Row className="gx-0 align-items-stretch homepageCard-bordered-row" ref={scrollContainerRef} style={{ overflowX: 'auto', width: '100%' }}>
            {
              filteredTeaItems.map((teaItem) => (
                <Col key={teaItem.id} xs={6} md={4} lg={3} className="p-2">
                <Card className="custom-product-card">
                  <Card.Img variant="top" src={teaItem.url} className="custom-product-card-img" alt={teaItem.name}/>
                  <Card.Body className="custom-product-card-body">
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
      {apiTeaData.status === 'failed' && <p className="tk-aktiv-grotesk-thin">Error</p>}
    </div>
  );
}

ProductTeaCard.propTypes = {
  handleAddTeaToCart: PropTypes.func,
  selectedTeaCategory: PropTypes.string,
};
export default ProductTeaCard;