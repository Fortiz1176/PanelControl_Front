// src/api/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://randomuser.me/",
  }),
  keepUnusedDataFor: 300, // cache
  endpoints: () => ({}),
});
