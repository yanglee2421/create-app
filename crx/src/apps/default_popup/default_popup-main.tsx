// MUI Imports
import { Box, IconButton, Typography } from "@mui/material";
import { SettingsOutlined, ArchiveOutlined } from "@mui/icons-material";

// import { useState } from "react";

export function DefaultPopupMain() {
  // const [count, setCount] = useState(0);

  const settingLink = `chrome-extension://${chrome.runtime.id}/options_page.html`;

  const handleClick = async () => {
    const [tab] = await chrome.tabs.query({
      currentWindow: true,
      active: true,
    });
    chrome.tabs.sendMessage(tab?.id || 0, "msg");
  };

  return (
    <>
      <Box width={"20rem"} height={"30rem"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5">WarpDriven Crawler</Typography>
          <IconButton onClick={handleClick}>
            <ArchiveOutlined />
          </IconButton>
          <IconButton href={settingLink} target="__blank">
            <SettingsOutlined />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
