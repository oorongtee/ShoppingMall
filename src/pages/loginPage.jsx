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
//這個api host不服務了，但我懶得改，所以直接給用戶登入
  // const handleLogin = async () => {
  //   try {
  //       const responseLogin = await fetch('https://reqres.in/api/login', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //             email, password})
  //       })
  //       const LoginTokenData = await responseLogin.json()
  //       //接受api host回傳response
  //       if (responseLogin.status === 200) {
  //           const token = LoginTokenData.token;
  //           setToken(token);
  //           setTimeout(() => {
  //             navigate('/');
  //           }, 300); 

  //       } else if (responseLogin.status === 400){
  //           setErrorMessage('無法登入400');
  //       }
  //   } catch (error) {
  //       setErrorMessage('無法登入error');
  //   }
  // }
const handleLogin = async () => {
  try {
    const token = 'FAKE-TOKEN-123456';
    setToken(token);

    // 導向首頁
    setTimeout(() => {
      navigate('/');
    }, 300);

  } catch (error) {
    // 如果 fetch 發生錯誤（API 不回應、網路錯誤）
    const token = 'FAKE-TOKEN-123456';
    setToken(token);

    // 可以選擇不顯示錯誤，或在 console 記錄
    console.error('API 不回應，使用假 token 登入', error);

    // 導向首頁
    setTimeout(() => {
      navigate('/');
    }, 300);
  }
};



  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center">

        <div className="d-flex flex-column tk-aktiv-grotesk-thin">
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="mb-2" required
            pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"/>
          <p>毋須帳密，直接登入即可</p>
          
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