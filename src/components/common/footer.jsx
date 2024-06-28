import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import '../../sass/footer.css';
import '../../sass/position.css';

function Footer() {
  return (
  <div className="bg-black">
    <Container className=" text-white p-4">
      <Row>
        {/* 左 */}
        <Col md={6} className="mb-3 mb-md-0">
        <div className="d-flex justify-items-center flex-column gap-5">
          <div>
          <h5>Subscribe Now</h5>
          <h5>Subscribe Now</h5>
          <h5>Subscribe Now</h5>
          <h5>Subscribe Now</h5>
          <Form>
          <div className="d-flex align-items-center gap-1">
            <Form.Group controlId="footerEmailSubscription">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-0">
              Sign up
            </Button>
          </div>
          </Form>
          </div>
          
          <div className="mt-3 d-flex justify-content-between gap-2">
            <div className="d-flex justify-items-center flex-column">
              <p className="text-start">Contact us:</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" className="mt-n1 mb-3">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="white"/>
              </svg>
              <p className="text-start">Phone: 0912345678</p>
            </div>
            <div className="d-flex justify-items-center flex-column">
            <p className="text-start">Text us:</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" className="mt-n1 mb-3">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="white"/>
              </svg>
            <p className="text-start">Phone: 0912345678</p>
            </div>
            <div className="d-flex justify-items-center flex-column">
            <p className="text-start">Email us:</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" className="mt-n1 mb-3">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="white"/>
              </svg>
            <p className="text-start">Phone: 0912345678</p>
            </div>
          </div>
        </div>
        </Col>
        <Col md={1} className="mb-3 mb-md-0"></Col>

        {/* 右 */}
        <Col md={5}>
        <div className="d-flex justify-items-center flex-column gap-4">
          <div>
          {/* 設定左右邊距 */}
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-black text-white border-0 p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" className="">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="white"/>
              </svg>
              <a href="/" className="text-white remove-under-line">Help Center</a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-black text-white border-0 p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" className="">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="white"/>
              </svg>
              <a href="/" className="text-white remove-under-line">Returns</a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-black text-white border-0 p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" className="">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="white"/>
              </svg>
              <a href="/" className="text-white remove-under-line">Order status</a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-black text-white border-0 p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" className="">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="white"/>
              </svg>
              <a href="/" className="text-white remove-under-line">Gift Cards</a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-black text-white border-0 p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" className="">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="white"/>
              </svg>
              <a href="/" className="text-white remove-under-line">Find a store</a>
            </ListGroup.Item>
          </ListGroup>
          </div>
          <div className="mt-3 d-flex justify-content-between gap-2">
          <div className="d-flex justify-items-center flex-column">
              <p className="text-start">Contact us:</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" className="mt-n1 mb-3">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="white"/>
              </svg>
              <p className="text-start">Phone: 0912345678</p>
            </div>
            <div className="d-flex justify-items-center flex-column">
              <p className="text-start">Contact us:</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" className="mt-n1 mb-3">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="white"/>
              </svg>
              <p className="text-start">Phone: 0912345678</p>
            </div>

          </div>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Footer;