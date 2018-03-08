function login(){
  chrome.storage.local.get(['ArrName','ArrValue','btnName'],function(valArray){
    for(var start = 1;start<=valArray.ArrName.length;start++){
      if(valArray.ArrName[start-1]=="")continue;
      document.getElementsByName(valArray.ArrName[start-1])[0].value=valArray.ArrValue[start-1];
    }
    document.getElementsByName(valArray.btnName)[0].click();
  });
};
login();
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse){
    chrome.storage.local.get(['btnName'],function(valArray){
      if(document.getElementsByName(valArray.btnName)[0]==undefined){
        sendResponse({result: "failed"});
      }else{
        sendResponse({result: "success"});
        login();
      }
    });
  }
);
