// MUI Imports
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { Google, GitHub, FacebookOutlined, Twitter } from "@mui/icons-material";

// Form Imports
import { FormProvider, useForm } from "react-hook-form";

// Components Imports
import { ItemCheckbox, ItemPasswd, ItemText } from "@/components";

export function Component() {
  // Form Hooks
  const formCtx = useForm({ defaultValues: {} });

  return (
    <Box display={"flex"} height={"100%"}>
      <Box flex={1}></Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        width={"100%"}
        maxWidth={["none", 450]}
        paddingX={4}
        boxShadow={(theme) => theme.shadows[1]}
      >
        <form action="">
          <FormProvider {...formCtx}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" fontWeight={500}>
                  Wellcome to Yang_Lee!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color={"GrayText"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  omnis sed fugiat placeat alias illo praesentium.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ItemText name="email" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <ItemPasswd name="passwd" label="Password" />
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <FormControlLabel
                  control={<ItemCheckbox name="remember" />}
                  label="Remember Me"
                />
                <Link component="button">Forgot Password?</Link>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth size="large">
                  sign in
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                gap={2}
              >
                <Typography>New on our platform?</Typography>
                <Link component={"button"}>Create an account</Link>
              </Grid>
              <Grid item xs={12}>
                <Divider>Or</Divider>
              </Grid>
              <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                <IconButton>
                  <FacebookOutlined />
                </IconButton>
                <IconButton>
                  <Twitter />
                </IconButton>
                <IconButton>
                  <GitHub />
                </IconButton>
                <IconButton>
                  <Google />
                </IconButton>
              </Grid>
            </Grid>
          </FormProvider>
        </form>
      </Box>
    </Box>
  );
}
