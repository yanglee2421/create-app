// MUI Imports
import { Box, IconButton, Typography } from "@mui/material";
import { SettingsOutlined } from "@mui/icons-material";

// import { useState } from "react";

export function DefaultPopup() {
  console.log(chrome.storage);

  // const [count, setCount] = useState(0);

  const settingLink = `chrome-extension://${chrome.runtime.id}/options_page.html`;

  return (
    <Box sx={{ width: "20rem", height: "30rem" }}>
      <Typography variant="h4">hello world</Typography>
      <div>show</div>
      <IconButton href={settingLink} target="__blank">
        <SettingsOutlined />
      </IconButton>
    </Box>
  );
}
