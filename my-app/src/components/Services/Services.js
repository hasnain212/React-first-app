import React from "react";
// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
// import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Grid, IconButton } from "@mui/material";

function Services() {
  return (
    <>
      <Box sx={ { height:'105vh'}}>
        <Box sx={{  height:'13vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <Typography variant="h4" sx={{fontWeight:'bold'}}>Our Services</Typography>
        </Box>
        {/* 1st-card */}
        <Grid 
          container
          columnSpacing={10}
          sx={{ width: "90%" , margin: "0 auto" , height:'95vh'}}
        >
          <Grid item xs={4}>
            <Card
              sx={{
                height: "45vh",
                bgcolor: "#4C40F7",
                borderRadius:'5%', display :'flex',  alignItems:'center', flexDirection:'column'
                
              }}
            >
              <CardContent>
                <Stack >
                  <LocalFireDepartmentIcon />
                </Stack>
                <Typography variant="h5" component="div">
                  E-Commerce Stores
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton>
                  <ArrowForwardIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          {/* 2nd-card */}
          <Grid item xs={4}>
            <Card
              sx={{
                height: "45vh",
                bgcolor: "#00113B",
                borderRadius:'5%'
              }}
            >
              <CardContent>
                <Stack>
                  <LocalFireDepartmentIcon />
                </Stack>
                <Typography variant="h5" component="div">
                  E-Commerce Stores
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton>
                  <ArrowForwardIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          {/* 3rd-card */}
          <Grid item xs={4}>
            <Card
              sx={{
                height: "45vh",
                bgcolor: "#00113B",
                borderRadius:'5%'
              }}
            >
              <CardContent>
                <Stack>
                  <LocalFireDepartmentIcon />
                </Stack>
                <Typography variant="h5" component="div">
                  E-Commerce Stores
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton>
                  <ArrowForwardIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          {/* 4th-card */}
          <Grid item xs={4} ml={'31.7em'}>
            <Card
              sx={{
                height: "45vh",
                bgcolor: "#00113B",
                borderRadius:'5%'
              }}
            >
              <CardContent>
                <Stack>
                  <LocalFireDepartmentIcon />
                </Stack>
                <Typography variant="h5" component="div">
                  E-Commerce Stores
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton>
                  <ArrowForwardIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Services;
