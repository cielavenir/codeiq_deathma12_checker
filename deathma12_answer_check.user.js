// ==UserScript==
// @name        デスマコロシアム12解答チェック
// @description デスマコロシアム12解答チェック
// @include       http*://ideone.com/*
// @version     1.0.0
// @grant       none
// ==/UserScript==

window.document.onclick =  function(event){
  var output = document.getElementById("output-text");
  if (output == null) {
    return;
  }
  var answer = output.innerHTML;
  var expected = "abCDEfghIjklmnOpQrstuvwxyzabcDEFghiJklmnoPqRstuvwxyzabcdEFGhijKlmnopQrStuvwxyzabcdeFGHijkLmnopqRsTuvwxyzabcdefGHIjklMnopqrStUvwxyzabcdefgHIJklmNopqrsTuVwxyzabcdefghIJKlmnOpqrstUvWxyzabcdefghiJKLmnoPqrstuVwXyzabcdefghijKLMnopQrstuvWxYzabcdefghijkLMNopqRstuvwXyZabcdefghijklMNOpqrStuvwxYzabcdefghijklmNOPqrsTuvwxyZabcdefghijklmnOPQrstUvwxyzabcdefghijklmnoPQRstuVwxyzabcdefghijklmnopQRStuvWxyzabcdefghijklmnopqRSTuvwXyzabcdefghijklmnopqrSTUvwxYzabcdefghijklmnopqrsTUVwxyZabcdefghijklmnopqrstUVWxyzabcdefghijklmnopqrstuVWXyzabcdefghijklmnopqrstuvWXYzabcdefghijklmnopqrstuvwXYZ";
  if (answer == expected || answer == expected + "\n") {
    console.log("OK");
  } else {
    console.log("NG");
  }
}
