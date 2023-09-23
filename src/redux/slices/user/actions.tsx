import {createAsyncThunk} from '@reduxjs/toolkit';
import {LoginProps, LoginResult} from './types';
import {post} from '../../../services';

export const login = createAsyncThunk<LoginResult, LoginProps>(
  'login',
  async ({username, password}, {rejectWithValue}) => {
    const body = {
      username,
      password,
    };
    try {
      const result = await post('/auth', '', body);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
