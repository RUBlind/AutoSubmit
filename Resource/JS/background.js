chrome.contextMenus.create({
    type: 'normal',
    title: 'Начать мониторинг веб-страниц',
    contexts: ['page'],
    onclick: function () {
        autoRefresh();
    },
});
chrome.contextMenus.create({
    type: 'normal',
    title: 'Остановить мониторинг веб-страниц',
    contexts: ['page'],
    onclick: function () {
        stopRefresh();
    },
});

let f_timer;

function autoRefresh() {
    clearInterval(f_timer);
    f_timer = setInterval(function () {
        chrome.tabs.getSelected(null, function (tab) {
            if (tab.id === -1) return;
            chrome.tabs.sendRequest(tab.id, {status: "true"}, function (response) {
                if (response !== undefined && response.result === "failed") {
                    chrome.tabs.reload();
                } else {
                    stopRefresh();
                }
            });
        });
    }, 200);
}

function stopRefresh() {
    clearInterval(f_timer);
}