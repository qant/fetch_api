//Events
const loadTextBtn = document
  .getElementById("loadText")
  .addEventListener("click", loadText);
const loadJsonBtn = document
  .getElementById("loadJson")
  .addEventListener("click", loadJson);
const loadApiBtn = document
  .getElementById("loadApi")
  .addEventListener("click", loadText);

//Loaders
function loadJson() {
  fetch("empleados.json")
    .then(res => {
      return res.json();
    })
    .then(data => {
      showJSON(data);
    })
    .catch(err => {
      getError(err);
    });
}

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
    })
    .catch(function(err) {
      //if fech fail
      console.error(err);
    });
}

//Helpers

function getError(err) {
  console.error(err);
}

function showJSON(data) {
  console.log(data);
  let html = "";
  data.forEach(item => {
    html += `<li>Name:${item.nombre}</li>`;
    html += `<li>Position:${item.puesto}</li><hr>`;
  });
  document.getElementById("result").innerHTML = html;
}
