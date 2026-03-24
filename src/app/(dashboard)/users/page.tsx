"use client";

import { getAllAppDetails } from "@/features/users/usersSlice";
import { Dispatch, GlopalStore } from "@/store/store";
import {
  Box,
  Button,
  Grid,
  Pagination,
  Typography,
  Skeleton,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function AllUsers() {
  const { isError, isLoading, appData } = useSelector(
    (state: GlopalStore) => state.user
  );

  const dispatch = useDispatch<Dispatch>();

  const [page, setPage] = useState(0);
  const limit = 12;

  useEffect(() => {
    dispatch(getAllAppDetails({ limit, skip: page * limit }));
  }, [dispatch, page]);

  const totalPages = Math.ceil((appData?.total || 0) / limit);

  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* USERS GRID */}
      <Grid container spacing={3} sx={{ flex: 1 }}>
        {isLoading &&
          Array.from({ length: 8 }).map((_, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Skeleton
                variant="rounded"
                height={320}
                sx={{ borderRadius: 4 }}
              />
            </Grid>
          ))}

        {appData?.users?.map((u) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={u.id}>
            <Box
              sx={{
                minHeight: "100%",
                bgcolor: "background.paper",
                borderRadius: 4,
                p: 3,
                transition: "0.25s",
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6,
                },
              }}
            >
              {/* Avatar */}
              <Box textAlign="center" mb={2}>
                <Image
                  src={u.image}
                  width={90}
                  height={90}
                  alt={u.firstName}
                  style={{
                    borderRadius: "50%",
                    border: "3px solid #3b82f6",
                  }}
                />

                <Typography mt={1} fontWeight={700}>
                  {u.firstName} {u.lastName}
                </Typography>

                <Box
                  sx={{
                    display: "inline-block",
                    px: 2,
                    py: 0.3,
                    mt: 0.5,
                    borderRadius: 3,
                    fontSize: 12,
                    fontWeight: 600,
                    bgcolor:
                      u.role === "admin"
                        ? "primary.main"
                        : u.role === "moderator"
                        ? "secondary.main"
                        : "grey.500",
                    color: "#fff",
                  }}
                >
                  {u.role}
                </Box>
              </Box>

              {/* Contact */}
              <Typography variant="body2" color="text.secondary">
                {u.email}
              </Typography>

              <Typography variant="body2" color="text.secondary" mb={1}>
                {u.phone}
              </Typography>

              {/* Company */}
              <Typography variant="body2" fontWeight={600}>
                {u.company.name}
              </Typography>

              <Typography variant="body2" color="info.main">
                {u.company.title}
              </Typography>

              {/* Location */}
              <Typography
                variant="caption"
                sx={{ mt: 1, color: "text.secondary" }}
              >
                {u.address.city}, {u.address.country}
              </Typography>

              {/* Button */}
              <Button
                component={Link}
                href={`/users/${u.id}`}
                variant="contained"
                fullWidth
                sx={{
                  mt: "auto",
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                View Profile
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* PAGINATION */}
      <Box
        sx={{
          py: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={totalPages}
          page={page + 1}
          onChange={(e, value) => setPage(value - 1)}
          color="primary"
          size="large"
        />
      </Box>
    </Box>
  );
}