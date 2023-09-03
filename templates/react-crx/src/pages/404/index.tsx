// MUI Imports
import { Button, Typography, Box } from "@mui/material";

// Router Imports
import { NavLink } from "react-router-dom";

export function Component() {
  return (
    <>
      <Typography variant="h1" align="center">
        404
      </Typography>
      <Typography variant="h3" align="center">
        Page not found
      </Typography>
      <Box display={"flex"} justifyContent={"center"}>
        <NavLink to={"/"}>
          <Button variant="contained">take me home</Button>
        </NavLink>
      </Box>
    </>
  );
}
