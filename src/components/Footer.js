import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "2000px",
        height: "auto",
        backgroundColor: "grey",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginTop:"29rem"
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              React Starter App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
