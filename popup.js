chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { action: "getVolume" }, function (response) {
    document.getElementById("volumeDisplay").innerText = "Volume: " + response.volume;
  });
});
