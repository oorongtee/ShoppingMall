import { useContext, useState } from 'react';
import { AuthLoginContext } from '../components/login/authLoginContext';

import { Container, Row, Col } from 'react-bootstrap';

function LoginPage() {
  const { isLoggedIn, setToken } = useContext(AuthLoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
        const responseLogin = await fetch('https://reqres.in/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email, password})
        })
        
        const LoginTokenData = await responseLogin.json()
        

        if (responseLogin.status === 200) {
            const token = LoginTokenData.token;
            setToken(token);

        } else if (responseLogin.status === 400){
            // Handle error here
            console.error('Login failed');
        }
    } catch (error) {
        // Handle error here
        console.error('Login failed', error);
    }
}

  const handleLogout = () => {
    setToken(null);
  };


  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center">

        <div className="d-flex flex-column">
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="mb-2" />
          <p>eve.holt@reqres.in</p>
          
          
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="mb-2" />
          <div className="d-flex justify-content-between">
          <div>{isLoggedIn ? '已登入' : '未登入'}</div>
          <button onClick={isLoggedIn ? handleLogout : handleLogin} className="">
            {isLoggedIn ? '登出' : '登入'}
          </button>
          </div>
        </div>

    </Container>
  );
}

export default LoginPage;