"use client";
import SideBar from "@/components/layout/sideBar";
import TopBar from "@/components/layout/topBar";
import { Box } from "@mui/material";
import React, { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: open ? 240 : 70,
          transition: "width 0.3s ease",
          flexShrink: 0,
        }}
      >
        <SideBar open={open} />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <TopBar toggle = {() => setOpen(!open)} />

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 3,
            bgcolor: "background.default",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
