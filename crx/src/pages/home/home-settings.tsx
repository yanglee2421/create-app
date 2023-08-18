// MUI Imports
import { Grid, FormControlLabel, Checkbox } from "@mui/material";

export function HomeSettings() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <FormControlLabel control={<Checkbox />} label="Show ContentMenu" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel control={<Checkbox />} label="Show ContentMenu" />
        </Grid>
      </Grid>
    </>
  );
}
