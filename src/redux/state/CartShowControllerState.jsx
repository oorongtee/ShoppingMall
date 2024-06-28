const TOGGLE_CART_SHOW = 'TOGGLE_CART_SHOW';
const TOGGLE_CART_NOTSHOW = 'TOGGLE_CART_NOTSHOW';

export const toggleCartShow = () => ({
    type: TOGGLE_CART_SHOW,
  });

export const toggleCartNotShow= () => ({
    type: TOGGLE_CART_NOTSHOW,
});

const initialState = {
  cartTag: null
};

const cartShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_SHOW:
      return {
        ...state,
        cartTag: "show"
      };
    case TOGGLE_CART_NOTSHOW:
      return {
        ...state,
        cartTag: null
      };
    default:
      return state;
  }
};



export default cartShowReducer;