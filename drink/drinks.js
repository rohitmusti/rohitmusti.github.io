function randomDrink(data) {
  var d = new Date();
  var n = d.getTime();

  var ret = `<li id='name'> Drink: `
  ret += data[n % data.length].FIELD1
  ret += `</li>`

  ret += `<li id='alc'> Percent Alcohol: `
  ret += data[n % data.length].FIELD2
  ret += `</li>`

  ret += `<li id='size'> Size (it matters): `
  ret += data[n % data.length].FIELD3
  ret += `</li>`

  ret += `<li id='price'> Price: `
  ret += data[n % data.length].FIELD4
  ret += `</li>`

  ret += `<li id='description'> Description: `
  ret += data[n % data.length].FIELD5
  ret += `</li>`

  return ret;
}


const TEMP = document.getElementById("drinks")

window.onload = () => {

  retData = randomDrink(drinks)

  TEMP.innerHTML = retData

}
