import { Link } from 'react-router-dom';

//LOGO pic
// 購物車與登入與個人頭像

function HeaderPage() {
    return (
      <div className="HeaderPage">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/fruit">Fruit</Link>
          <Link to="/tea">Tea</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    );
}

export default HeaderPage;