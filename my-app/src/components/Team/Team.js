import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import excludeIcon from "../../Assets/Exclude.png";

function Team() {
  return (
    <Box
      sx={{
        bgcolor: "#020E2D",
        height: "60vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "60%",
          height: "80%",
          display: "flex",
          justifyContent: "centre",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {" "}
        <Box>
          <img src={excludeIcon} alt="" />
        </Box>
        <Box>
          <Typography
            color={"white"}
            variant="h3"
            sx={{ width: "100%", textAlign: "center" }}
          >
            Fast, Professional and Fantastic Team, A Pleasure To Deal With.
          </Typography>
        </Box>
        <Box>
          <Typography color={"white"} variant="h4" sx={{ marginTop: "50px" }}>
            Mr W D’Souza
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Team;
