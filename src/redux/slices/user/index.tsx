// Import the createSlice API from Redux Toolkit
import {createSlice} from '@reduxjs/toolkit';
import {IUser} from './types';
import {login} from './actions';
import Toast from '../../../components/molecules/Toast';

// This is the initial state of the slice
const initialState: IUser = {
  favorites: [],
  cart: [],
  location: {},
  name: 'Kaan',
  loading: false,
  error: '',
  token: '',
  language: 'en',
};

export const userSlices = createSlice({
  name: 'user', // This is the name of the slice, we will later use this name to access the slice from the store
  initialState: initialState, // This is the initial state of the slice
  reducers: {
    // This is the reducer function, it will be called when we dispatch the action later
    changeName: (state, action) => {
      // This is the action object we will pass when we dispatch the action
      state.name = action.payload; // This is the payload we will pass when we dispatch the action
    },
    handleFavorite: (state, action) => {
      const index = state.favorites.findIndex(
        favorite => favorite.id === action.payload.id,
      );
      if (index === -1) {
        state.favorites.unshift(action.payload);
        Toast.open({
          type: 'success',
          title: 'Product added to favorites!',
        });
      } else {
        state.favorites.splice(index, 1);
        Toast.open({
          type: 'success',
          title: 'Product removed from favorites!',
        });
      }
    },
    addCart: (state, action) => {
      const index = state.cart.findIndex(
        cart => cart.product.id === action.payload.id,
      );
      if (index === -1) {
        state.cart.unshift({
          product: action.payload,
          quantity: 1,
        });
        Toast.open({
          type: 'success',
          title: 'Product added to cart!',
        });
      } else {
        state.cart[index].quantity += 1;
        Toast.open({
          type: 'success',
          title: 'Product quantity increased!',
        });
      }
    },
    removeCart: (state, action) => {
      const index = state.cart.findIndex(
        cart => cart.product.id === action.payload.id,
      );
      if (index !== -1 && state.cart[index].quantity === 1) {
        state.cart.splice(index, 1);
        Toast.open({
          type: 'success',
          title: 'Product removed from cart!',
        });
      } else {
        state.cart[index].quantity -= 1;
        Toast.open({
          type: 'success',
          title: 'Product quantity decreased!',
        });
      }
    },
    deleteCart: (state, action) => {
      const index = state.cart.findIndex(
        cart => cart.product.id === action.payload.id,
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
        Toast.open({
          type: 'success',
          title: 'Product removed from cart!',
        });
      }
    },
    saveLocation: (state, action) => {
      state.location = action.payload;
      Toast.open({
        type: 'success',
        title: 'Location saved!',
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.name = action.payload.name;
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || '';
    });
  },
});

export const selectUser = (state: any): IUser => state.user;

// Action creators are generated for each case reducer function
export const {
  changeName,
  handleFavorite,
  addCart,
  removeCart,
  deleteCart,
  saveLocation,
} = userSlices.actions;

// We export the reducer function so that it can be added to the store
export default userSlices.reducer;
