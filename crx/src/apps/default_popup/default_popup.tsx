// MUI Imports
import { Box, CssBaseline } from "@mui/material";

// Components Imports
import { DefaultPopupMain } from "./default_popup-main";

export function DefaultPopup() {
  return (
    <Box sx={{ width: "20rem", height: "30rem" }}>
      <CssBaseline />
      <DefaultPopupMain />
    </Box>
  );
}
