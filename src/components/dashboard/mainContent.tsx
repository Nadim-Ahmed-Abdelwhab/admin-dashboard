"use client";
import { Box, Grid, Typography } from "@mui/material";
import { Dispatch, GlopalStore } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersCharts from "./usersCharts";
import PieCharts from "./pieCharts";
import { getAllAppDetails } from "@/features/users/usersSlice";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { getAllProducts } from "@/features/Products/products";
export default function MainContent() {
  const dispatch = useDispatch<Dispatch>();
  const { isLoading , isError, appData } = useSelector((state: GlopalStore) => state.user);
  const { productData } = useSelector((state: GlopalStore) => state.products);

  useEffect(() => {
    dispatch(getAllAppDetails({limit : 0 , skip : 0}));
  }, [dispatch]);
  console.log(appData);
  useEffect(() => {
    dispatch(getAllProducts({limit : 0 , skip : 0}));
  }, [dispatch]);
  console.log(appData);

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }} my={2}>

          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 4,
              p: 3,
              boxShadow: 3,
              transition: "all 0.25s ease",
              position: "relative",
              overflow: "hidden",

              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6,
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 3,
                p: 1,
              }}
            >
              <PeopleAltIcon />
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Total Users
            </Typography>

            <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
              {appData?.total ?? 0}
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: "success.main",
                fontWeight: 600,
              }}
            >
              +12% this month
            </Typography>

            <Typography
              variant="caption"
              display="block"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Based on last update
            </Typography>
          </Box>

        </Grid>


        <Grid size={{ xs: 12, md: 6, lg: 3 }} my={2}>

          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 4,
              p: 3,
              boxShadow: 3,
              transition: "all 0.25s ease",
              position: "relative",
              overflow: "hidden",

              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6,
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 3,
                p: 1,
              }}
            >
              <PeopleAltIcon />
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Total products
            </Typography>

            <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
              {productData?.total ?? 0}
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: "success.main",
                fontWeight: 600,
              }}
            >
              +12% this month
            </Typography>

            <Typography
              variant="caption"
              display="block"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Based on last update
            </Typography>
          </Box>

        </Grid>


        <Grid size={{ xs: 12, md: 6, lg: 3 }} my={2}>

          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 4,
              p: 3,
              boxShadow: 3,
              transition: "all 0.25s ease",
              position: "relative",
              overflow: "hidden",

              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6,
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 3,
                p: 1,
              }}
            >
              <PeopleAltIcon />
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Total Orders
            </Typography>

            <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
              {appData?.total ?? 0}
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: "success.main",
                fontWeight: 600,
              }}
            >
              +12% this month
            </Typography>

            <Typography
              variant="caption"
              display="block"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Based on last update
            </Typography>
          </Box>

        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }} my={2}>

          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 4,
              p: 3,
              boxShadow: 3,
              transition: "all 0.25s ease",
              position: "relative",
              overflow: "hidden",

              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6,
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 3,
                p: 1,
              }}
            >
              <PeopleAltIcon />
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Revenue
            </Typography>

            <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
              {appData?.total ?? 0}
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: "success.main",
                fontWeight: 600,
              }}
            >
              +12% this month
            </Typography>

            <Typography
              variant="caption"
              display="block"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Based on last update
            </Typography>
          </Box>


        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              height: "400px",
              borderRadius: "15px",
              p: 1,
              my: 1,
              backgroundColor: "background.paper",
            }}
          >
            <UsersCharts />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              height: "400px",
              borderRadius: "15px",
              p: 1,
              mt: 1,
              backgroundColor: "background.paper",
            }}
          >
            <PieCharts />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
