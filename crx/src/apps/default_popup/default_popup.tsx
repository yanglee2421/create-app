// MUI Imports
import { Box } from "@mui/material";
// import { useState } from "react";

export function DefaultPopup() {
  console.log(chrome.storage);

  // const [count, setCount] = useState(0);

  const settingLink = `chrome-extension://${chrome.runtime.id}/options_page.html`;

  return (
    <Box sx={{ width: "20rem", height: "30rem" }}>
      <p>hello world</p>
      <div>show</div>
      <a href={settingLink} target="__blank">
        setting
      </a>
    </Box>
  );
}
