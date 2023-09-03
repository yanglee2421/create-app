// API Imports
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usr_post } from "@/api/mock";
import { Req, Res } from "@/api/mock/usr_post";

// Toast Imports
import { toast } from "react-hot-toast";

export function useUsrPost() {
  // API Hooks
  const queryClient = useQueryClient();
  return useMutation<Res, Error, Req>({
    async mutationFn(req) {
      return usr_post(req);
    },
    onSuccess(data) {
      queryClient.setQueryData<Res>(["usr-refresh"], (prev) => {
        if (!prev) return data;
        return { ...prev, ...data };
      });
    },
    onError(err) {
      toast.error(err.message);
    },
  });
}
