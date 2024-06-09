import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import HeaderPage from './pages/headerPage';
import HomePage from './pages/homePage/homePage';
import FruitPage from './pages/fruitPage';
import TeaPage from './pages/teaPage';
import CartPage from './pages/cartPage';
import ProfilePage from './pages/profilePage';
import LoginPage from './pages/loginPage';

import store from  "./redux/api/store"; 

//這頁放 Apiprovider

//背景暗與亮useContext 
//登入狀態


function App() {
  return (
    <Router>
      <HeaderPage/>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fruit" element={<FruitPage />} />
        <Route path="/tea" element={<TeaPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      </Provider>
    </Router>
  )
}


export default App;
