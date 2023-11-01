const initialState = {
  items: [],
};

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];

const cartReducer = (state = { ...initialState, items: cartFromLocalStorage }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCart = [...state.items, action.payload];

      localStorage.setItem('cart', JSON.stringify(updatedCart));

      return {
        ...state,
        items: updatedCart,
      };
    default:
      return state;
  }
};

export default cartReducer;
