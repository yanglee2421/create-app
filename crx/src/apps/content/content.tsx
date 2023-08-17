// React Imports
import { useEffect, useRef } from "react";

// Toast Imports
import { toast } from "react-hot-toast";

export function Content() {
  console.log(chrome);

  const toastIdRef = useRef(crypto.randomUUID());

  useEffect(() => {
    const toastId = toastIdRef.current;
    chrome.runtime.onMessage.addListener(toMsgListener(toastId));
    return () => {
      chrome.runtime.onMessage.removeListener(toMsgListener(toastId));
    };
  }, []);
  return <></>;
}

function toMsgListener(id: string) {
  return () => {
    postHtml(id);
    return true;
  };
}

async function postHtml(id: string) {
  const formData = new FormData();
  formData.set("html", document.documentElement.outerHTML);
  formData.set("url", globalThis.location.href);
  try {
    toast.loading("Sending...", { id });
    await fetch("http://localhost:3002/crawler", {
      method: "POST",
      body: formData,
    });
    toast.success("Successlly", { id });
  } catch {
    toast.error("Error", { id });
  }
}
