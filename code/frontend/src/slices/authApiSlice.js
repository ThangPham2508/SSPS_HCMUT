import { apiSlice } from "./apiSlice";
import { AUTH_URL } from "../constants";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInfo: builder.query({
      query: () => ({
        url: `/session`,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${AUTH_URL}/logout`,
      }),
    }),
  }),
});

export const { useGetInfoQuery, useLogoutMutation } = userApiSlice;
