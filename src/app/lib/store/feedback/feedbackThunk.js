import {createAsyncThunk} from "@reduxjs/toolkit";

export const getFeedback = createAsyncThunk(
  'feedback/get',
  async () => {
    const response = await fetch('http://164.92.83.50:8000/reviews/list/reviews/', {
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.json().lentgh === 0) {
      return [];
    }

    return await response.json();
  },
);