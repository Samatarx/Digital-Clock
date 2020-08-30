function tikTok() {

  var date = new Date();

  let hr = date.getHours();

  let min = date.getMinutes();

  let sec = date.getSeconds();

  var x = 0

  function simpleCalc(x) {
    return x < 10 ? x = "0" + x : x;
  }

  document.querySelector(".foota").innerHTML = simpleCalc(hr) + ":" + simpleCalc(min) + ":" + simpleCalc(sec);

}

setInterval = setInterval(tikTok, 1000);