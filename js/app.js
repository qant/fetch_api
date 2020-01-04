//Events
const loadTextBtn = document
  .getElementById("loadText")
  .addEventListener("click", loadText);
const loadJsonBtn = document
  .getElementById("loadJson")
  .addEventListener("click", loadJson);
const loadApiBtn = document
  .getElementById("loadApi")
  .addEventListener("click", loadApi);

//Loaders
function loadApi() {
  fetch("https://picsum.photos/list")
    .then(response => response.json())
    .then(data => showImages(data))
    .catch(error => getError(error));
}

function loadJson() {
  fetch("empleados.json")
    .then(res => res.json())
    .then(data => showJSON(data))
    .catch(err => getError(err));
}

function loadText() {
  fetch("datos.txt")
    .then(
      res =>
        //return Resolve and promise
        res.text() //methods in __proto__ text(), html(), json()... etc
    )
    .then(
      data =>
        //this then need for get data from promise
        //data from promise
        (document.getElementById("result").innerHTML = data)
    )
    .catch(err =>
      //if fech fail
      console.error(err)
    );
}

//Helpers

function showImages(data) {
  console.log(data);
  let html = "";
  data.forEach(image => {
    console.log(image);

    html += `<li>${image.author} <a href="${image.post_url}" alt="${image.filename}" target="_blank">${image.filename}</a></li>`;
  });
  document.getElementById("result").innerHTML = html;
}

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
