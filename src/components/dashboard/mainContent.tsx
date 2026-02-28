"use client";
import { Box, Grid } from "@mui/material";
import { Dispatch, GlopalStore } from "@/store/store";
import  { useEffect } from "react";
import { getDashboardUsers } from '@/features/users/usersSlice';
import { useDispatch, useSelector } from "react-redux";
import DashboardUsers from "../users/DashboardUsers";



export default function MainContent() {
  const dispatch = useDispatch<Dispatch>();
  const { dBUserData, isError, isLoadingDashboard } = useSelector(
    (state: GlopalStore) => state.user,
  );
  useEffect(() => {
    dispatch(getDashboardUsers());
  }, [dispatch]);
  console.log(dBUserData);

  return (
    <>
      <Grid container spacing={2}>
        {dBUserData?.map((u) => {
          return (
            <Grid size={{xs:12 , md:6 , lg:3}} key={u.id}>
              <Box
                sx={{
                  backgroundColor: "#1F2937",
                  color: 'white',
                  borderRadius: "15px",
                  border: "solid 1px #111827",
                  boxShadow: "1px 1px 3px #111827",
                  p: 3,
                  mt: 1,
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <DashboardUsers users = {u} />
              </Box>
            </Grid>
          );
        })}

        <Grid size={{xs:12 , md: 8 }}>
          <Box
            sx={{
              height: '400px',
              borderRadius: "15px",
              p: 1,
              mt: 1,
              backgroundColor: "darkgreen",
            }}
          ></Box>
        </Grid>

        <Grid size={{xs:12 , md: 4 }}>
          <Box
            sx={{
              height: '400px',
              borderRadius: "15px",
              p: 1,
              mt: 1,
              backgroundColor: "darkgreen",
            }}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
}
