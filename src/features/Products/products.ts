import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppProducts, InitialStateTypes } from "./productsTypes";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchProducts = createAsyncThunk<
  AppProducts,
  { limit: number; skip: number; query: string; sortBy: string; order: string }
>("products/fetchProducts", async ({ limit, skip, query, sortBy, order }) => {
  const url =
    query.trim() === ""
      ? `/products?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`
      : `/products/search?q=${query}&limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`;

  const res = await axiosInstance.get<AppProducts>(url);
  return res.data;
});

export const getAllProductsCategories = createAsyncThunk<AppProducts>(
  "products/getAllProductsCategories",
  async () => {
    const res = await axiosInstance.get("/products/categories");
    return res.data;
  },
);

const initialState: InitialStateTypes = {
  isLoding: false,
  isError: false,
  productData: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoding = false;
        state.productData = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoding = false;
        state.isError = true;
      })
      .addCase(getAllProductsCategories.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(getAllProductsCategories.fulfilled, (state, action) => {
        state.isLoding = false;
        state.productData = action.payload;
      })
      .addCase(getAllProductsCategories.rejected, (state) => {
        state.isLoding = false;
        state.isError = true;
      })
  },
});

export default productsSlice.reducer;
