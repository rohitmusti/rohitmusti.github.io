const TEMP = document.getElementById("drinks")


function randomDrink(data) {
  var d = new Date();
  var l = data.length
  var n = d.getTime() % l;
  var sum = Math.floor(0);
  var tick = 0;

  var ret = `<div id='name'> Drink: `
  ret += data[n].FIELD1
  ret += `</div>`

  ret += `<div id='alc'> Percent Alcohol: `
  ret += data[n].FIELD2
  ret += `</div>`

  ret += `<div id='size'> Size (it matters): `
  ret += data[n].FIELD4
  ret += `</div>`

  ret += `<div id='price'> Price: `
  ret += data[n].FIELD3
  ret += `</div>`

  ret += `<div id='description'> Description: `
  ret += data[n].FIELD5
  ret += `</div> <br/>`

  for (i = 0; i < l; i++) {
    if (data[i].FIELD4 == data[n].FIELD4) {
      sum += Number(data[i].FIELD3.substr(1, data[i].FIELD3.length));
      tick++;
    }
  }
  var tempAverage = (sum/tick).toString()
  if (tempAverage.length > 5) {
    tempAverage = tempAverage.substr(0, 4)
  }
  if (tempAverage.length == 3) {
    tempAverage = tempAverage + "0"
  }
  if (tempAverage[2] == '.') {
    tempAverage = tempAverage + "0"
  }


  ret += `<p> Average price at this size: `
  ret += `$` + tempAverage
  ret += `</p>`

  TEMP.innerHTML = ret
}
