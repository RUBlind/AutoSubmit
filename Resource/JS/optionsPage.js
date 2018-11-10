function loadOption() {
    chrome.storage.local.get(['ArrName', 'ArrValue', 'btnName'], function (valArray) {
        if (JSON.stringify(valArray) === "{}") return;
        let max = document.querySelectorAll('tbody > tr > td > input').length;
        for (let start = 1; start <= Math.floor(max / 2); start++) {
            document.getElementById("name_" + start).value = valArray.ArrName[start - 1];
            document.getElementById("value_" + start).value = valArray.ArrValue[start - 1];
        }
        document.getElementById('value_submit').value = valArray.btnName;
        console.log("加载成功");
    });
}

function initPageContentAndListener() {
    let saveButton = document.getElementById("save_btn");
    let clearButton = document.getElementById("clear_btn");
    saveButton.addEventListener("click", function () {
        let btnName = document.getElementById('value_submit').value;
        let max = document.querySelectorAll('tbody > tr > td > input').length;
        let ArrName = [], ArrValue = [];
        for (let start = 1; start <= Math.floor(max / 2); start++) {
            ArrName[start - 1] = document.getElementById("name_" + start).value;
            ArrValue[start - 1] = document.getElementById("value_" + start).value;
        }
        chrome.storage.local.set({'ArrName': ArrName, 'ArrValue': ArrValue, 'btnName': btnName}, function () {
            console.log(ArrName, ArrValue, btnName);
            alert("配置信息更新成功");
        });
    });
    clearButton.addEventListener("click", function () {
        Array.from(document.getElementsByTagName('input')).forEach(item => item.value = "");
        chrome.storage.local.clear(function () {
            alert("配置信息清除成功");
        });
    });
    loadOption();
}

initPageContentAndListener();