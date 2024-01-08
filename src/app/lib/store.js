import {configureStore} from '@reduxjs/toolkit';
import {feedbackReducer} from "./store/feedback/feedbackSlice";

export const store = () => {
  return configureStore({
    reducer: {
      feedback: feedbackReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
  });
};
