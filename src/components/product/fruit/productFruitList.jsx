import FruitCardPage from './productFruitCard';
import PropTypes from 'prop-types';
import {useState} from 'react';

function SearchPage({time, location, itemName, setTime, setLocation, onSubmit}){  
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };


  const handleItemClick = (itemName) => {
    onSubmit(itemName);
};


  return(
<div className="SearchPage">
    <header className="bg-sky-800 text-white">
    <div className="px-6 py-3 flex flex-col md:flex-row justify-between text-center container mx-auto">
      <div>
        <a href="https://www.ubereats.com/tw/" className="text-2xl font-bold text-emerald-300">Uber eat 真棒!!!</a>
      </div>
      <div className="flex flex-col md:flex-row">
      </div>
    </div>
    </header>

    <select onChange={(e) => handleCategorySelect(e.target.value)}>
    <option value="">All</option>
    <option value="vegetable">蔬菜</option>
    <option value="fruit">水果</option>
    {/* Add more options as needed */}
    </select>

    <input type="text" placeholder="輸入時間" value={time} onChange={(e) => setTime(e.target.value)} />
    <input type="text" placeholder="輸入地區" value={location} onChange={(e) => setLocation(e.target.value)} />
    <FruitCardPage itemName={itemName} handleItemClick={handleItemClick} selectedCategory={selectedCategory}/>
</div>
  )
}
SearchPage.propTypes = {
  itemName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
};
export default SearchPage;