chrome.runtime.onInstalled.addListener(() => {
  console.log(chrome);

  // Create a radio item.
  chrome.contextMenus.create({
    title: "点击采集",
    // type: "radio",
    id: "radio",
  });

  chrome.contextMenus.onClicked.addListener((btn, tab) => {
    console.log(btn, tab);
    chrome.tabs.sendMessage(tab?.id || 0, "msg");
  });
});
