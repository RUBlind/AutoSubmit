function login() {
  chrome.storage.local.get(['ArrName', 'ArrValue', 'btnName'], function (valArray) {
    for (let start = 1; start <= valArray.ArrName.length; start++) {
      if (valArray.ArrName[start - 1] === "") continue
      let inputElement = document.getElementsByName(valArray.ArrName[start - 1])[0]
      if (inputElement === undefined) continue
      inputElement.value = valArray.ArrValue[start - 1]
    }
    
    let submitElement = document.getElementsByName(valArray.btnName)[0]
    if (submitElement === undefined) return
    
    submitElement.click()
  })
}

// execute login
login()

chrome.extension.onRequest.addListener(
  function (request, sender, sendResponse) {
    chrome.storage.local.get(['btnName'], function (valArray) {
      if (document.getElementsByName(valArray.btnName)[0] === undefined) {
        sendResponse({ result: "failed" })
      } else {
        sendResponse({ result: "success" })
        login()
      }
    })
  }
)
