import { Props } from "@/features/users/usersTypes";
import axios from "axios";
import { Product } from "@/features/Products/productsTypes";
import {
  Box,
  Grid,
  Typography,
  Chip,
  Rating,
  Divider,
  Stack,
  Button,
} from "@mui/material";

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  const product: Product = res.data;

  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <Box p={{ xs: 2, md: 4 }}>
      <Grid container spacing={4}>
        {/* LEFT SIDE — IMAGES */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 4,
              p: 2,
              boxShadow: 3,
            }}
          >
            {/* MAIN IMAGE */}
            <Box
              component="img"
              src={product.thumbnail}
              sx={{
                width: "100%",
                height: 350,
                objectFit: "contain",
                borderRadius: 3,
              }}
            />

            {/* GALLERY */}
            <Stack direction="row" gap={1} mt={2} flexWrap="wrap">
              {product.images.map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  sx={{
                    width: 70,
                    height: 70,
                    objectFit: "cover",
                    borderRadius: 2,
                    border: "2px solid",
                    borderColor: "divider",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* RIGHT SIDE — INFO */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 4,
              p: 3,
              boxShadow: 3,
              height: "100%",
            }}
          >
            {/* TITLE */}
            <Typography variant="h4" fontWeight={800}>
              {product.title}
            </Typography>

            {/* BRAND */}
            <Typography color="text.secondary" mb={1}>
              Brand: {product.brand}
            </Typography>

            {/* RATING */}
            <Stack direction="row" alignItems="center" gap={1} mb={2}>
              <Rating value={product.rating} precision={0.1} readOnly />
              <Typography fontWeight={600}>{product.rating}</Typography>
            </Stack>

            {/* PRICE */}
            <Stack direction="row" alignItems="center" gap={2} mb={2}>
              <Typography variant="h4" color="primary.main" fontWeight={800}>
                ${discountedPrice.toFixed(2)}
              </Typography>

              {product.discountPercentage > 0 && (
                <Typography
                  sx={{
                    textDecoration: "line-through",
                    color: "text.secondary",
                  }}
                >
                  ${product.price}
                </Typography>
              )}

              {product.discountPercentage > 0 && (
                <Chip
                  label={`-${Math.round(product.discountPercentage)}%`}
                  color="error"
                />
              )}
            </Stack>

            {/* STOCK */}
            <Chip
              label={`${product.stock} in stock`}
              color={
                product.stock > 20
                  ? "success"
                  : product.stock > 5
                  ? "warning"
                  : "error"
              }
              sx={{ mb: 2 }}
            />

            {/* DESCRIPTION */}
            <Typography color="text.secondary" mb={3}>
              {product.description}
            </Typography>

            {/* TAGS */}
            <Stack direction="row" gap={1} flexWrap="wrap" mb={3}>
              {product.tags.map((tag, i) => (
                <Chip key={i} label={tag} />
              ))}
            </Stack>

            {/* BUTTON */}
            <Button variant="contained" size="large" fullWidth>
              Add to Cart
            </Button>

            <Divider sx={{ my: 3 }} />

            {/* EXTRA INFO */}
            <Typography fontWeight={700} mb={1}>
              Product Information
            </Typography>

            <Typography variant="body2">
              Category: {product.category}
            </Typography>
            <Typography variant="body2">
              Weight: {product.weight}kg
            </Typography>
            <Typography variant="body2">
              Warranty: {product.warrantyInformation}
            </Typography>
            <Typography variant="body2">
              Shipping: {product.shippingInformation}
            </Typography>
            <Typography variant="body2">
              Return Policy: {product.returnPolicy}
            </Typography>
          </Box>
        </Grid>

        {/* REVIEWS */}
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 4,
              p: 3,
              boxShadow: 3,
            }}
          >
            <Typography variant="h5" fontWeight={800} mb={2}>
              Reviews
            </Typography>

            {product.reviews.map((review, i) => (
              <Box key={i} mb={3}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontWeight={700}>
                    {review.reviewerName}
                  </Typography>
                  <Rating value={review.rating} readOnly size="small" />
                </Stack>

                <Typography color="text.secondary" fontSize={14}>
                  {review.comment}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {new Date(review.date).toLocaleDateString()}
                </Typography>

                <Divider sx={{ mt: 2 }} />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}