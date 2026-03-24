import { Props, Users } from "@/features/users/usersTypes";
import axios from "axios";
import Grid from "@mui/material/Grid";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Divider,
  Chip,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

export default async function UserDetails({ params }: Props) {
  const { id } = await params;
  const res = await axios.get(`https://dummyjson.com/users/${id}`);
  const userDetails: Users = res.data;
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Grid container spacing={4}>
        {/* LEFT PROFILE CARD */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              borderRadius: 4,
              textAlign: "center",
              p: 3,
              boxShadow: 3,
            }}
          >
            <Avatar
              src={userDetails.image}
              sx={{
                width: 130,
                height: 130,
                mx: "auto",
                mb: 2,
                boxShadow: 2,
              }}
            />

            <Typography variant="h5" fontWeight={700}>
              {userDetails.firstName} {userDetails.lastName}
            </Typography>

            <Typography color="text.secondary" mb={2}>
              @{userDetails.username}
            </Typography>

            <Chip
              label={userDetails.role.toUpperCase()}
              color={userDetails.role === "admin" ? "primary" : "default"}
              sx={{ fontWeight: 600 }}
            />
          </Card>
        </Grid>

        {/* RIGHT DETAILS CARD */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card sx={{  p: 3 }}>
            <CardContent>
              {/* Contact */}
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Contact Information
              </Typography>

              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <EmailIcon color="primary" />
                <Typography>{userDetails.email}</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={2} mb={3}>
                <PhoneIcon color="primary" />
                <Typography>{userDetails.phone}</Typography>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Address */}
              <Typography variant="h6" mb={2}>
                Address
              </Typography>

              <Box display="flex" alignItems="center" gap={2} mb={3}>
                <LocationOnIcon color="error" />
                <Typography>
                  {userDetails.address.address}, {userDetails.address.city},{" "}
                  {userDetails.address.state}
                </Typography>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Company */}
              <Typography variant="h6" mb={2}>
                Company
              </Typography>

              <Box display="flex" alignItems="center" gap={2} mb={3}>
                <BusinessIcon color="secondary" />
                <Typography>
                  {userDetails.company.name} - {userDetails.company.title}
                </Typography>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Bank */}
              <Typography variant="h6" mb={2}>
                Bank Information
              </Typography>

              <Box display="flex" alignItems="center" gap={2} mb={3}>
                <AccountBalanceIcon color="success" />
                <Typography>
                  {userDetails.bank.cardType} - {userDetails.bank.cardNumber}
                </Typography>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Crypto */}
              <Typography variant="h6" mb={2}>
                Crypto
              </Typography>

              <Box display="flex" alignItems="center" gap={2}>
                <CurrencyBitcoinIcon color="warning" />
                <Typography>
                  {userDetails.crypto.coin} - {userDetails.crypto.wallet}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
