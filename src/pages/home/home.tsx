import React from "react";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Container maxWidth="xl">
        <Grid container gap={3}>
          <h1>HOME</h1>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
