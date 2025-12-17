/* //1.Archivo global para la api usando RTK
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiSlice', //nombre que tendra en el store
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),  //la base de todas las rutas
  endpoints: () => ({}), //los endpoints se agregan despues
}); */

/*En este archvivo se define la base para de RTKQ para hacer peticiones al back y
define los headers con las credenciales de autenticación*/

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { VITE_API_URL, VITE_ORIGIN_URL } = import.meta.env;

const baseQuery = fetchBaseQuery({
  //define la raiz de las rutas, en este caso el back para los apiSlice en cada carpeta
  baseUrl: VITE_API_URL /* "http://localhost:3003" */, //cambia
  credentials: "include",
  prepareHeaders: async (headers, { getState }) => {
    try {
      /* headers.set("api-key", VITE_API_KEY); */

      const res =
        (await getState()?.auth) || JSON.parse(localStorage.getItem("token"));

      if (res?.token || JSON.parse(localStorage.getItem("token"))) {
        headers.set(
          "authorization",
          `${res.token}` || JSON.parse(localStorage.getItem("token"))
        );
      }

      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      headers.set("User-Agent", "AdryoXperience");
      headers.set("Origin", VITE_ORIGIN_URL);

      return headers;
    } catch (err) {
      console.log("Error", err);

      return headers;
    }
  },
});

export const apiSlice = createApi({
  baseQuery,
  keepUnusedDataFor: 1,
  tagTypes: ["tickets", "users", "teams", "incidentTypes", "interactions"],
  endpoints: (builder) => ({}),
});
