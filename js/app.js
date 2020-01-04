const loadTextBtn = document
  .getElementById("loadText")
  .addEventListener("click", loadText);
const loadJsonBtn = document
  .getElementById("loadJson")
  .addEventListener("click", loadText);
const loadApiBtn = document
  .getElementById("loadApi")
  .addEventListener("click", loadText);

function loadText() {
  fetch("datos.txt")
    .then(function(res) {
      //return Resolve and promise
      console.log(res);
      return res.text(); //methods in __proto__ text(), html(), json()... etc
    })
    .then(function(data) {
      //this then need for get data from promise
      //data from promise
      console.log(data);
      document.getElementById("result").innerHTML = data;
    });
}
