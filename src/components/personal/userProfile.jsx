import { fetchPersonalProfileData } from '../../redux/api/personalProfileSlice';
import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col  } from 'react-bootstrap';

import '../../sass/userProfile.css';


function ProfilePage() {

    const apiProfileData = useSelector((state) => state.profileData);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchPersonalProfileData());
    }, [dispatch]);
    
    console.log(apiProfileData);

    return (
      <div className="ProfilePage">

        <Container className=" text-white p-4">
          <Row>
        {/* 左 */}
            <Col md={5} className="mb-3">
            <div className="d-flex justify-items-center flex-column"style={{ backgroundColor: '#ACFFFD' }}>
              <img src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/51db1f9485915c397954484d590554325cab7621.png" alt="profilePicture" style={{ width: '200px', height: '200px' }}/>
              <div>
              <div>ID：{apiProfileData.data && apiProfileData.data.data && apiProfileData.data.data[0].userId}</div>
              <div>姓名：{apiProfileData.data && apiProfileData.data.data && apiProfileData.data.data[0].name}</div>
              <div>電子郵件：{apiProfileData.data && apiProfileData.data.data && apiProfileData.data.data[0].email}</div>
              </div>
            </div>
            </Col>
            <Col md={2} className="mb-3 mb-md-0"></Col>

        {/* 右 */}
            <Col md={5} className="mb-3 mb-md-0">
            <div className="d-flex justify-items-center flex-column gap-4">
              <div className="d-flex justify-items-center flex-column"style={{ backgroundColor: '#ACFFFD' }}>
                <div>
                  <h1>錢包資訊</h1>
                  <div>錢包餘額：{apiProfileData.data && apiProfileData.data.data && apiProfileData.data.data[0].walletBalance}</div>
                </div>
              </div>
              
              <div className="d-flex justify-items-center flex-column">
                <div>
                {
                  apiProfileData.data && apiProfileData.data.data && apiProfileData.data.data[0].coupons.map((data, index) => (
                    <div key={index} className="couponCard">
                    <p>編號：{data.couponId}</p>
                    <p>{data.description}</p>
                    <p>折扣：{data.discount}</p>
                    <p>數量：{data.amount}</p>
                    <p>到期日：{data.expiryDate}</p>
                    </div>
                  ))
                }
                </div>
              </div>
            </div>


            </Col>
          </Row>  
        </Container>
      </div>
    );
  }
  
  export default ProfilePage;
