import { Container, Image, Button} from 'react-bootstrap';
import '../sass/position.css';
import '../components/case/homePageCard'
import '../sass/homePage.css';
import HomePageCard from '../components/case/homePageCard';

function HomePage() {
  return (
  <div>
    <Container fluid className="position-relative p-0 m-0">
      <div style={{ maxHeight: '720px', overflow: 'hidden', width: '100%' }}> 
        <Image src="../src/assets/home-banner.webp" alt="Home Banner" fluid />
      </div>
      <div className="position-absolute top-20 start-0 ps-5 pt-0 text-white">
        <p className="mb-0 fs-6">Buy what you want</p>
        <h1 className="mb-2 fs-1">oorongtee Store</h1>
        <p className="mb-3 fs-6">Find the best products for your needs</p>
        <Button variant="success" href="/fruit" className="fs-6">Shop Now</Button>
      </div>
    </Container>
    <HomePageCard />

    <Container fluid className="position-relative p-0 m-0">
      <div className="d-flex"> 
      <div style={{ maxHeight: '520px', overflow: 'hidden', width: '100%' }}> 
        <Image src="../src/assets/tea-banner.jpg" alt="Home Banner" fluid />
      </div>
      <div className="position-relative bg-black" style={{ maxHeight: '520px', overflow: 'hidden', width: '100%' }}> 
        <div className="position-absolute top-50 start-50 fs-1 translate-middle text-white d-flex justify-content-center align-items-center flex-column">
          <p className="fs-6 mb-0">Buy what you want</p>
          <h2 className="mb-2 ">oorongtee Store</h2> 
          <p className="fs-6 mb-3">Find the best products for your needs</p> 
          <Button variant="success" href="/fruit">Shop Now</Button> 
      </div>
      </div>
      </div>
    </Container>
    <HomePageCard />


  </div>


  );
}

export default HomePage;