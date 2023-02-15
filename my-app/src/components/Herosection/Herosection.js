import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import imageTwo from "../../Assets/imagetwo.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Herosection() {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "90vh" }}>
      <Box sx={{ position: "absolute", top: "6vh", left: "55em" }}>
        <img src={imageTwo} alt="" />
      </Box>
      <Box
        sx={{
          width: "38%",
          // bgcolor: "lightgray",
          position: "absolute",
          top: "25vh",
          left: "6em",
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: "45px",
            lineHeight: "70px",
            letterSpacing: "2px",
          }}
          variant="h5"
        >
          Get Your Ready-Made e-
          <span sx={{ bgcolor: "black" }}>commerce store On The</span> Go,
          delivered in 1 day!
        </Typography>
      </Box>
      <Box sx={{position:'absolute' , top:'60vh', left:'6em'}}>
        <Button
          sx={{ padding: "20px", fontWeight: "bold", bgcolor: "#4C40F7" }}
          size="large"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
        >
          Get Stared
        </Button>
      </Box>
    </Box>
  );
}

export default Herosection;
