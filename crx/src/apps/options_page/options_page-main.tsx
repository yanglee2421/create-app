// MUI Imports
import { Tabs, Tab } from "@mui/material";

// Router Imports

export function OptionsPageMain() {
  return (
    <>
      <Tabs value="1">
        <Tab label="one" value={"1"} />
        <Tab label="two" value="2" />
        <Tab label="three" value="3" />
      </Tabs>
    </>
  );
}
