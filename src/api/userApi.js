// src/api/userApi.js
import { apiSlice } from "./apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (results = 30) => `api/?results=${results}`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
