import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UsersResponse, UserState } from "./usersTypes";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getAllUsers = createAsyncThunk<UsersResponse>(
  "users/getAllUsers",
  async () => {
    const { data } = await axiosInstance.get<UsersResponse>(`/users`);
    return data;
  },
);

export const getAllAppDetails = createAsyncThunk<
  UsersResponse,
  { limit: number; skip: number }
>("users/getAllAppDetails", async ({ limit, skip }) => {
  const { data } = await axiosInstance.get<UsersResponse>(
    `/users?limit=${limit}&skip=${skip}`,
  );
  return data;
});

const initialState: UserState = {
  userData: null,
  isLoading: false,
  isError: false,
  appData: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.users;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      // app details
      .addCase(getAllAppDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAppDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appData = action.payload;
      })
      .addCase(getAllAppDetails.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default usersSlice.reducer;
