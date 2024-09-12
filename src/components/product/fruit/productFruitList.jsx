import ProductFruitCard from './productFruitCard';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {Tabs,Tab } from 'react-bootstrap';

//這裡控制蔬果的商品卡片。功能有：
//蔬果商品分類選擇
//控制商品加入購物車的按鈕，傳itemName到購物車去

//handleAddFruitToCart是從fruitPage傳到productFruitListCard的加入購物車按鈕
function ProductFruitList({handleAddFruitToCart}){  
  const [selectedFruitCategory, setSelectedFruitCategory] = useState(null);

  const handleFruitCategorySelect = (category) => {
    if (category === 'all') {
      setSelectedFruitCategory(null);
      return;
    }
    setSelectedFruitCategory(category);
  };

  return(
    <div className="SearchPage">
    <Tabs onSelect={handleFruitCategorySelect} defaultActiveKey="all" className="categorySelectTabs" fill justify>
      <Tab eventKey="all" title="all"></Tab>
      <Tab eventKey="vegetable" title="vegetable"></Tab>
      <Tab eventKey="fruit" title="fruit"></Tab>
      <Tab eventKey="" title="" disabled></Tab>
    </Tabs>
    <ProductFruitCard  handleAddFruitToCart={ handleAddFruitToCart} selectedFruitCategory={selectedFruitCategory}/>
    </div>
  
  )
}
ProductFruitList.propTypes = {
  handleAddFruitToCart: PropTypes.func,
};
export default ProductFruitList;