import { useQuery } from "@tanstack/react-query";

export function useLoginVali() {
  return useQuery({
    queryKey: ["login-vali"],
    async queryFn() {
      //   await timeout();
      return await chrome.storage.sync.get(["isLogged", "usr"]);
    },
  });
}
