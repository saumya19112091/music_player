import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "ea78df1ae9mshf30d33d7d3257bdp1d8c52jsnc6a09d8ad746",
//     "X-RapidAPI-Host": "shazam.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ea78df1ae9mshf30d33d7d3257bdp1d8c52jsnc6a09d8ad746"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => {
        return "charts/track?locale=en-US&pageSize=20&startFrom=1";
      },
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
