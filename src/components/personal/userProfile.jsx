import { fetchPersonalProfileData } from '../../redux/api/personalProfileSlice';
import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col  } from 'react-bootstrap';
import '../../sass/userProfile.css';
import couponIcon from '../../assets/couponIcon.png';

//個人資料頁面
function ProfilePage() {
    const apiProfileData = useSelector((state) => state.profileData);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchPersonalProfileData());
    }, [dispatch]);
    
    return (
      <div className="ProfilePage">
        <Container className="text-white">
          <Row>
        {/* 左 */} 
            <Col md={7} className="mb-3">
            <div className="d-flex justify-items-center align-items-center flex-column profileCard text-dark tk-aktiv-grotesk-thin">
              <img id="profilePicture" src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/51db1f9485915c397954484d590554325cab7621.png" alt="profilePicture"/>
              <div className="d-flex justify-items-center align-items-center flex-column">
                <p className="profileDetail">ID：{apiProfileData.data && apiProfileData.data.data && apiProfileData.data.data[0].userId}</p>
                <h1 id="profileName">{apiProfileData.data && apiProfileData.data.data && apiProfileData.data.data[0].name}</h1>
                <h4 className="profileDetail">Email：{apiProfileData.data && apiProfileData.data.data && apiProfileData.data.data[0].email}</h4>
              </div>
            </div>
            </Col>

        {/* 右 */}
            <Col md={5} className="mb-3">
            <div className="d-flex justify-items-center flex-column gap-4">
              <div className="d-flex justify-items-center flex-column profileCard text-dark tk-aktiv-grotesk-thin">
                <div>
                  <h1 className="profileDetail">Wallet</h1>
                  <div className="profileDetail">Ray Cash：{apiProfileData.data && apiProfileData.data.data && apiProfileData.data.data[0].walletBalance}</div>
                </div>
              </div>      
              <div className="d-flex justify-items-center flex-column text-dark tk-aktiv-grotesk-thin">
                <div>
                {
                  apiProfileData.data && apiProfileData.data.data && apiProfileData.data.data[0].coupons.map((data, index) => (
                    <div key={index} className="profileCard"> 
                      <Row>
                        <Col xs={8} lg={8}>
                          <h2 className="profileDetail">{data.description}</h2>
                        </Col>
                        <Col xs={4} lg={4}>
                        <div>
                          <img src={couponIcon} alt="Coupon Icon" style={{ maxWidth: '80%' }}/>
                        </div>
                        </Col>
                      </Row>
                    <div className="mb-3">
                    <p style={{ marginTop: '1px', marginBottom: '1px', color: 'white', fontFamily: 'tk-aktiv-grotesk-condensed'}}>Discount:{data.discount}</p>
                    <p style={{ marginTop: '1px', marginBottom: '1px', color: 'white', fontFamily: 'tk-aktiv-grotesk-condensed'}}>Amount:{data.amount}</p>
                    <p style={{ marginTop: '1px', marginBottom: '1px', color: 'white', fontFamily: 'tk-aktiv-grotesk-condensed'}}>ExpiryDate:{data.expiryDate}</p>
                    </div>
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
