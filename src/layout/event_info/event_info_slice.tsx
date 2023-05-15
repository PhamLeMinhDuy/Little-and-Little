import { createSlice } from "@reduxjs/toolkit";

interface EventState {
  start_day: string;
  end_day: string;
  location: string;
  price: string;
}

const initialState: EventState = {
    start_day: '30/05/2021',
    end_day: '01/06/2021',
    location: 'Đầm sen Park',
    price: '25.000',
};

export const EventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEventStartDay: (state, action) => {
      state.start_day = action.payload;
    },
    setEventEndDay: (state, action) => {
        state.end_day = action.payload;
    },
    setEventLocation: (state, action) => {
        state.location = action.payload;
    },
    setEventPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setEventStartDay,
    setEventEndDay,
    setEventLocation,
    setEventPrice } = EventSlice.actions;

export default EventSlice.reducer;
