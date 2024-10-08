import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:5000/api",
  baseUrl: "https://room-booking-server2.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set(`authorization`, `Berrer ${token}`);
    }
    return headers;
  },
});

// const BaseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.status === 401) {
//     // sending refresh token
//     const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
//       method: "POST",
//       credentials: "include",
//     });

//     const data = await res.json();
//     // refresh token valid
//     if (data?.data?.accessToken) {
//       // set the accesstoken in exsiting user using api dispatch {signa, getState, dispatch} = api
//       const user = (api.getState() as RootState).auth.user;
//       api.dispatch(
//         setUser({
//           user,
//           token: data?.data?.accessToken,
//         })
//       );
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logOut());
//     }
//   }
//   return result;
// };

export const baseApi = createApi({
  reducerPath: "baseApi",
  // baseQuery: BaseQueryWithRefreshToken,
  baseQuery: baseQuery,
  tagTypes: ["rooms", "slots", "user", "bookings"],
  endpoints: () => ({}),
});
