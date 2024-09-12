import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../sass/homePage.css';

//主頁的商品卡片

function HomePageCard() {
    const sliderRef = useRef(null);
    const scrollLeft = () => {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
    const scrollRight = () => {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };
    return(
    
  <Container fluid className="p-0 m-0">
    <Row>
      <Col sm={8} className="ps-4 pt-2">Trending products</Col>
      <Col sm={4} className="d-flex justify-content-end">
      <Button variant="" onClick={scrollLeft} style={{ border: 'none', backgroundColor: 'transparent' }}>
        <i className="bi bi-arrow-left"></i>
      </Button>
      <Button variant="" onClick={scrollRight} style={{ border: 'none', backgroundColor: 'transparent' }}>
        <i className="bi bi-arrow-right"></i>
      </Button>
      </Col>
    </Row>  

    <Row ref={sliderRef} className="gx-0 align-items-stretch homepageCard-bordered-row">
      <Col xs={6} md={4} lg={3} className="p-2">
        <Link to="/fruit" className="remove-under-line">
            <Card className="custom-card">
            <Card.Img variant="top" src="../src/assets/apple.webp" className="custom-card-img" alt="Apple"/>
            <Card.Body className="custom-card-body">
                <Card.Title>Apple</Card.Title>
            </Card.Body>
            </Card>
        </Link>
      </Col>
      <Col xs={6} md={4} lg={3} className="p-2">
        <Link to="/tea" className="remove-under-line">
            <Card className="custom-card">
            <Card.Img variant="top" src="../src/assets/green-tea.jpg" className="custom-card-img" alt="green-tea"/>
            <Card.Body className="custom-card-body">
                <Card.Title>Green Tea</Card.Title>
            </Card.Body>
            </Card>
        </Link>
      </Col>
      <Col xs={6} md={4} lg={3} className="p-2">
        <Link to="/fruit" className="remove-under-line">
            <Card className="custom-card">
            <Card.Img variant="top" src="../src/assets/banana.webp" className="custom-card-img" alt="banana"/>
            <Card.Body className="custom-card-body">
                <Card.Title>Banana</Card.Title>
            </Card.Body>
            </Card>
        </Link>
      </Col>
      <Col xs={6} md={4} lg={3} className="p-2">
        <Link to="/tea" className="remove-under-line">
            <Card className="custom-card">
            <Card.Img variant="top" src="../src/assets/oorong.jpg" className="custom-card-img" alt="oorong"/>
            <Card.Body className="custom-card-body">
                <Card.Title>Oorong</Card.Title>
            </Card.Body>
            </Card>
        </Link>
      </Col>
      <Col xs={6} md={4} lg={3} className="p-2">
        <Link to="/tea" className="remove-under-line">
            <Card className="custom-card">
            <Card.Img variant="top" src="../src/assets/red-tea.png" className="custom-card-img" alt="red-tea"/>
            <Card.Body className="custom-card-body">
                <Card.Title>Red Tea</Card.Title>
            </Card.Body>
            </Card>
        </Link>
      </Col>
    </Row>
  </Container>
  )
}
export default HomePageCard;