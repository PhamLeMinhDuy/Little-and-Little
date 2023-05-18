import { createSlice } from "@reduxjs/toolkit";

interface BookState {
  book_info: string[];
}

const initialCalState: BookState = {
    book_info: [],
};

export const BookSlice = createSlice({
  name: "Book",
  initialState:initialCalState,
  reducers: {
    setBookInfo: (state, action) => {
      state.book_info = action.payload;
    }
  },
});

export const { setBookInfo } = BookSlice.actions;

export default BookSlice.reducer;