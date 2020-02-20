function loadOption() {
    chrome.storage.local.get(['ArrName', 'ArrValue', 'btnName','ArrDomain'], function (valArray) {
        if (JSON.stringify(valArray) === "{}") return;
        let max = document.querySelectorAll('#params').length;
        for (let start = 1; start <= Math.floor(max); start++) {
            document.getElementById("name_" + start).value = valArray.ArrName[start - 1];
            document.getElementById("value_" + start).value = valArray.ArrValue[start - 1];
        }
        document.getElementById('value_submit').value = valArray.btnName;
        document.getElementById('value_domain').value = valArray.ArrDomain;
        console.log("Загрузка выполнена успешно");
    });
}

function initPageContentAndListener() {
    let saveButton = document.getElementById("save_btn");
    let clearButton = document.getElementById("clear_btn");
    saveButton.addEventListener("click", function () {
        let btnName = document.getElementById('value_submit').value;
        let ArrDomain = document.getElementById('value_domain').value;
        let max = document.querySelectorAll('#params').length;
        let ArrName = [], ArrValue = [];
        for (let start = 1; start <= Math.floor(max); start++) {
            ArrName[start - 1] = document.getElementById("name_" + start).value;
            ArrValue[start - 1] = document.getElementById("value_" + start).value;
        }
        chrome.storage.local.set({'ArrName': ArrName, 'ArrValue': ArrValue, 'btnName': btnName, 'ArrDomain': ArrDomain}, function () {
            console.log(ArrName, ArrValue, btnName, ArrDomain);
            alert("Обновление конфигурации выполнено успешно");
        });
    });
    clearButton.addEventListener("click", function () {
        Array.from(document.getElementsByTagName('input')).forEach(item => item.value = "");
        chrome.storage.local.clear(function () {
            alert("Очистка информации о конфигурации выполнена успешно");
        });
    });
    loadOption();
}

initPageContentAndListener();