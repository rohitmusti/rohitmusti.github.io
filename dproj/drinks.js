const TEMP = document.getElementById("drinks")

function randomDrink(data) {
  var d = new Date();
  var l = data.length
  var n = d.getTime() % l;
  var sum = Math.floor(0);
  var tick = 0;

  var ret = `<div id='name'> <strong>Drink</strong>: `
  ret += data[n].FIELD1
  ret += `</div>`

  ret += `<div id='alc'> <strong>Percent Alcohol</strong>: `
  ret += data[n].FIELD2
  ret += `</div>`

  ret += `<div id='size'> <strong>Size (it matters)</strong>: `
  ret += data[n].FIELD4
  ret += `</div>`

  ret += `<div id='price'> <strong>Price</strong>: `
  ret += data[n].FIELD3
  ret += `</div>`

  ret += `<div id='description'> <strong>Description</strong>: `
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


  ret += `<div> Average price at this size: `
  ret += `$` + tempAverage
  ret += `</div>`

  TEMP.innerHTML = ret
}


function cheapDrink(data) {

  var d = new Date();
  var l = data.length
  var n = d.getTime() % l;
  var sum = Math.floor(0);
  var tick = 0;

  while (Number(data[n].FIELD3.substr(1, data[n].FIELD3.length)) > 6.5) {
    n++;
  }

  var ret = `<div id='name'> <strong>Drink</strong>: `
  ret += data[n].FIELD1
  ret += `</div>`

  ret += `<div id='alc'> <strong>Percent Alcohol</strong>: `
  ret += data[n].FIELD2
  ret += `</div>`

  ret += `<div id='size'> <strong>Size (it matters)</strong>: `
  ret += data[n].FIELD4
  ret += `</div>`

  ret += `<div id='price'> <strong>Price</strong>: `
  ret += data[n].FIELD3
  ret += `</div>`

  ret += `<div id='description'> <strong>Description</strong>: `
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


  ret += `<div> Average price at this size: `
  ret += `$` + tempAverage
  ret += `</div>`

  TEMP.innerHTML = ret
}
