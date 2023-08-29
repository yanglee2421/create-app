// Redux Imports
import { useAppDispatch, sliceLogin } from "@/redux";

// Antd Imports
import { Button, Typography } from "antd";

export function Home() {
  // Redux Hooks
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    const action = sliceLogin.actions.usr(null);
    dispatch(action);
  };

  return (
    <>
      <Typography.Title level={1}>Home</Typography.Title>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </>
  );
}
