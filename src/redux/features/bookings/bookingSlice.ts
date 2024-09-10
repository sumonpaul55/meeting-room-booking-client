/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TBooking = {
  room: { _id: string | undefined; name: string };
  slots: string[];
  user: string;
  date: any;
  phone: number | undefined;
  address: string | undefined;
  totalAmount: number;
  isConfirmed: string;
  userName: string;
  email: string;
};

export type TInitialState = {
  booking: TBooking[];
};

const initialState: TInitialState = {
  booking: [],
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState: initialState,
  reducers: {
    setBooking: (state, action: PayloadAction<TBooking>) => {
      state.booking.push(action.payload);
    },
    removeBooking: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.booking = state.booking.filter((item) => item.room._id !== action.payload);
    },
  },
});

export const { setBooking, removeBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
