import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Dodaj import biblioteki axios

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await axios.get(
        'https://64d4a4b5b592423e469468dc.mockapi.io/contacts'
      );
      return response.data; // Użyj response.data, aby uzyskać dane
    } catch (error) {
      throw new Error('Failed to fetch contacts');
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
