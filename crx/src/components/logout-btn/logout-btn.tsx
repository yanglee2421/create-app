// MUI Imports
import { LoadingButton, LoadingButtonProps } from "@mui/lab";

// API Imports
import { useLogout } from "@/hooks";

export function LogoutBtn(props: LoadingButtonProps) {
  // API Hooks
  const { mutate, isLoading } = useLogout();
  const handleClick = () => mutate();

  return <LoadingButton onClick={handleClick} loading={isLoading} {...props} />;
}
