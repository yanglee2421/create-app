// Redux Imports
import { useAppDispatch, sliceLogin } from "@/redux";

// Antd Imports
import { Button, Typography } from "antd";

export function Login() {
  // Redux Hooks
  const dispatch = useAppDispatch();
  const handleSignIn = () => {
    const action = sliceLogin.actions.islogged(true);
    dispatch(action);
  };

  return (
    <>
      <Typography.Title level={1}>login</Typography.Title>
      <Button onClick={handleSignIn}>Sign In</Button>
    </>
  );
}
