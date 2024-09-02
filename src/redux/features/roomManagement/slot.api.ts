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
    }),
  }),
});

export const { useGetAllSlotsQuery } = roomApi;
