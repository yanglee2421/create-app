// Form Imports
import { useForm, FormProvider } from "react-hook-form";

// Components Imports
import { InputPwd, InputText } from "@/components";

// MUI Imports
import { Grid, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// API Imports
import { useLogin } from "@/hooks";

export function Login() {
  // Form Hooks
  const formCtx = useForm({
    defaultValues: {
      usr: "usr",
      pwd: "pwd",
    },
  });

  // API Hooks
  const { mutate, isLoading } = useLogin();

  const handleSubmit = formCtx.handleSubmit((data) => {
    console.log(data);
    mutate();
  });

  return (
    <Box p={2}>
      <form onSubmit={handleSubmit}>
        <FormProvider {...formCtx}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <InputText name="usr" label="Email" />
            </Grid>
            <Grid item xs={12}>
              <InputPwd name="pwd" label="Password" />
            </Grid>
            <Grid item xs={12}>
              <LoadingButton
                loading={isLoading}
                type="submit"
                variant="contained"
              >
                login
              </LoadingButton>
            </Grid>
          </Grid>
        </FormProvider>
      </form>
    </Box>
  );
}
