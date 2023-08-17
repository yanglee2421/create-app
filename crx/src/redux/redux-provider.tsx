// Redux Imports
import { Provider } from "react-redux";

// React Imports
import React from "react";

// Store Imports
import { store } from "./redux-store";

export function ReduxProvider(props: React.PropsWithChildren) {
  // ** Props
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
}
