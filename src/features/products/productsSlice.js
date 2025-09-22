import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//its a promise function which have three state: rejected, fullfill, pending
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({page=1, limit=10}) => {

    const offset = (page-1)*limit;

    console.log(page, limit, offset);

    const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${offset}`);
    return res.data; // returns { products: [...], total, skip, limit }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    total: 0,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products;
        state.total = action.payload.total;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
