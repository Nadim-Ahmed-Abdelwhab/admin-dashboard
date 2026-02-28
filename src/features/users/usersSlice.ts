import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UsersResponse, UserState } from "./usersTypes";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getAllUsers = createAsyncThunk<UsersResponse>(
  "users/getAllUsers",
  async () => {
    const { data } = await axiosInstance.get("/users");
    return data;
  },
);

export const getDashboardUsers = createAsyncThunk<UsersResponse>(
  "users/getDashboardUsers",
  async () => {
    const { data } = await axiosInstance.get("/users?limit=4");
    return data;
  },
);

const initialState: UserState = {
  userData: null,
  dBUserData: null,
  isLoading: false,
  isLoadingDashboard: false,
  isError: false,
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
      .addCase(getDashboardUsers.pending, (state) => {
        state.isLoadingDashboard = true;
      })
      .addCase(getDashboardUsers.fulfilled, (state, action) => {
        state.isLoadingDashboard = false;
        state.dBUserData = action.payload.users;
      })
      .addCase(getDashboardUsers.rejected, (state) => {
        state.isLoadingDashboard = false;
        state.isError = true;
      });
  },
});

export default usersSlice.reducer;
