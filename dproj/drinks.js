function randomDrink(data) {
  var d = new Date();
  var n = d.getTime();

  var ret = `<div id='name'> Drink: `
  ret += data[n % data.length].FIELD1
  ret += `</div>`

  ret += `<div id='alc'> Percent Alcohol: `
  ret += data[n % data.length].FIELD2
  ret += `</div>`

  ret += `<div id='size'> Size (it matters): `
  ret += data[n % data.length].FIELD4
  ret += `</div>`

  ret += `<div id='price'> Price: `
  ret += data[n % data.length].FIELD3
  ret += `</div>`

  ret += `<div id='description'> Description: `
  ret += data[n % data.length].FIELD5
  ret += `</div>`

  return ret;
}


const TEMP = document.getElementById("drinks")

window.onload = () => {

  retData = randomDrink(drinks)

  TEMP.innerHTML = retData

}
