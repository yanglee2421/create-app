// MUI Imports
import { Grid, FormControlLabel, Checkbox, CheckboxProps } from "@mui/material";

// React Imports
import { useState } from "react";

export function HomeSettings() {
  const [checked, setChecked] = useState(false);
  const handleChange: HandleChange = async (evt, showContextMenus) => {
    void evt;
    console.log(showContextMenus);

    await chrome.storage.sync.set({
      settings: { showContextMenus },
    });
    const { settings } = await chrome.storage.sync.get("settings");
    console.log(settings);
    const model = Boolean(settings.showContextMenus);

    setChecked(model);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox onChange={handleChange} checked={checked} />}
            label="Show ContentMenu"
          />
        </Grid>
      </Grid>
    </>
  );
}
type HandleChange = CheckboxProps["onChange"];
