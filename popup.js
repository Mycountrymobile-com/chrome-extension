document.getElementById("save").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    chrome.bookmarks.create({
      title: currentTab.title,
      url: currentTab.url
    }, (newBookmark) => {
      alert(`Bookmark added: ${newBookmark.title}`);
    });
  });
});
