'use client'
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SideBar() {
  const router = useRouter();
  function navigate(){
    router.push('/users')
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "100vh",
        }}
      >
        <Box sx={{ m: 2 }}>
          <Typography sx={{ my: 2 , border: '1px solid white' ,p:'5px' ,borderRadius: '10px'}}>Dashboard</Typography>
          <Button sx={{ color: "white" }}>
            
            Overview
          </Button>
        </Box>

        <Box sx={{ m: 2 }}>
          <Typography sx={{ my: 2 , border: '1px solid white' ,p:'5px' ,borderRadius: '10px'}}>Management</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Button onClick={navigate}>
              
              Users
            </Button>
            <Button>
              
              Products
            </Button>
            <Button>
              
              Carts
            </Button>
          </Box>
        </Box>

        <Box sx={{ m: 2 }}>
          <Typography sx={{ my: 2 , border: '1px solid white' ,p:'5px' ,borderRadius: '10px'}}>Analytics</Typography>
          <Button>
            
            Reports
          </Button>
        </Box>

        <Box sx={{ m: 2 }}>
          <Typography sx={{ my: 2 , border: '1px solid white' ,p:'5px' ,borderRadius: '10px'}}>System</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Button> Settings</Button>
            <Button> Logout</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
