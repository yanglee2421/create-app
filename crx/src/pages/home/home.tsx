// MUI Imports
import { Tab } from "@mui/material";
import { TabContext, TabList, TabListProps, TabPanel } from "@mui/lab";

// React Imports
import React, { useState } from "react";

// Components Imports
import { HomeSettings } from "./home-settings";
import { HomeAccount } from "./home-account";

const map = new Map<string, React.ReactNode>();
map.set("settings", <HomeSettings />);
map.set("account", <HomeAccount />);
map.set("about", <></>);

const tabList = Array.from(map.keys()).map((item) => (
  <Tab key={item} label={item} value={item} />
));
const tabElList = Array.from(map).map(([k, v]) => (
  <TabPanel key={k} value={k}>
    {v}
  </TabPanel>
));

export const Home = () => {
  const [tabValue, setTabValue] = useState(() => Array.from(map.keys())[0]);
  const handleTabChange: HandleSubmit = (evt, v) => {
    void evt;
    setTabValue(v);
  };

  return (
    <>
      <TabContext value={tabValue}>
        <TabList onChange={handleTabChange}>{tabList}</TabList>
        {tabElList}
      </TabContext>
    </>
  );
};
type HandleSubmit = TabListProps["onChange"];
