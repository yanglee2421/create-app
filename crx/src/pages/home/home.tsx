// MUI Imports
import { Checkbox, FormControlLabel, Tab, Grid } from "@mui/material";
import {
  TabContext,
  TabList,
  TabListProps,
  TabPanel,
  LoadingButton,
} from "@mui/lab";

// API Imports
import { useLogout } from "@/hooks";

// React Imports
import { useState } from "react";

export function Home() {
  const [tabValue, setTabValue] = useState("1");
  const handleTabChange: HandleSubmit = (evt, v) => {
    void evt;
    setTabValue(v);
  };

  // API Hooks
  const { mutate, isLoading } = useLogout();

  return (
    <>
      <TabContext value={tabValue}>
        <TabList onChange={handleTabChange}>
          <Tab label="setting" value={"1"} />
          <Tab label="account" value={"2"} />
          <Tab label="about" value={"3"} />
        </TabList>
        <TabPanel value="1">
          <Grid container>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label="Show ContentMenu"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label="Show ContentMenu"
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <LoadingButton
            onClick={() => mutate()}
            loading={isLoading}
            variant="contained"
            color="error"
          >
            logout
          </LoadingButton>
        </TabPanel>
        <TabPanel value="3">333</TabPanel>
      </TabContext>
    </>
  );
}
type HandleSubmit = TabListProps["onChange"];
