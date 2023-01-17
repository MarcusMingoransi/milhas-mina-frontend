import React, { useEffect, useState } from "react";
import { Box, Container, List, ListItem, ListItemText } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import api from "../../services/api";

const Home = () => {
  const [users, setUsers] = useState([]);

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
    <Box display="flex" flexDirection="column" gap={3}>
      <Container maxWidth="xl">
        <Grid container gap={3}>
          <h1>HOME</h1>

          <List sx={{ width: "100%" }}>
            {users.map((value: any) => (
              <ListItem key={value.id} disableGutters>
                <ListItemText
                  primary={`Name: ${value.first_name} ${value.last_name} - Email: ${value.email}`}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
