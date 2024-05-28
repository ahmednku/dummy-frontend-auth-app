import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    verifyOtp: builder.mutation({
      query: ({ email, otp }) => ({
        url: "auth/verify-otp",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { email, otp },
      }),
    }),
    register: builder.mutation({
      query: ({ fullname, email, password }) => ({
        url: "auth/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { fullname, email, password },
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { email, password },
      }),
    }),
    // Add more endpoints here
  }),
});

export const { useVerifyOtpMutation, useRegisterMutation, useLoginMutation } =
  api;
