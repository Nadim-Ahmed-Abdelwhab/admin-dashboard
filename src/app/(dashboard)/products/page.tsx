"use client";
import { fetchProducts } from "@/features/Products/products";
import { Dispatch, GlopalStore } from "@/store/store";
import {
  Box,
  Grid,
  Pagination,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const dispatch = useDispatch<Dispatch>();

  const { productData } = useSelector((state: GlopalStore) => state.products);

  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const limit = 12;
  const totalPages = Math.ceil((productData?.total || 0) / limit);
  const [sortBy, setSortBy] = useState("price");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(
        fetchProducts({ limit, skip: page * limit, query, sortBy, order }),
      );
    }, 400);

    return () => clearTimeout(timer);
  }, [dispatch, page, query, sortBy, order]);

  return (
    <Box display="flex" flexDirection="column" minHeight="100%">
      <Grid container spacing={3} flex={1}>

        
        <Grid size={{ xs: 12, sm: 8, md: 8, lg: 8 }}>
          <Box mb={3}>
            <TextField
              fullWidth
              placeholder="Search products..."
              value={query}
              onChange={(e) => {
                setPage(0);
                setQuery(e.target.value);
              }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
          <Box display="flex" gap={2} mb={3}>
            <TextField
              select
              label="Sort By"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="title">Name</option>
            </TextField>

            <TextField
              select
              label="Order"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </TextField>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={3} flex={1}>
        {productData?.products?.map((p) => (
          <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: 3,
              }}
            >
              <Box
                component="img"
                src={p.thumbnail}
                sx={{ width: "100%", height: 180, objectFit: "cover" }}
              />

              <Box p={2}>
                <Typography fontWeight={700}>{p.title}</Typography>
                <Typography color="text.secondary" variant="body2">
                  {p.category}
                </Typography>

                <Typography mt={1} color="primary.main" fontWeight={700}>
                  ${p.price}
                </Typography>

                <Button
                  href={`/products/${p.id}`}
                  variant="contained"
                  fullWidth
                  
                  sx={{
                    mt: "auto",
                    borderRadius: 3,
                    textTransform: "none",
                    fontWeight: 700,
                    my:1 
                  }}
                >
                  View Product
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" py={3}>
        <Pagination
          count={totalPages}
          page={page + 1}
          onChange={(e, value) => setPage(value - 1)}
          color="primary"
        />
      </Box>
    </Box>
  );
}
