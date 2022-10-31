function timedPopup () {
  chrome.windows.create({
    url: "MenuLogic/timeUp.html",
    type: "popup",
    height: 400,
    width: 500,

  });
}
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name === "timeSender");
  port.onMessage.addListener(function(msg) {
    if (msg.newSliderValue){
      port.postMessage({response: "It worked"});

      chrome.alarms.create({ periodInMinutes: (msg.newSliderValue / 60) });
      
    }else{
      port.postMessage({response: "msg.newSliderValue was false"});
    }
  });

  chrome.alarms.onAlarm.addListener(() => {
    console.assert(port.name === "timeSender");
    timedPopup();
    console.log("event fired! ");
  });
});


