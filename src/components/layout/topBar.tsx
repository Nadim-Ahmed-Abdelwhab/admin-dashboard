"use client";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Avatar,
  Typography,
  Badge,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, GlopalStore } from "@/store/store";
import { toggleTheme } from "@/features/theme/theme";

export default function TopBar( { toggle } : { toggle :()=> void }) {
  const dispatch = useDispatch<Dispatch>();
  const mode = useSelector((state: GlopalStore) => state.theme.mode);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "Background.paper",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton onClick={toggle}>
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "background.default",
              px: 2,
              borderRadius: 2,
              width: 250,
              border: 1,
              borderColor: "divider",
            }}
          >
            <SearchIcon sx={{ color: "action.active", mr: 1 }} />
            <InputBase placeholder="Search..." sx={{ width: "100%" }} />
          </Box>
        </Box>

        {/* Logo Center */}
        <Typography
          variant="h6"
          fontWeight={800}
          sx={{
            letterSpacing: 1,
            color: "text.primary",
          }}
        >
          Admin
          <Box component="span" sx={{ color: "primary.contrastText" }}>
            Sphere
          </Box>
        </Typography>

        {/* Right Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton>
            <Badge badgeContent={4} color="error">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>

          <IconButton onClick={() => dispatch(toggleTheme())}>
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          <Box display="flex" alignItems="center" gap={1}>
            <Typography fontWeight={500}>Nadeem</Typography>

            <Avatar
              sx={{
                width: 36,
                height: 36,
                cursor: "pointer",
              }}
              onClick={handleOpen}
            >
              N
            </Avatar>
          </Box>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <SettingsIcon sx={{ mr: 1 }} />
              Settings
            </MenuItem>
            <Divider />
            <MenuItem>
              <LogoutIcon sx={{ mr: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
