// MUI Imports
import { Box, IconButton, Typography } from "@mui/material";
import { SettingsOutlined, ArchitectureOutlined } from "@mui/icons-material";

export function DefaultPopupMain() {
  const settingLink = `chrome-extension://${chrome.runtime.id}/options_page.html`;

  return (
    <Box width={"20rem"} height={"30rem"}>
      <Box display={"flex"}>
        <Typography variant="h4">hello world</Typography>
        <IconButton>
          <ArchitectureOutlined />
        </IconButton>
        <IconButton href={settingLink} target="__blank">
          <SettingsOutlined />
        </IconButton>
      </Box>
    </Box>
  );
}
