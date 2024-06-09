import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFruitData } from '../../../redux/api/productFruitSlice';
import PropTypes from 'prop-types';


function FruitCardPage({ selectedCategory, handleItemClick, itemName }) {
  const apiFruithData = useSelector((state) => state.fruitData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFruitData());
  }, [dispatch]);

  const filteredItems = apiFruithData.data && apiFruithData.data.data 
    ? apiFruithData.data.data.filter(item => selectedCategory === null || item.category === selectedCategory)
    : [];
    
  return (
    <div>
      <h1>User:
      </h1>
      {apiFruithData.status === 'loading' && <p>Loading...</p>}
      {apiFruithData.status === 'succeeded' && apiFruithData.data.data && (
        <ul>
          {
          filteredItems
          .map((item) => (
            <li key={item.id}>{item.name}{item.description}
            <button value={itemName} onClick={() => handleItemClick(item.name)}>Click me</button>
            </li>
          ))
          }
        </ul>
      )}
      
    </div>
  );
}

FruitCardPage.propTypes = {
  itemName: PropTypes.string.isRequired,
  handleItemClick: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string,
};
export default FruitCardPage;