import { useContext, useState } from 'react';
import { AuthLoginContext } from '../components/login/authLoginContext';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  //請參考：src/components/login/authLoginContext.jsx，這裡的setToken是從AuthLoginContext拿來的
  const {setToken} = useContext(AuthLoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //登入失敗
  const [errorMessage, setErrorMessage] = useState('');

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
        //接受api host回傳response
        if (responseLogin.status === 200) {
            const token = LoginTokenData.token;
            setToken(token);
            setTimeout(() => {
              navigate('/');
            }, 300); 

        } else if (responseLogin.status === 400){
            setErrorMessage('無法登入400');
        }
    } catch (error) {
        setErrorMessage('無法登入error');
    }
  }

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center">

        <div className="d-flex flex-column tk-aktiv-grotesk-thin">
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="mb-2" required
            pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"/>
          <p>eve.holt@reqres.in</p>
          
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="mb-2" required/>
          
          <div className="d-flex justify-content-between">
            <div>
            {errorMessage && <div>{errorMessage}</div>}
            </div>

            <div className="">
              <Button variant="outline-success" className="rounded-pill text-black" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </div>
        </div>

    </Container>
  );
}

export default LoginPage;