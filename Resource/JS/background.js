chrome.contextMenus.create({
  type: 'normal',
  title: '开始网页监控',
  contexts: ['page'],
  onclick: function () {
    autoRefresh()
  },
})
chrome.contextMenus.create({
  type: 'normal',
  title: '停止网页监控',
  contexts: ['page'],
  onclick: function () {
    stopRefresh()
  },
})

var f_timer

function autoRefresh() {
  debounce(function () {
    chrome.tabs.getSelected(null, function (tab) {
      if (tab.id === -1) return
      
      chrome.tabs.sendRequest(tab.id, { status: "true" }, function (response) {
        if (response !== undefined && response.result === "failed") {
          chrome.tabs.reload()
        } else {
          stopRefresh()
        }
      })
    })
  }, 200)

  // clearInterval(f_timer)
  // f_timer = setInterval(function () {
  //   chrome.tabs.getSelected(null, function (tab) {
  //     if (tab.id === -1) return
  //     chrome.tabs.sendRequest(tab.id, { status: "true" }, function (response) {
  //       if (response !== undefined && response.result === "failed") {
  //         chrome.tabs.reload()
  //       } else {
  //         stopRefresh()
  //       }
  //     })
  //   })
  // }, 200)
}

function stopRefresh() {
  clearInterval(f_timer)
}

// 函数节流
function debounce(func, delay) {
  return function (...args) {
    if (f_timer) {
      clearTimeout(f_timer)
    }

    f_timer = setTimeout(() => {
      func.apply(this, args)
    }, delay) // 如果想传入 秒 做为单位，则让 delay * 1000 即可
  }
}
