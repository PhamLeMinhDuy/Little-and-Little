import { createSlice } from "@reduxjs/toolkit";

interface ViewState {
  selected: string;
}

const initialState: ViewState = {
  selected: "Home",
};

export const ViewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    selectView: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { selectView } = ViewSlice.actions;

export default ViewSlice.reducer;
