function time() {

  var date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();


  /**
    @desc Calculates the Seconds so that it doesn't show a single number i.e. "0"
    @param @x and time ()
    @return the time in correct format 00:00:00
  **/
  

  function simpleCalc(x) {
     x < 10 ? x = "0" + x : x;
     return x
  }


  /**
    @desc Adds the variables together in the correct time format
    @param  document.querySelector(".foota").innerHTML 
    @return the time in correct format 00:00:00
  **/
  document.querySelector(".hours").innerHTML = ` <span>${simpleCalc(hr)}</span> : <span>${simpleCalc(min)}</span> : <span>${simpleCalc(sec)}</span>`;

}

setInterval = setInterval(time, 1000);