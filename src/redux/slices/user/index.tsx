// Import the createSlice API from Redux Toolkit
import {createSlice} from '@reduxjs/toolkit';
import {IUser} from './types';
import {login} from './actions';

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
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }
    },
    addCart: (state, action) => {
      const index = state.cart.findIndex(
        cart => cart.product.id === action.payload.id,
      );
      if (index === -1) {
        state.cart.push({
          product: action.payload,
          quantity: 1,
        });
      } else {
        state.cart[index].quantity += 1;
      }
    },
    removeCart: (state, action) => {
      const index = state.cart.findIndex(
        cart => cart.product.id === action.payload.id,
      );
      if (index !== -1 && state.cart[index].quantity === 1) {
        state.cart.splice(index, 1);
      } else {
        state.cart[index].quantity -= 1;
      }
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
export const {changeName, handleFavorite, addCart, removeCart} =
  userSlices.actions;

// We export the reducer function so that it can be added to the store
export default userSlices.reducer;
