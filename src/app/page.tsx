import Box from "@mui/material/Box";
import SideBar from "../components/layout/sideBar";
import MainContent from "@/components/dashboard/mainContent";
import TopBar from "@/components/layout/topBar";

export default function Page() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* side bar */}

      <Box
        sx={{
          width: 260,
          backgroundColor: "#111827",
          color: "white",
          "&:hover": {
            backgroundColor: "#1F2937",
            transition: "all 0.5s",
          },
        }}
      >
        <SideBar />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* top bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "64px",
            border: "1px solid #e0e0e0",
            px: 3,
          }}
        >
          <TopBar />
        </Box>

        {/* main content */}
        <Box
          sx={{
            flex: 1,
            px: 3,
            pt: 0,
            width: "100%",
            backgroundColor: "#f5f6fa",
            my: "10px",
            margin: "auto",
          }}
        >
          <MainContent />
        </Box>
      </Box>
    </Box>
  );
}
