import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/login/authLoginContext';

import HeaderPage from './pages/headerPage';
import HomePage from './pages/homePage';
import FruitPage from './pages/fruitPage';
import TeaPage from './pages/teaPage';
// import CartPage from './pages/cartPage';
import PersonalPage from './pages/personalPage';
import LoginPage from './pages/loginPage';
import CheckoutPage from './pages/checkoutPage';
import Footer from './components/common/footer';

import CartShowController from './components/common/cartShowController';

//這頁放 Apiprovider

//背景暗與亮useContext 
//登入狀態


function App() {

  return (
    <AuthProvider>
    <Router>
    <CartShowController />    
      <HeaderPage/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fruit" element={<FruitPage />} /> 
        <Route path="/tea" element={<TeaPage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
        <Route path="/profile" element={<PersonalPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer/>
    </Router>
    </AuthProvider>
  )
}


export default App;
