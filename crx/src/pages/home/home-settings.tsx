// MUI Imports
import { Grid, FormControlLabel, Checkbox, CheckboxProps } from "@mui/material";

// Redux Imports
import { useAppDispatch, useAppSelector, mutateSettings } from "@/redux";

export function HomeSettings() {
  const dispatch = useAppDispatch();
  const checked = useAppSelector((s) => s.settings.showContextMenus);
  const handleChange: HandleChange = (evt, showContextMenus) => {
    void evt;
    console.log(showContextMenus);

    dispatch(mutateSettings({ showContextMenus }));
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
