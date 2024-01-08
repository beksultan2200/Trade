import {createSlice} from "@reduxjs/toolkit";
import {getFeedback} from "./feedbackThunk";

const initialState = {
  feedbacks: [],
  getFeedbackLoading: false,
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFeedback.pending, (state) => {
      state.getFeedbackLoading = true;
    });
    builder.addCase(getFeedback.fulfilled, (state, {payload: feedbacks}) => {
      state.getFeedbackLoading = false;
      state.feedbacks = feedbacks;
    });
    builder.addCase(getFeedback.rejected, (state) => {
      state.getFeedbackLoading = false;
    });
  },
});

export const feedbackReducer = feedbackSlice.reducer;
export const selectFeedbacks = (state) => state.feedback.feedbacks;