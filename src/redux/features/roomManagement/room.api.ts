import { baseApi } from "../../api/baseApi";

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRooms: builder.query({
      query: () => {
        return {
          url: "/rooms",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllRoomsQuery } = roomApi;
