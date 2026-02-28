import { Users } from "@/features/users/usersTypes";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";

export default function DashboardUsers({ users }: { users: Users }) {

  return (
    <>
      <Box
        display={"flex"}
        gap={1}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box>
          <Image src={users.image} width={100} height={100} alt={users.image} />
        </Box>
        <Box>
          <Typography variant="h2" display={"inline"}>
            {users.firstName} {users.lastName}
          </Typography>
        </Box>
        <Box display={"flex"} gap={5} justifyContent={"center"} mt={1}>
          <Typography variant="body2">
            <EmailIcon />
          </Typography>
          <Typography variant="body2">
            <LocalPhoneIcon />
          </Typography>
          <Typography variant="body2">
            <HomeIcon />
          </Typography>
          <Typography variant="body2">
            <BusinessIcon />
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{ fontSize: "15px", border: "solid 2px", borderRadius: "20px" }}
          >
            User Details
          </Button>
        </Box>
      </Box>
    </>
  );
}
