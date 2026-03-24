"use client";

import { navigation } from "@/config/navigation";
import { Box, Button, Divider, Tooltip } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";

export default function SideBar({ open }: { open: boolean }) {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: open ? 2 : 1,
        transition: "all 0.3s ease",
      }}
    >
      <Box>
        {navigation.map((item) => {
          const isActive =
            item.path === "/"
              ? pathname === "/"
              : pathname.startsWith(item.path);

          const IconComponent = item.icon;

          return (
            <Box key={item.path} sx={{ mb: 1 }}>
              <Tooltip title={!open ? item.label : ""} placement="right" arrow>
                <Box
                  component={Link}
                  href={item.path}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: open ? "flex-start" : "center",
                    px: open ? 2 : 0,
                    py: 1.5,
                    borderRadius: 2,
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "primary.contrastText" : "text.secondary",
                    bgcolor: isActive ? "primary.main" : "transparent",
                    transition: "all 0.2s ease",

                    "&:hover": {
                      bgcolor: isActive ? "primary.main" : "action.hover",
                      color: isActive ? "primary.contrastText" : "text.primary",
                    },
                  }}
                >
                  <IconComponent fontSize="small" />
                  {open && <Box sx={{ ml: 1.5 }}>{item.label}</Box>}
                </Box>
              </Tooltip>
            </Box>
          );
        })}
      </Box>

      <Box>
        <Divider sx={{ mb: 2 }} />

        <Tooltip title={!open ? "Logout" : ""} placement="right" arrow>
          <Button
            fullWidth={open}
            variant="text"
            color="error"
            sx={{
              justifyContent: open ? "flex-start" : "center",
              textTransform: "none",
              fontWeight: 500,
              minWidth: 0,
              px: open ? 2 : 0,
            }}
          >
            {!open ? <LogoutIcon fontSize="small" /> : "Logout"}
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
}
