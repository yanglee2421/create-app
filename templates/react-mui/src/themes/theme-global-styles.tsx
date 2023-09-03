// MUI Imports
import { GlobalStyles, GlobalStylesProps } from "@mui/material";
import { red } from "@mui/material/colors";

export function ThemeGlobalStyles() {
  return <GlobalStyles styles={getGlobalStyles()} />;
}

function getGlobalStyles(): GlobalStylesProps["styles"] {
  return {
    // Ngrogress
    "#nprogress .bar": {
      position: "fixed",
      left: 0,
      top: 0,
      zIndex: 2000,

      width: "100%",
      height: 3,

      backgroundColor: red[500],
    },

    // React Root Node
    "#root": {
      height: "100%",
    },

    // Body
    "html, body": {
      height: "100%",
    },
  };
}
