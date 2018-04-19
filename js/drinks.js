function randomDrink(data) {
  // for (i = 0; i < data.length; i++) {
  //     ret += `<div id='card->`
  //     ret += data[i]
  //     ret += `</div>`
  //   }

  var d = new Date();
  var n = d.getTime();

  var ret = `<div id='cards'>`
  ret += data[n % 999].FIELD5
  ret += `</div>`

  return ret;
}


const TEMP = document.getElementById("main")

window.onload = () => {

  retData = randomDrink(drinks)
  // retData = "michael was here"

  TEMP.innerHTML = retData

}
