'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountData } from '../interfaces/account';

interface AccountState {
  value: AccountData | null;
}

const initialState: AccountState = {
  value: null
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<AccountData | null>) => {
      state.value = action.payload;
    }
  }
});

export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
