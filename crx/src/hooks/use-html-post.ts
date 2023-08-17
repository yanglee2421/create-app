// API Imports
import { useMutation } from "@tanstack/react-query";
import { html_post } from "@/api";
import type { Res, Req } from "@/api/html_post";

// React Imports
import { useRef } from "react";

// Toast Imports
import { toast } from "react-hot-toast";

export function useHtmlPost() {
  const toastIdRef = useRef(crypto.randomUUID());

  // API Hooks
  return useMutation<Res, Error, Req>({
    mutationFn(req) {
      return html_post(req);
    },
    onMutate() {
      const id = toastIdRef.current;
      toast.loading("Fetching...", { id });
    },
    onSettled(data, error) {
      const id = toastIdRef.current;
      if (error) {
        toast.error(error.message, { id });
        return;
      }
      if (data) {
        toast.success("Crawled successfully", { id });
        return;
      }
    },
  });
}
