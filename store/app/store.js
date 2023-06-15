import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../feature/product/productSlice';
import cartSlice from '../feature/cart/cartSlice';

const store = configureStore({
	reducer: {
		product: productSlice,
		cart: cartSlice,
	},
});

export default store;
