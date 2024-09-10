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
  },
});

export const { setBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
