import { useQuery } from "@tanstack/react-query";

export function useSyncSettings() {
  return useQuery({
    queryKey: ["sync-settings"],
    queryFn() {
      return chrome.storage.sync.get("settings");
    },
  });
}
