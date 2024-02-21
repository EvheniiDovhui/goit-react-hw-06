import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.items.push(payload);
      },
      prepare(payload) {
        const id = nanoid();
        return { payload: { id, ...payload } };
      },
    },

    deleteContact(state, { payload }) {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
