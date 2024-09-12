import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import '../sass/footer.css';
import '../sass/position.css';

function Footer() {
  return (
  <div className="bg-black">
    <Container className="text-white p-5">
      <Row>
        <Col xs={7} lg={7} className="mb-3 tk-aktiv-grotesk-condensed">
            <h1 className="">Subscribe Now</h1>
            <h5 className="">Stay up to date and receive 20% off when you sign up today</h5>
          <Form>
            <div className="d-flex align-items-center gap-1">
              <Form.Group>
                <Form.Control type="email" placeholder="Email" className=""/>
              </Form.Group>
              <Button variant="" type="submit" className="mt-0 bg-white" >
                Sign up
              </Button>
            </div> 
          </Form>
        </Col>
        <Col xs={1} lg={1}></Col>
        <Col xs={4} lg={4} className="mb-3">
        <div className="d-flex justify-items-center flex-column gap-4 tk-aktiv-grotesk-condensed">
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
        </Col>
      </Row>
    </Container>
    <Container className="text-white p-5">
      <Row>
        <Col xs={7} lg={7} className="mb-3 mb-md-0 tk-aktiv-grotesk-condensed">
        <div className="mt-3 d-flex justify-content-between gap-2">
            <div className="d-flex justify-items-center flex-column">
              <p className="text-start">Call us:</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" className="mt-n1 mb-3">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="white"/>
              </svg>
              <p className="text-start">Phone: 0912345678</p>
              <p className="text-start">Mon-Fri 8am-5pm PST</p>
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
            <p className="text-start">ray68125@gmail.com</p>
            <p className="text-start">Usually reply within</p>
            <p className="text-start">24hrs</p>
            </div>
          </div>
        </Col>
        <Col xs={1} lg={1}></Col>
        <Col xs={4} lg={4} className="mb-3 mb-md-0 tk-aktiv-grotesk-condensed">
        <div className="mt-3 d-flex justify-content-between gap-2">
          <div className="d-flex justify-items-center flex-column">
              <p className="text-start">Social</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" className="mt-n1 mb-3">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="white"/>
              </svg>
              <p className="text-start">Instagram</p>
              <p className="text-start">Tik Tok</p>
              <p className="text-start">Facebook</p>
          </div>
          <div className="d-flex justify-items-center flex-column">
              <p className="text-start">Company</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" className="mt-n1 mb-3">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="white"/>
              </svg>
              <p className="text-start">rrayxxz</p>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Footer;