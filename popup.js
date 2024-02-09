chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.executeScript(tabs[0].id, { code: 'document.volume' }, function (result) {
    const volume = result && result[0] ? result[0] : 'N/A';
    document.getElementById("volumeDisplay").innerText = "Volume: " + volume;
  });
});
