import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Description() {
  return (
    <Box sx={{ height: "43vh", bgcolor: "#FE9602" }}>
      <Box
        sx={{
          width: "80%",
          height: "100%",
          margin: "auto ",
          // bgcolor:'black'
        }}
      >
        {" "}
        <Typography
          variant="h5"
          sx={{
            height:'100%',
            display:'flex',
            justifyContent:'centre',
            alignItems:'center',
            letterSpacing:'2px',
            fontfamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "40px",
            lineHeight: "60px",
            textAlign: "center",
            textTransform: "capitalize",
            color: "#FFFFFF",
          }}
        >
          We start you on the next level with a Ready-Made e-commerce Store,
          Products and Suppliers, Live Marketing Training and Support 7 Days a
          week, all delivered and up and running in 1 day.
        </Typography>
      </Box>
    </Box>
  );
}

export default Description;
