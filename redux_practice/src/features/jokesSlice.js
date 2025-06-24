
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchJokes = createAsyncThunk('jokes/fetchjoke', async () => {
  const res = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await res.json();
  return data;
});

const jokeSlice = createSlice({
  name: 'joke',
  initialState: {
    data: null, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJokes.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchJokes.fulfilled, (state, action) => {
        state.status = 'succeeded'; 
        state.data = action.payload;
      })
      .addCase(fetchJokes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default jokeSlice.reducer;
