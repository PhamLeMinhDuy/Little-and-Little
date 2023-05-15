import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "../view/view-active/View_active_slice";
import evnent_infoReducer from "../layout/event_info/event_info_slice"
export const store = configureStore({
  reducer: {
    view: viewReducer,
    event_info: evnent_infoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;