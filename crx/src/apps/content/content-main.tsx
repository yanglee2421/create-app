// React Imports
import { useEffect } from "react";

// Provider Imports
import { QueryProvider } from "@/api/provider";

// API Imports
import { useHtmlPost } from "@/hooks";

export function ContentMain() {
  console.log(chrome);

  // API Hooks
  const { mutate } = useHtmlPost();

  useEffect(() => {
    const data = {
      html: document.documentElement.outerHTML,
      url: globalThis.location.href,
    };
    const listener = () => {
      mutate({ data });
      return true;
    };

    chrome.runtime.onMessage.addListener(listener);
    return () => {
      chrome.runtime.onMessage.removeListener(listener);
    };
  }, []);

  return <QueryProvider></QueryProvider>;
}
