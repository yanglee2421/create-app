chrome.storage.sync.onChanged.addListener((data) => {
  const showContextMenus = data.settings?.newValue.showContextMenus;
  toggleContextMenus(Boolean(showContextMenus));
});

chrome.runtime.onInstalled.addListener(async () => {
  const { settings } = await chrome.storage.sync.get("settings");
  toggleContextMenus(settings.showContextMenus);
});

function toggleContextMenus(showContextMenus: boolean) {
  const id = "WarpDriven Crawler";
  const title = chrome.i18n.getMessage("title");

  if (showContextMenus) {
    console.log("thiss", title);

    chrome.contextMenus.create({
      id,
      title,
    });

    chrome.contextMenus.onClicked.addListener(contextMenusListener);
    return;
  }

  try {
    chrome.contextMenus.remove("WarpDriven Crawler");
    chrome.contextMenus.onClicked.removeListener(contextMenusListener);
  } catch {}
}

function contextMenusListener(
  btn: chrome.contextMenus.OnClickData,
  tab?: chrome.tabs.Tab
) {
  console.log(btn, tab);
  chrome.tabs.sendMessage(tab?.id || 0, "msg");
}
