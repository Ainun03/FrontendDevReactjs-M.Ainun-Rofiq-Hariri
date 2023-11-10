import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = 'https://www.thecocktaildb.com'

const detail = JSON.parse(localStorage.getItem('productDetail'))

const initialState = {
    products:[],
    isLoading: false,
    detail:detail ? detail:{}
};

export const getProducts = createAsyncThunk(
    "/api/json/v1/1/search.php?f=b",
    async (payload,thunkAPI) => {
        let url=`${API_URL}/api/json/v1/1/search.php?f=b`
  
        try {
            const resp = await axios.get(url); 
            const { data } = resp;
            return data.drinks;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        toast.dismiss();
        toast.error(message);
        return thunkAPI.rejectWithValue(message)
      }
    }
  );

  export const productsSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      logout: (state) => {
          localStorage.removeItem("productDetail");
          state.bannerPost= {}
      },
      productDetailID:(state,action)=>{
        state.detail=action.payload
        localStorage.setItem('productDetail',JSON.stringify(state.detail))
      },
    },
    extraReducers: (builder) => {
      builder      
        .addCase(getProducts.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getProducts.fulfilled, (state, action) => {
          // state.isAuthenticated = true;
          state.products = action.payload ? action.payload : [];
        })
        .addCase(getProducts.rejected, (state, action) => {
          state.isLoading = false
        //   state.isError = true
          state.message = action.payload
        }) 
      }
  })
  
  
  export const { logout,productDetailID } = productsSlice.actions;
  
  export default productsSlice.reducer;