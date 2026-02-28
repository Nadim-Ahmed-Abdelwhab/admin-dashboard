import {
  Avatar,
  Box,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import SearchIcon from "@mui/icons-material/Search";

export default function TopBar() {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        alignItems={"center"}
      >
        <Box display={"flex"} gap={3} alignItems={"center"}>
          <ViewHeadlineIcon />
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 200,
              height: 20,
            }}
          >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        <Box>
          <Typography
            fontSize={50}
            fontWeight={900}
            color="skyBlue"
            display={"inline"}
          >
            A
            <Typography component={"span"} fontSize={30} color={'black'} fontWeight={900}>
              S
            </Typography>
          </Typography>
        </Box>

        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Box display={"flex"} color={""} alignItems={"center"}>
            <Typography fontWeight={400} fontSize={20}>
              Hi Nadeem
            </Typography>
            <Avatar alt="Admin" src="{}" />
          </Box>
          <DarkModeIcon />
        </Box>
      </Box>
    </>
  );
}
