import { Grid, Typography } from "@mui/material";

import Animal from "./components/Animal";
import ANIMALS from "./data/animals";
import "./App.css";

function App() {
  return (
    <>
      <Typography variant="h1">Animals</Typography>
      <Grid container direction="column">
        {ANIMALS.map((animal) => {
          return (
            <Grid item key={animal.name}>
              <Animal animal={animal} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default App;
