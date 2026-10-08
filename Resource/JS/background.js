const MENU_START = 'start_monitor';
const MENU_STOP = 'stop_monitor';
const POLL_INTERVAL = 200;

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.removeAll(function () {
        chrome.contextMenus.create({
            id: MENU_START,
            type: 'normal',
            title: 'Начать мониторинг веб-страниц',
            contexts: ['page'],
        });
        chrome.contextMenus.create({
            id: MENU_STOP,
            type: 'normal',
            title: 'Остановить мониторинг веб-страниц',
            contexts: ['page'],
        });
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === MENU_START && tab) {
        autoRefresh(tab.id);
    } else if (info.menuItemId === MENU_STOP) {
        stopRefresh();
    }
});

let f_timer;

function autoRefresh(tabId) {
    clearInterval(f_timer);
    f_timer = setInterval(async function () {
        try {
            const response = await chrome.tabs.sendMessage(tabId, {status: "true"});
            if (response !== undefined && response.result === "failed") {
                await chrome.tabs.reload(tabId);
            } else {
                stopRefresh();
            }
        } catch (e) {
            // Content script is not ready yet (page is loading) or the tab was closed.
            try {
                await chrome.tabs.get(tabId);
            } catch (closed) {
                stopRefresh();
            }
        }
    }, POLL_INTERVAL);
}

function stopRefresh() {
    clearInterval(f_timer);
}
