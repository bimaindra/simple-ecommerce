import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const product = {
				...action.payload,
				count: 1,
			};

			// check if product already exist or not
			const index = state.findIndex((x) => x.id === action.payload.id);

			index === -1
				? state.push(product)
				: state.map((item) => (item.id === action.payload.id ? { ...item, count: item.count++ } : null));
		},
		removeProduct: (state, action) => {
			return state.filter((state) => state.id !== action.payload);
		},
		addProductItem: (state, action) => {
			state.map((item) => (item.id === action.payload ? { ...item, count: item.count++ } : null));
		},
		reduceProductItem: (state, action) => {
			state.map((item) => (item.id === action.payload && item.count > 0 ? { ...item, count: item.count-- } : null));
		},
	},
});

export const { addProduct, removeProduct, addProductItem, reduceProductItem } = cartSlice.actions;
export default cartSlice.reducer;
