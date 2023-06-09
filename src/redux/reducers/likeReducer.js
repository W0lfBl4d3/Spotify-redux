import { createSlice } from "@reduxjs/toolkit";

// Seguendo anche la documentazione, ho deciso di usare gli Slice perche facilitano molto la creazione di Reducers e la gestione dello stato.

export const likeReducer = createSlice({
  name: "liked",
  initialState: {
    likedSongs: [],
  },
  reducers: {
    setLike: (state, action) => {
      state.likedSongs.push(action.payload);
    },
    removeLike: (state, action) => {
      const index = state.likedSongs.indexOf(action.payload);
      if (index !== -1) {
        state.likedSongs.splice(index, 1);
      }
    },
  },
});

export const { setLike, removeLike } = likeReducer.actions;

export default likeReducer.reducer;
