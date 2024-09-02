import { baseApi } from "../../api/baseApi";

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlots: builder.query({
      query: () => {
        return {
          url: "/slots/availability",
          method: "GET",
        };
      },
      providesTags: ["slots"],
    }),
    createSlots: builder.mutation({
      query: (data) => {
        return {
          url: "/slots",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["slots"],
    }),
  }),
});

export const { useGetAllSlotsQuery, useCreateSlotsMutation } = roomApi;
