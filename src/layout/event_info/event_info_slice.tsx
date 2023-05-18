import { createSlice } from "@reduxjs/toolkit";

interface EventState {
  start_day: string;
  end_day: string;
  location: string;
  price: string;
  name: string;
}

const initialState: EventState = {
    start_day: '',
    end_day: '',
    location: '',
    price: '',
    name:''
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
    setEventName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setEventStartDay,
    setEventEndDay,
    setEventLocation,
    setEventPrice,
    setEventName } = EventSlice.actions;

export default EventSlice.reducer;
