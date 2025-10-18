import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true, // By default, this is included
    }),
});

export default store;
