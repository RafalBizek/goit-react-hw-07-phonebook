import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await axios.get(
        'https://64d4a4b5b592423e469468dc.mockapi.io/contacts'
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch contacts');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const response = await axios.post(
        'https://64d4a4b5b592423e469468dc.mockapi.io/contacts',
        contact
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to add contact');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(
        `https://64d4a4b5b592423e469468dc.mockapi.io/contacts/${contactId}`
      );
      return contactId;
    } catch (error) {
      throw new Error('Failed to delete contact');
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;
