import ProductTeaList from '../components/product/tea/productTeaList';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/state/shoppingCartState';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLoginContext } from '../components/login/authLoginContext';

import { Container} from 'react-bootstrap';

function TeaPage() {
  const { isLoggedIn } = useContext(AuthLoginContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const  handleAddTeaToCart = (item) => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    dispatch(addToCart(item));
};

    return (
    <div className="d-flex flex-column align-items-center mx-3">
    <Container>
      <div className="d-flex justify-content-center align-items-center flex-column mb-3">
        <h1 className="tk-aktiv-grotesk">Oorongtee Store</h1>
        <p className="tk-aktiv-grotesk-thin">Find the best products for your needs</p>
      </div>
      <ProductTeaList handleAddTeaToCart={handleAddTeaToCart}/>
    </Container>
    </div>
    );
  }


  export default TeaPage;