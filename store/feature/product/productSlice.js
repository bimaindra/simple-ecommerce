import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	loading: false,
	products: [],
	error: '',
};

export const fetchProducts = createAsyncThunk('product/fetchProduct', async () => {
	return await axios.get(`https://fakestoreapi.com/products?sort=desc&limit=12`).then((response) => response.data);
});

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.loading = false;
			state.products = action.payload;
		});
		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.loading = false;
			state.products = [];
			state.error = action.error.message;
		});
	},
});

export default productSlice.reducer;
