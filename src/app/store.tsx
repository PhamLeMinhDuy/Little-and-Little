import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "../view/view-active/View_active_slice";
import evnent_infoReducer from "../layout/event_info/event_info_slice"
import calendarReducer from "../layout/calendar/calendar_slice"
import bookReducer from "../layout/book/book_slice"
export const store = configureStore({
  reducer: {
    view: viewReducer,
    event_info: evnent_infoReducer,
    calendar:calendarReducer,
    book:bookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;