import ProductTeaCard from './productTeaCard';
import PropTypes from 'prop-types';
import {useState} from 'react';
import '../../../sass/productPage.css';

import {Tabs,Tab } from 'react-bootstrap';

//這裡控制蔬果的商品卡片。功能有：
//蔬果商品分類選擇
//控制商品加入購物車的按鈕，傳itemName到購物車去

function ProductTeaList({  handleAddTeaToCart }){  
  const [selectedTeaCategory, setSelectedTeaCategory] = useState(null);

  const handleTeaCategorySelect = (category) => {
    if (category === 'all') {
      setSelectedTeaCategory(null);
      return;
    }
    setSelectedTeaCategory(category);
  };


  return(
  <div className="SearchPage ">

    <Tabs onSelect={handleTeaCategorySelect} defaultActiveKey="all" className="categorySelectTabs" fill justify>
      <Tab eventKey="all" title="all"></Tab>
      <Tab eventKey="tea" title="tea"></Tab>
      <Tab eventKey="milkTea" title="milkTea"></Tab>
      <Tab eventKey="" title="" disabled></Tab>
    </Tabs>

    <ProductTeaCard handleAddTeaToCart={handleAddTeaToCart} selectedTeaCategory={selectedTeaCategory}/>
  </div>
  )
}
ProductTeaList.propTypes = {
    handleAddTeaToCart: PropTypes.func,
};
export default ProductTeaList;