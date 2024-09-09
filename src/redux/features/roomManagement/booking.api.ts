import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllSlots: builder.query({
    //   query: (query: { roomId?: string; date?: string }) => {
    //     const params = new URLSearchParams();
    //     if (query?.date) {
    //       params.append("date", query?.date);
    //     }
    //     if (query?.roomId) {
    //       params.append("roomId", query?.roomId);
    //     }
    //     return {
    //       url: "/slots/availability",
    //       method: "GET",
    //       params,
    //     };
    //   },
    //   providesTags: ["slots"],
    // }),
    addBooking: builder.mutation({
      query: (data) => {
        return {
          url: "/bookings",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["slots"],
    }),
    // deleteSlot: builder.mutation({
    //   query: (id: string) => {
    //     return {
    //       url: `/slots/delete/${id}`,
    //       method: "DELETE",
    //     };
    //   },
    //   invalidatesTags: ["slots"],
    // }),
    // updateSlot: builder.mutation({
    //   query: (info) => {
    //     console.log(info);
    //     return {
    //       url: `/slots/update/${info?.id}`,
    //       method: "PATCH",
    //       body: info?.updateSlotData,
    //     };
    //   },
    //   invalidatesTags: ["slots"],
    // }),
  }),
});

export const { useAddBookingMutation } = bookingApi;
