import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useCustomTheme } from "../../context/theme-context";
import { Card } from "../../components/shared";
import { AllAccorSimulator, AllAccorTable } from "../../components/all-accor";

const Home = () => {
  const { theme } = useCustomTheme();

  return (
    <Grid container rowSpacing={3} columnSpacing={3}>
      <Grid xs={12} lg={6}>
        <Card>
          <AllAccorTable />
        </Card>
      </Grid>
      <Grid xs={12} lg={6}>
        <Card>
          <AllAccorSimulator />
        </Card>
      </Grid>
      <Grid xs={12} lg={12}>
        <Card borderColor={theme?.palette.primary.main}>ahahhahahah</Card>
      </Grid>
    </Grid>
  );
};

export default Home;
