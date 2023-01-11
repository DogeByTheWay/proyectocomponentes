function post(clave, valor, body) {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("POST", `http://localhost:3000/${clave}/${valor}`);
    req.setRequestHeader("Content-type", "application/json;charset=utf-8");
    req.send(JSON.stringify(body));
    req.onload = function () {
      if (req.status == 200 || req.status == 201) {
        resolve(req.response);
      } else reject("Error:" + req.statusText);
    };
  });
}

function put(clave, valor, body) {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("PUT", `http://localhost:3000/${clave}/${valor}`);
    req.setRequestHeader("Content-type", "application/json;charset=utf-8");
    req.send(JSON.stringify(body));
    req.onload = function () {
      if (req.status == 200 || req.status == 201) {
        resolve(req.response);
      } else reject("Error:" + req.statusText);
    };
  });
}

function del(clave,valor) {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("DELETE", `http://localhost:3000/${clave}/${valor}`);
    req.setRequestHeader("Content-type", "application/json;charset=utf-8");
    req.send();
    req.onload = function () {
      if (req.status == 200 || req.status == 201) {
        resolve(req.response);
      } else {
        reject("Error:" + req.statusText);
      }
    };
  });
}

function getAll(clave) {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", `http://localhost:3000/${clave}`);
    req.setRequestHeader("Content-type", "application/json;charset=utf-8");
    req.send();
    req.onload = function () {
      if (req.status == 200 || req.status == 201) {
        resolve(req.response);
      } else reject("Error:" + req.statusText);
    };
  });
}

function getOne(clave,valor) {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", `http://localhost:3000/${clave}/${valor}`);
    //req.setRequestHeader("Content-type", "application/json;charset=utf-8");
    req.responseType = "json";
    req.send();
    req.onload = function () {
      if (req.status == 200 || req.status == 201) {
        resolve(req.response);
      } else reject("Error:" + req.statusText);
    };
  });
}

function patch(clave, valor, body) {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("PATCH", `http://localhost:3000/${clave}/${valor}`);
    req.setRequestHeader("Content-type", "application/json;charset=utf-8");
    req.send(JSON.stringify(body));
    req.onload = function () {
      if (req.status == 200 || req.status == 201) {
        resolve(req.response);
      } else reject("Error:" + req.statusText);
    };
  });
}