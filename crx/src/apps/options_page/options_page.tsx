// Components Imports
import { OptionsPageMain } from "./options_page-main";

// Toast Imports
import { Toaster } from "react-hot-toast";

// MUI Imports
import { CssBaseline } from "@mui/material";

export function OptionsPage() {
  return (
    <>
      <Toaster />
      <CssBaseline />
      <OptionsPageMain />
    </>
  );
}
