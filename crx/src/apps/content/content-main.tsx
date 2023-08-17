// React Imports
import { useEffect } from "react";

export function ContentMain() {
  useEffect(() => {
    const listener = () => true;
    chrome.runtime.onMessage.addListener(listener);
    return () => {
      chrome.runtime.onMessage.removeListener(listener);
    };
  }, []);
  return <></>;
}
