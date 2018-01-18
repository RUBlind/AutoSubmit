document.getElementById("save_btn").onclick=function(){
  var ArrName  = new Array();
  var ArrValue = new Array();
  var btnName=document.getElementById('value_submit').value;
  var max=document.querySelectorAll('tbody > tr > td > input').length;
  for(var start = 1;start<=Math.floor(max/2);start++){
    ArrName[start-1]  = document.getElementById("name_"+start).value;
    ArrValue[start-1] = document.getElementById("value_"+start).value;
  }
  chrome.storage.local.set({'ArrName':ArrName,'ArrValue':ArrValue,'btnName':btnName},function(){
    console.log(ArrName,ArrValue,btnName);
    console.log("保存成功");
  });
};
document.getElementById("clear_btn").onclick=function(){
  Array.from(document.getElementsByTagName('input')).forEach(item => item.value="");
  chrome.storage.local.clear(function(){
    console.log("清除成功");
  });
};
function load_option(){
  chrome.storage.local.get(['ArrName','ArrValue','btnName'],function(valArray){
    var max=document.querySelectorAll('tbody > tr > td > input').length;
    for(var start = 1;start<=Math.floor(max/2);start++){
      document.getElementById("name_"+start).value=valArray.ArrName[start-1];
      document.getElementById("value_"+start).value=valArray.ArrValue[start-1];
    }
    document.getElementById('value_submit').value=valArray.btnName;
    console.log("加载成功");
  });
};
window.onload=load_option();