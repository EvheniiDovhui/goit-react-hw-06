import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setContactsFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const { setContactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export default filtersSlice.reducer;
