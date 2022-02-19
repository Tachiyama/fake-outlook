//head.pngの画像挿入
//document.querySelector("form")=instagram
//document.querySelector("div")=twitter

//use strict = 厳格モード

'use strict';
const imagePath = 'pic/head.png';
const imageUrl = chrome.runtime.getURL(imagePath);
const imgWithUrl = `<img src="${imageUrl}" style= "position: fixed; z-index: 1; width: 1600px; height: 150px; background-color: lightgray;"!important>`;
document.querySelector("div").insertAdjacentHTML("beforebegin", imgWithUrl);

//サイド
'use strict';
const imagePathtwo = 'pic/said.png';
const imageUrltwo = chrome.runtime.getURL(imagePathtwo);
const imgWithUrltwo = `<img src="${imageUrltwo}" style= "position: fixed; margin-right:200px; margin-left:-300px; margin-top:50px; width: 250px; height: 700px; background-color: lightgray;"!important>`;
var elements = document.getElementsByClassName('_1SP8R C3uDN j9XKR  ');
    elements[0].insertAdjacentHTML("afterbegin", imgWithUrltwo);

//メール風に宛先、件名等をつける
//document.querySelector("header ").insertAdjacentHTML('afterend', '<p>ランチを食べました</p style= "position: fixed; margin-right:200px; margin-left:-300px; margin-top:50px; width: 250px; height: 700px; background-color: lightgray;"!important>>');
document.querySelector("header ").insertAdjacentHTML('afterend', '<p style= "position: fixed; margin-right:0px; margin-left:200px; margin-top:-20px;"!important>はま寿司 &lt;hamazushi@gmai.com &gt;</p><p style= "position: fixed; margin-right:0px; margin-left:200px; margin-top:30px;"!important>【お知らせ】新ネタ販売のお知らせ');
var element = document.getElementsByClassName('_8Rm4L bLWKA  M9sTE _1gNme  L_LMM SgTZ1  Tgarh ePUX4 ');
  //インスタロゴ削除まで
  while(element.length !=  0){
    //インスタロゴ要素を削除
    //追記はここから
    console.log(element);
    element[0].parentNode.removeChild(element[0]);
}
// インスタ用
//要素の削除

//インスタロゴ要素を取得
var elements = document.getElementsByClassName('s4Iyt');
  //インスタロゴ削除まで
  while(elements.length != 0){
    //インスタロゴ要素を削除
    elements[0].parentNode.removeChild(elements[0]);
}

//メニューロゴ要素を取得
var elements = document.getElementsByClassName('J5g42');
  //メニューロゴ削除まで
  while(elements.length != 0){
    //メニューロゴ要素を削除
    elements[0].parentNode.removeChild(elements[0]);
}

//カメラロゴ要素を取得
var elements = document.getElementsByClassName('_8-yf5 ');
  //カメラロゴ削除まで
  while(elements.length != 0){
    //カメラロゴ要素を削除
    elements[0].parentNode.removeChild(elements[0]);
}
 

//一番上の要素を取得
var elements = document.getElementsByClassName('b5itu');
  //一番上の削除まで
  while(elements.length != 0){
    //一番上の要素を削除
    elements[0].parentNode.removeChild(elements[0]);
}

//一番上の要素を取得
  var elements = document.getElementsByClassName('MWDvN');
  //一番上の削除まで
  while(elements.length != 0){
    //一番上の要素を削除
    elements[0].parentNode.removeChild(elements[0]);
}

//一番上の要素を取得
  var elements = document.getElementsByClassName('_lz6s');
  //一番上の削除まで
  while(elements.length != 0){
    //一番上の要素を削除
    elements[0].parentNode.removeChild(elements[0]);
}


//右にあるおすすめアカウントを取得
  var elements = document.getElementsByClassName('COOzN MnWb5 YT6rB');
  //右にあるおすすめアカウントの削除まで
  while(elements.length != 0){
    //右にあるおすすめアカウントの要素を削除
    elements[0].parentNode.removeChild(elements[0]);
}


//ナビを取得
var elements = document.getElementsByClassName('NXc7H jLuN9');
//ナビの削除まで
while(elements.length != 0){
  //ナビの要素を削除
  elements[0].parentNode.removeChild(elements[0]);
}




//document.querySelector("css-1dbjc4n").innerHTML = "<h2>HAHAHAHAHAHAHAHAHAHAHAHAHAHAHA</span>";



//getElementById('id_Red')でvisual.htmlのidを取得onclickハンドラ
//chrome.tabs(API)を使いタブの作成をし、query({})の中は最近開いたタブを取得
/*
document.getElementById('id_Red').onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: setBackGroundColorRed
    });
  });
}
document.getElementById('id_Blue').onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: setBackGroundColorBlue
    });
  });
}
function setBackGroundColorRed(){
  document.body.style.backgroundColor = 'red';
}
function setBackGroundColorBlue(){
  document.body.style.backgroundColor = 'blue';
}
*/