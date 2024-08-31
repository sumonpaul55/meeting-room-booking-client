import { baseApi } from "../../api/baseApi";

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRoom: builder.mutation({
      query: (data) => {
        return {
          url: "/rooms",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["rooms"],
    }),
    getAllRooms: builder.query({
      query: () => {
        return {
          url: "/rooms",
          method: "GET",
        };
      },
      providesTags: ["rooms"],
    }),
  }),
});

export const { useGetAllRoomsQuery, useCreateRoomMutation } = roomApi;
