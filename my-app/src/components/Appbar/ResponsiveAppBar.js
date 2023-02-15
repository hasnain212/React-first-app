import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../Assets/weblogo.png";

const pages = [
  "Home",
  "Services",
  "Live Ecommerce Store",
  "Reviews",
  "Contact Us",
];

function ResponsiveAppBar() {
  return (
    <AppBar position="static"  sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex' }}>
          <Box  sx={{ flexGrow: 2, display:'flex', alignItems:'center'}}><img src={logo} alt="" /></Box>
          
          <Box  sx={{ flexGrow: 1, display:"flex", justifyContent: 'space-between'  }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "black", fontSize:'16px', display: "block" , fontWeight:'bold'}}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
