import { Users } from "@/features/users/usersTypes";
import { Box, Typography, Button, Chip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function DashboardUsers({ users }: { users: Users }) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderRadius: 4,
        p: 3,
        textAlign: "center",
        boxShadow: 3,
        transition: "all 0.25s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Avatar */}
      <Box
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            border: 3,
            borderColor: "primary.main",
            p: 0.5,
            display: "inline-flex",
          }}
        >
          <Image
            src={users.image}
            width={100}
            height={100}
            alt={users.firstName}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      {/* Name */}
      <Typography variant="h6" fontWeight={700}>
        {users.firstName} {users.lastName}
      </Typography>

      {/* Role */}
      <Box mt={1} mb={1.5}>
        <Chip
          label={users.role}
          color={
            users.role === "admin"
              ? "primary"
              : users.role === "moderator"
              ? "secondary"
              : "default"
          }
          size="small"
          sx={{ fontWeight: 600 }}
        />
      </Box>

      {/* Company */}
      <Typography variant="body2" color="text.secondary">
        {users.company.title}
      </Typography>

      <Typography variant="caption" color="text.secondary">
        {users.company.name}
      </Typography>

      {/* Location */}
      <Typography
        variant="caption"
        display="block"
        sx={{ mt: 1 }}
        color="text.secondary"
      >
        {users.address.city}, {users.address.country}
      </Typography>

      {/* Button */}
      <Button
        component={Link}
        href={`/users/${users.id}`}
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
      >
        View Profile
      </Button>
    </Box>
  );
}