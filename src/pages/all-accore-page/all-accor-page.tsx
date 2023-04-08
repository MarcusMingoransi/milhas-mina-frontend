import React, { useEffect, useState } from "react";
import { Box, Container, List, ListItem, ListItemText } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import api from "../../services/api";
import Card from "../../components/shared/card/card";
import { useCustomTheme } from "../../context/theme-context";

const Home = () => {
  const [users, setUsers] = useState([]);
  const { theme } = useCustomTheme();

  useEffect(() => {
    try {
      api
        .get("/users")
        .then((result) => {
          console.log(result.data);
          setUsers(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Grid container rowSpacing={3} columnSpacing={3}>
      {/* <List sx={{ width: "100%" }}>
        {users.map((value: any) => (
          <ListItem key={value.id} disableGutters>
            <ListItemText
              primary={`Name: ${value.first_name} ${value.last_name} - Email: ${value.email}`}
            />
          </ListItem>
        ))}
      </List> */}
      <Grid xs={12} lg={6}>
        <Card>ahahhahahah</Card>
      </Grid>
      <Grid xs={12} lg={6}>
        <Card backgroundColor={theme?.palette.primary.main}>ahahhahahah</Card>
      </Grid>
      <Grid xs={12} lg={12}>
        <Card borderColor={theme?.palette.primary.main}>ahahhahahah</Card>
      </Grid>
    </Grid>
  );
};

export default Home;
