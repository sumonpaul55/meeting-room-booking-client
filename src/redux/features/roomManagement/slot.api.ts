import { baseApi } from "../../api/baseApi";

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlots: builder.query({
      query: (query: { roomId?: string; date?: string }) => {
        const params = new URLSearchParams();
        if (query?.date) {
          params.append("date", query?.date);
        }
        if (query?.roomId) {
          params.append("roomId", query?.roomId);
        }
        return {
          url: "/slots/availability",
          method: "GET",
          params,
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
