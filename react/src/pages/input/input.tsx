// MUI Imports
import { Grid, Card, CardContent, Box } from "@mui/material";

export function Input() {
  return (
    <Box height={"100%"} padding={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent></CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
