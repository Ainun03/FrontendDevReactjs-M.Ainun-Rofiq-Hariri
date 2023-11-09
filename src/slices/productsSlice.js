import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = 'https://www.thecocktaildb.com'

const initialState = {
    products:[],
    isLoading: false,
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
        //   localStorage.removeItem("banner");
          state.bannerPost= {}
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
  
  
  export const { logout } = productsSlice.actions;
  
  export default productsSlice.reducer;