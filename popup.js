chrome.system.audio.getOutputInfo(function (info) {
  const volume = info.volume * 100;
  document.getElementById("volumeDisplay").innerText = "Volume: " + volume.toFixed(2) + "%";
});
