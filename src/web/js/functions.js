var userActive = 0;  //IMPORTANTE
var carritoActivoId = 0;

function setLocalStorage(respuesta) {
  let storage=JSON.parse(respuesta)
  localStorage.setItem("idUsuario", storage.idUsuario);
  localStorage.setItem("token", storage.token);
  localStorage.setItem("tokenRefresco", storage.tokenRefresco);
}

function getDato(dato) {
  let item=localStorage.getItem(dato);
  return item;
}

function abrirCesta() {
  let cesta = document.getElementById("cesta");
  cesta.open ? cesta.close() : cesta.showModal(), cargaPrecioCantidad();
}
function abrirProducto() {
  let producto = document.getElementById("producto");
  producto.open ? producto.close() : producto.showModal();
}
function abrirLogin() {
  let login = document.getElementById("login");
  login.open ? login.close() : login.showModal();
}
function abrirLogout() {
  let logout = document.getElementById("logout");
  logout.open ? logout.close() : logout.showModal();
}
function abrirPago() {
  let pago = document.getElementById("pago");
  pago.open ? pago.close() : pago.showModal();
}
function abrirHistorial() {
  let historial = document.getElementById("listaCesta");
  historial.open ? historial.close() : historial.showModal();
}

function quitaMenu() {
  let nav = document.getElementsByClassName("c-nav")[0];
  nav.style = "display:none;";
  document.getElementsByTagName("body")[0].style = "overflow:auto;";
}

function activaFormulario() {
  let bloque = document.getElementsByClassName("c-paymentform__form")[0];
  bloque.style.display = "block";
}

function desactivaFormulario() {
  let bloque = document.getElementsByClassName("c-paymentform__form")[0];
  bloque.style.display = "none";
}

window.onload = () => {
  alreadyLoggedChecker(); //IMPORTANTE
  cargacesta();
  cargaLogin();
  cargarContenido();
  cargaPago();
  getAll("categorias")
    .then((a) => pintarCategorias(a))

    .catch((a) => console.log(a));
  getAll("articulos")
    .then((of) => pintarOfertas(of))
    .catch((of) => console.log(of))
  document.getElementById("burger").onmouseenter = function () {
    let nav = document.getElementsByClassName("c-nav")[0];
    nav.classList.toggle("c-nav--visible");
    nav.onmouseleave = () => {
      nav.classList.toggle("c-nav--visible");
    };
  };
  document.getElementById("btnIniciarSesion").onclick = recogeDatosLogin;
  document.getElementById("burger").onmouseleave = function () {
    let nav = document.getElementsByClassName("c-nav")[0];
    nav.classList.toggle("c-nav--visible");
  };
  document.getElementById("cerrarCesta").onclick = () => {
    document.getElementById("cesta").close();
  };

  document.getElementById("cestaBtn").onclick = isLogedToCarrito;
  document.getElementById("loginBtn").onclick = abrirLogin;
  document.getElementById("compraBtn").onclick = tieneArticulos;
  document.getElementById("btn_pagar").onclick = actualizaCarroPagado;
  document.getElementById("historyFeat").onclick = () => { cargaHistorial(); abrirHistorial() };
  document.getElementById("volverMenu").onclick = function () {

    cargarContenido();
    getAll("categorias")
      .then((a) => pintarCategorias(a))
      .catch((a) => console.log(a));
    getAll("articulos")
      .then((of) => pintarOfertas(of))
      .catch((of) => console.log(of))
  };
};
function tieneArticulos() {
  let divsProductos = document.querySelectorAll(".valores")
  if (divsProductos.length != 0) {
    abrirPago();
  } else {
    alert("No hay articulos en el carrito.")
  }
} /*IMPORTANTE*/
function actualizaCarroPagado() {
  getOne("carritos/activo/usuario/true", userActive.idUsuario).then(a => { patch("carritos", a[0].id, { estado: "pagado", activo: false }); location.reload(true) })
}

function cerrarHistorial() {
  document.getElementById("listaCesta").close();
}
//IMPORTANTE
function alreadyLoggedChecker() {
  let usuario=getDato("idUsuario");
  let token=getDato("token");
  let tokenRefresco=getDato("tokenRefresco");
  if(usuario !=null){
    validateToken("token",token)
    .then(pintaDatosUsuario())
    .catch(validateToken("tokenrefresco",tokenRefresco)
    .catch(e=>{alert("Su sesion ha expirado");cierraSesion()})
    );
    
  }
}

function pintaDatosUsuario() {
  getOne("user",getDato("idUsuario")).then(usuario =>{userActive=usuario;
    cargaLogout(usuario);
    document.getElementById("loginBtn").innerHTML = `<i class="fa-solid fa-user mr-3"></i>${usuario.nombre}`;
    document.getElementById("historyFeat").style.display = "block";
    document.getElementById("loginBtn").onclick = abrirLogout;
    cargaCarritoActivo(usuario.id);
  })
  
}

function cargaPrecioCantidad() {
  let articulos = 0;
  let total = 0;
  let divsProductos = document.querySelectorAll(".valores")
  let precios = document.querySelectorAll(".precio")
  precios.forEach(precio => total += parseInt(precio.textContent.slice(0, -1)))
  console.log(total)
  divsProductos.forEach(input => articulos += parseInt(input.value));
  document.getElementById("cantidadArticulos").innerHTML = articulos + " articulos";
  document.getElementById("resumenArticulos").innerHTML = articulos + " articulos";
  document.getElementById("precioTotal").innerHTML = total + "€";
  document.getElementById("precioTotalResumen").innerHTML = total + "€";
  let iva = total * 0.21;
  document.getElementById("tarifa").innerHTML = iva + "€";
  document.getElementById("total").innerHTML = total + iva + "€";
}
//IMPORTANTE
function recogeDatosLogin() {
  let user = document.getElementById("emailUser").value;
  let passwd = document.getElementById("passwdUser").value;
  let body = {'nombre': user, 'password': passwd};
  post("login", body).then(res => {setLocalStorage(res);location.reload()}).catch(e => alert(e));
}

function pintarCategorias(a) {
  let c_nav = document.querySelector(".c-nav");
  let categoriasTop = document.getElementById("categoriasTop");
  c_nav.innerHTML = "";
  let texto = "";
  let res = "";
  JSON.parse(a).forEach((cat) => {
    texto += `<li class="c-nav__item categoria" id="${"c" + cat.id}"><a class="cursor-pointer">${cat.nombre}</a>
    <ul id="${"s" + cat.id}">
    ${pintaSubcategorias(cat.id)}
    </ul>
    </li>`;
    res += `<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-teal-700 dark:border-teal-300">
            <a id="${"c" + cat.id}" class="categoria"><img class="rounded-t-lg" src="assets/img/${cat.id}.jpg" alt="" /></a>
            <div class="p-5">
            <a id="${"c" + cat.id}" class="categoria"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">${cat.nombre}</h5></a>               
            </div>
        </div>`;
  });
  c_nav.innerHTML = texto;
  categoriasTop.innerHTML = res;
  let items = document.getElementsByClassName("categoria");
  Array.from(items).forEach((item) => {
    item.onclick = () => {
      console.log("saber item id" + item.id);
      let categoria = item.textContent.split(" ")[0];
      console.log("saber text content " + item.textContent)

      obtenerArticulos(item.id, categoria);
    };
  });
  document.getElementById("c4").classList.add("c-nav__item--bottom");
}

function pintaSubcategorias(categoria) {

  getAll("subcategorias")
    .then((ArraySubcategoria) => comprobarSubcategoria(ArraySubcategoria, categoria) //console.log("muestrasubcategoria "+ deUnaenUna.nombre+ "id de catgoria:"+deUnaenUna.categoria))
    )
    .catch();

}

function comprobarSubcategoria(Array2, idCategoria) {

  let encontrado = JSON.parse(Array2).filter((sub => sub.categoria == idCategoria));

  let subcategoria = document.getElementById("s" + idCategoria);
  let resultado = "";

  Array.from(encontrado).forEach((sub) => {
    resultado += `
    <li class="c-nav__item subcategoria" id="sub${sub.id}">${sub.nombre}
    </li>
   `;
  })
  subcategoria.innerHTML = resultado;
  let subCategorias = document.getElementsByClassName("subcategoria");
  Array.from(subCategorias).forEach((sub) => {
    sub.onclick = () => {
      console.log("saber subcategoria id: "+sub.id);
     
      console.log("saber subcategoria "+sub.textContent)

      obtenerArticulos(sub.id,sub.textContent);
    };
  });

}

function pintarOfertas(of) {

  let encontrado=  JSON.parse(of).filter((ofertas)=>ofertas.oferta==true);
  let ofertasFlash = document.getElementById("ofertasFlash");

  let resultado = "";
  encontrado.forEach((ofertas) => {
    resultado += `
<div class="c-card">
  
   <img id="${ofertas.id}"  src="assets/img/${ofertas.id}.jpg" class="c-card__img cursor-pointer">
   <div class="c-card__body">
     <h5 class="g--font-size-s">${ofertas.nombre}</h5>
     <p class="g--color-rojo-4">-${ofertas.descuento}%</p>
     <b>${ofertas.precio - (ofertas.precio * (ofertas.descuento / 100))}€ PVPR  <del>${ofertas.precio}€</del></b>
     <a class="c-button c-button--size-stretch g--margin-top-1" id="${ofertas.id}">Añadir al carrito</a>
   </div>
  
</div>
`;
  })
  ofertasFlash.innerHTML = resultado;

  Array.from(ofertasFlash.getElementsByClassName("c-card__img")).forEach((e) =>
    e.addEventListener("click", () => {console.log("buscar"+e.id);
      buscarArticuloPorId(e.id);
      
    })
    
  );
  Array.from(ofertasFlash.getElementsByTagName("a")).forEach((e) =>
    e.addEventListener("click", () => isLogedCardToCarrito(e.id))
  );
  //console.log(art);
}
function obtenerArticulos(id, nombreCategoria) {
  if (id.substring(0, 1) === "c") {
    console.log("entra aqui1");
    getOnePage(`articulos/categoriaPage`, id.substring(1)).then(
      (articulos_headerArray) => {
        pintarPaginacion(articulos_headerArray, nombreCategoria);
      }
    );

  }   else if(id.substring(0, 3) === "sub"){
    console.log("entra aqui2");
    getAll(`articulos/subcategoria/${id.substring(3)}`).then(
      (a) => {
        pintarArticulos(JSON.parse(a), nombreCategoria);
      }
    );
  } 
  else {
    console.log("entra aqui3")
    getAll(`articulos/subcategoria/${id.substring(1)}`).then((a) => {
      pintarArticulos(JSON.parse(a), nombreCategoria);
    });
  }
}

function obtenerArticulosDesdeUrlHeader(url, nombreCategoria) {
  getOnePageWithUrl(url).then((articulos_headerArray) => {
    pintarPaginacion(articulos_headerArray, nombreCategoria);
  });
}

function pintarPaginacion(articulos_headerArray, nombreCategoria) {
  let header = articulos_headerArray.pop();
  let prev = false;
  let next = false;
  let urlFirst, urlPrev, urlNext, urlLast;
  if (header.find((a) => a.match(/.*prev.*/))) {
    prev = true;
  }
  if (header.find((a) => a.match(/.*next.*/))) {
    next = true;
  }
  let textoPaginacion = `<div id="paginacion" class="m-2">
                  <ul class="pagination flex flex-row justify-center gap-4">`;
  header.forEach((item) => {
    if (item.match("first")) {
      let regex = /http.+=8/;
      let urlPageFirst = item.match(regex);
      textoPaginacion += `<li  class="rounded-sm cursor-pointer g--background-color-principal-0 px-2 shadow-md"><button id="urlFirst">Primero</button></li> `;
      urlFirst = urlPageFirst[0];
      if (!prev) {
        textoPaginacion += `<li class="rounded-sm px-2 shadow-md g--background-color-principal-0 opacity-25">&lt&lt</li>`;
      }
    }
    if (item.match("prev")) {
      let regex = /http.+=8/;
      let urlPagePrev = item.match(regex);
      textoPaginacion += `<li  class="rounded-sm cursor-pointer g--background-color-principal-0 px-2 shadow-md"><button id="urlPrev">&lt&lt</button></li>`;
      urlPrev = urlPagePrev[0];
    }
    if (item.match("next")) {
      let regex = /http.+=8/;
      let urlPageNext = item.match(regex);
      textoPaginacion += `<li  class="rounded-sm cursor-pointer g--background-color-principal-0 px-2 shadow-md"><button id="urlNext">&gt&gt</button></li>`;
      urlNext = urlPageNext[0];
    }
    if (item.match("last")) {
      if (!next) {
        textoPaginacion += `<li class="rounded-sm px-2 shadow-md g--background-color-principal-0 opacity-25">&gt&gt</li>`;
      }
      let regex = /http.+=8/;
      let urlPageLast = item.match(regex);
      textoPaginacion += `<li class="rounded-sm cursor-pointer px-2 g--background-color-principal-0 shadow-md"><button id="urlLast">Último</button></li>`;
      urlLast = urlPageLast[0];
    }
  });
  textoPaginacion += `</ul>
      </div>`;
  pintarArticulos(articulos_headerArray, nombreCategoria, textoPaginacion, urlFirst, urlPrev, urlNext, urlLast);
}

function pintarArticulos(articulos, nombreCategoria, textoPaginacion, urlFirst, urlPrev, urlNext, urlLast) {
  let main = document.getElementById("contenedorTodo");
  main.innerHTML = "";
  let texto = `
    <section class="p-5 pl-40 pr-40">
    <b class="g--font-size-xl">${nombreCategoria}</b>
    <div class="l-horizontal-space-between">`;
  articulos.forEach((item) => {
    texto += `<div class="c-card">    
                <img id="${item.id} " src="assets/img/${item.id}.jpg" class="cursor:pointer c-card__img">
                <div class="c-card__body">
                  <h5 class="g--font-size-s">${item.nombre}</h5>
                  ${item.oferta==true ? `<p class="g--color-rojo-4">`+item.descuento+" %</p>" : ""}
                  <b>${item.oferta==true ?      item.precio - (item.precio * (item.descuento / 100)) + `€ PVPR <del>${item.precio}€</del>`: item.precio+ "€ PVPR"}</b>
                  <a id=${item.id} class="c-button c-button--size-stretch cursor:pointer g--margin-top-1">Añadir al carrito</a>
                </div>   
              </div>`;
  });
  texto += "</section>";
  main.innerHTML = texto + textoPaginacion;
  if (typeof urlFirst !== "undefined") {
    document.getElementById("urlFirst").addEventListener("click", () => {
      obtenerArticulosDesdeUrlHeader(urlFirst, nombreCategoria);
    });
  }
  if (typeof urlPrev !== "undefined") {
    document
      .getElementById("urlPrev")
      .addEventListener("click", () =>
        obtenerArticulosDesdeUrlHeader(urlPrev, nombreCategoria)
      );
  }
  if (typeof urlNext !== "undefined") {
    document
      .getElementById("urlNext")
      .addEventListener("click", () =>
        obtenerArticulosDesdeUrlHeader(urlNext, nombreCategoria)
      );
  }
  if (typeof urlLast !== "undefined") {
    document
      .getElementById("urlLast")
      .addEventListener("click", () =>
        obtenerArticulosDesdeUrlHeader(urlLast, nombreCategoria)
      );
  }
  Array.from(main.getElementsByClassName("c-card__img")).forEach((e) =>
    e.addEventListener("click", () => buscarArticuloPorId(e.id))
  );
  Array.from(main.getElementsByTagName("a")).forEach((e) =>
    e.addEventListener("click", () => isLogedCardToCarrito(e.id))
  );
}

function isLogedCardToCarrito(articuloId) {
  let usuario=getDato("idUsuario");
  let token=getDato("token");
  let tokenRefresco=getDato("tokenRefresco");
  if(usuario !=undefined){
    validateToken("token",token)
    .then(buscarCarritoAModificar(articuloId, usuario))
    .catch(e=>{validateToken("tokenrefresco",tokenRefresco)
    .then(v=>{validateToken("token",usuario);buscarCarritoAModificar(articuloId, usuario)})
    .catch(e=>{alert("Tu sesión ha expirado, vuelve a iniciarte sesion");cierraSesion()})})
  }
}
function isLogedToCarrito() {
  let usuario=getDato("idUsuario");
  let token=getDato("token");
  let tokenRefresco=getDato("tokenRefresco");
  if(usuario !=undefined){
    validateToken("token",token)
    .then(abrirCesta())
    .catch(e=>{validateToken("tokenrefresco",tokenRefresco)
    .then(getOne("token",usuario)
    .then(respuesta=>{setLocalStorage(respuesta);abrirCesta()})
    )
    .catch(e=>{alert("Tu sesión ha expirado, vuelve a iniciarte sesion");cierraSesion()})})
  }
}
function buscarCarritoAModificar(idArticulo, idUsuario) {
  getOneRow("carritos/activo/usuario", true, idUsuario)
    .then((carrito) => buscarArticuloEnProductos(carrito[0].id, idArticulo));
}

function crearCarrito(id) {
  let carro = {
    idUsuario: id,
    estado: "pendiente",
    activo: true,
  };
  post("carritos", carro).then(
    getOne("carritos/activo/usuario/true", userActive.idUsuario).then(a => carritoActivoId = a[0].id))
}

function buscarArticuloEnProductos(idCarrito, idArticulo) {
  getOneRow("productos/idCarrito/idArticulo", idCarrito, idArticulo).then(
    (producto) =>
      producto[0]
        ? modificarProducto(idCarrito, idArticulo)
        : anyadirProducto(idCarrito, idArticulo)
  );
}

function anyadirProducto(idCarrito, idArticulo) {
  let body = {
    idCarrito: idCarrito,
    idArticulo: parseInt(idArticulo),
    unidades: 1,
  };
  post("productos", body)
    .then(anyadirAcarrito(body))
    .catch((a) => console.log(a));
}

function anyadirAcarrito(item) {
  getOne("articulos", item.idArticulo)
    .then(a => {
      document.getElementById("resumenProductos").innerHTML += `
<div id="p${a.id}" class="flex items-center hover:bg-teal-100 -mx-8 px-6 py-5">
<div class="flex w-2/5"> 
            <div class="w-40 min-w-max">
              <img class="h-24" src="./assets/img/${a.id}.jpg" alt="">
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="g--font-family-principal text-sm">${a.nombre}</span>
              <span class="g--font-family-principal g--color-principal-5 text-xs">Portatil</span>
              <a onclick="eliminaDelCarrito(${a.id})" class="g--font-family-principal outline-0 hover:text-red-500 text-gray-500 text-xs cursor-pointer">Eliminar</a>
            </div>
          </div>
          <div class="flex justify-center items-center w-1/5">
          <a class="cursor-pointer" onclick="restaUnidad(${a.id})">
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </a>
            <input id="unidadesProducto${a.id}" class="mx-2 border g--font-family-principal g--color-principal-5 text-center w-8 valores" type="text" value="${item.unidades}" readonly="readonly" >
          <a class="cursor-pointer" onclick="sumaUnidad(${a.id})">
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </a>
          </div>
          <span id="multiplicadorPrecioUD${a.id}" class="text-center w-1/5 g--font-family-principal text-sm">${a.oferta==true ? a.precio - (a.precio * (a.descuento / 100)):a.precio}€</span>
          <span id="multiplicadorPrecio${a.id}" class="text-center w-1/5 g--font-family-principal text-sm precio">${a.oferta==true ? (a.precio - (a.precio * (a.descuento / 100)))*item.unidades : a.precio*item.unidades}€</span>
</div>
</div>`;
      cargaPrecioCantidad()
    });
}
function sumaUnidad(id) {
  let input = document.getElementById("unidadesProducto" + id);
  console.log(input)
  input.value = parseInt(input.value) + 1;
  tiemporeal(carritoActivoId, id, input.value);
}
function restaUnidad(id) {
  let input = document.getElementById("unidadesProducto" + id);
  if (input.value == 1) {
    eliminaDelCarrito(id);
  }
  else {
    input.value = parseInt(input.value) - 1;
    tiemporeal(carritoActivoId, id, input.value);
  }
}
function tiemporeal(producto, articulo, unidades) {
  getOne("productos/idCarrito/idArticulo", producto + "/" + articulo).then(a => patch("productos", a[0].id, { 'unidades': parseInt(unidades) })
    .then(b => {
      let precios = document.getElementById(`multiplicadorPrecio${articulo}`);
      let precioUD = document.getElementById(`multiplicadorPrecioUD${articulo}`);
      precios.innerHTML = parseInt(precioUD.textContent.slice(0, -1) * unidades) + "€";
      cargaPrecioCantidad()
    }
    ))
}
function eliminaDelCarrito(item) {
  getOne("productos/idArticulo", item)
    .then(a => {
      del("productos", a[0].id)
        .then(document.getElementById(`p${a[0].idArticulo}`).remove()); cargaPrecioCantidad()
    })
}
function modificarProducto(producto, articulo) {
  getOne("productos/idCarrito/idArticulo", producto + "/" + articulo).then(a => patch("productos", a[0].id, { 'unidades': a[0].unidades + 1 })
    .then(b => {
      let input = document.getElementById(`unidadesProducto${articulo}`);
      input.value = parseInt(a[0].unidades) + 1;
      let precios = document.getElementById(`multiplicadorPrecio${articulo}`);
      let precioUD = document.getElementById(`multiplicadorPrecioUD${articulo}`);
      precios.innerHTML = parseInt(precioUD.textContent.slice(0, -1) * input.value) + "€";
    }
    ))
}

function eliminaCarrito(id) {
  getAll(`productos/idCarrito/${id}`)
    .then(a =>JSON.parse(a).forEach(producto=>del(`productos`, producto.id)))
    .then(del("carritos", id).then(cargaHistorial())) 
    }
function cargaHistorial() {
        getAll(`carritos/idUsuario/${userActive.idUsuario}`).then(a => cargaCarritosUsuario(a));
        document.getElementById("listaCesta").innerHTML = `
   <div>
     <b class="g--font-size-2xl">Lista de Carritos </b>
     <p><b class="g--font-size-xl">Pendientes</b></p>
     <div class="l-vertical">
      <div class="c-listaCarrito">
         <table class="c-listaCarrito__body" border=1 id="pendienteHistorial">            
         </table>
       </div>
     </div>
     <p><b class="g--font-size-xl">Realizados</b></p>
     <div class="l-vertical">
         <div class="c-listaCarrito">
             <table class="c-listaCarrito__body" border=1 id="pagadoHistorial">                     
             </table>
         </div>
       </div>
       <button onclick="cerrarHistorial()">Volver al Inicio</button>
     </div>
   `;

      }
function cargaCarritosUsuario(a) {

        let pendiente = JSON.parse(a).filter(encontrado => encontrado.estado == "pendiente");
        let pagado = JSON.parse(a).filter(encontrado => encontrado.estado == "pagado");

        pendiente.forEach(carrito => {
          document.getElementById("pendienteHistorial").innerHTML += `
     <tr class="c-listaCarrito__item">
     <td>Nº Cesta: ${carrito.id}</td>
     <td><button class="c-button c-button--size-stretch" onclick="recuperaCarritoBoton(${carrito.id})">Recuperar carrito</button></td>
     <td><button class="c-button c-button--size-stretch" onclick="eliminaCarrito(${carrito.id});">Eliminar carrito</button></td>
     </tr> 
   `;
        });


        pagado.forEach(carrito => {
          document.getElementById("pagadoHistorial").innerHTML += `
   <tr class="c-listaCarrito__item">
   <td>Nº Cesta: ${carrito.id}</td>
   <td><button class="c-button c-button--size-stretch" onclick="recompra(${carrito.id})">Volver a comprar</button></td>
 </tr>    `;
        });

      }
function recuperaDatosCarrito(id) {
        getAll(`productos/idCarrito/${id}`).then(a => {
          document.getElementById("resumenProductos").innerHTML = "";
          JSON.parse(a).forEach(producto => anyadirAcarrito(producto))
        })
      }
function recompra(id) {
        crearCarrito(userActive.idUsuario);
        patch("carritos", carritoActivoId, { activo: false })
          .then(getOne("carritos/activo/usuario/true", userActive.idUsuario).then(carro => {
            getAll(`productos/idCarrito/${id}`).then(a => {
              document.getElementById("resumenProductos").innerHTML = "";
              JSON.parse(a).forEach(producto => { anyadirProducto(carro[0].id, producto.id); anyadirAcarrito(producto); })
            })
          }))
          cargaHistorial()
      }

function recuperaCarritoBoton(id) {
        patch(`carritos`, id, { activo: true })
          .then(patch(`carritos`, carritoActivoId, { activo: false })
            .then(getAll(`productos/idCarrito/${id}`).then(a => {
              document.getElementById("resumenProductos").innerHTML = "";
              JSON.parse(a).forEach(producto => anyadirAcarrito(producto));
              carritoActivoId = id;
            })))
      }

function pintaCarritoActivo(a) {
        JSON.parse(a).forEach(articulo => { buscarArticuloEnProductos(articulo.idCarrito, articulo.idArticulo) });
      }
  //IMPORTANTE
function cargaLogout(usuario) {
          document.getElementById("logout").innerHTML = `<div>
  <b class="g--font-size-2xl text-emerald-900">DATOS USUARIO <br><br>
  <p><b class="g--font-size-xl text-emerald-900">Nombre</b></p>
  <div class="l-vertical">
   <div class="c-listaCarrito text-emerald-600">
      ${usuario.nombre.split("@")[0].toUpperCase()}
    </div>
  </div>
  <br>
  <p><b class="g--font-size-xl text-emerald-900">Correo</b></p>
  <div class="l-vertical">
   <div class="c-listaCarrito text-emerald-600">
      ${usuario.nombre}
    </div>
  </div><br>
    <a class="c-button" onclick="cierraSesion()">Cierra sesion</a>
  </div>`

      }
function cargaLogin() {
        document.getElementById("login").innerHTML = `
  <div class="l-flex l-flex--align-items-center l-flex--justify-content-center">
    <div class="c-login">
      <div class="l-login-tarjeta">
        <form class="c-form">
          <div class="c-form__input">
            <i class="c-form__icon fas fa-user"></i>
            <input type="text" class="c-form__text" id="emailUser" placeholder="Email">
          </div>
          <div class="c-form__input">
            <i class="c-form__icon fas fa-lock"></i>
            <input type="password" class="c-form__text" id="passwdUser" placeholder="Password">
          </div>
          <a class="c-button--login" id="btnIniciarSesion">
            <span class="c-button--text">Iniciar Sesión</span>
            <i class="c-button--icon fas fa-chevron-right"></i>
          </a>				
        </form>
        <div class="c-social">
          <h3 class="g--font-family-principal" >log in via</h3>
          <div class="l-flex l-flex--align-items-center l-flex--justify-content-center">
            <a href="#" class="c-social__icon fab fa-instagram"></a>
            <a href="#" class="c-social__icon fab fa-facebook"></a>
            <a href="#" class="c-social__icon fab fa-twitter"></a>
          </div>
        </div>
      </div>
      <div class="c-login-mosaico">
        <span class="c-login-mosaico__area c-login-mosaico__area--forma4"></span>
        <span class="c-login-mosaico__area c-login-mosaico__area--forma3"></span>		
        <span class="c-login-mosaico__area c-login-mosaico__area--forma2"></span>
        <span class="c-login-mosaico__area c-login-mosaico__area--forma1"></span>
      </div>		
    </div>
  </div>`;
      }
//IMPORTANTE
function cierraSesion() {
    localStorage.clear();
    location.reload();
}
function cargaCarritoActivo(id) {
    /*getOne("carritos/activo/usuario/true", id)
            .then(activo => {
              console.log(a)
              if (activo.length != 0) {
                carritoActivoId = activo[0].id;
                recuperaDatosCarrito(activo[0].id);
              } else {
                crearCarrito(a[0].id);
              }
            })*/
}

function cargacesta() {
        document.getElementById(
          "cesta"
        ).innerHTML += `<div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="g--font-family-principal g--color-principal-5 text-2xl">Cesta de la compra</h1>
          <h2 id="cantidadArticulos" class="g--font-family-principal g--color-principal-5 text-2xl">0 Articulos</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="g--font-family-principal text-gray-600 text-xs uppercase w-2/5">Detalle Producto</h3>
          <h3 class="g--font-family-principal text-center text-gray-600 text-xs uppercase w-1/5 text-center">Cantidad</h3>
          <h3 class="g--font-family-principal text-center text-gray-600 text-xs uppercase w-1/5 text-center">Precio</h3>
          <h3 class="g--font-family-principal text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        <div id="resumenProductos"></div>
        <button id="cerrarCesta" class="flex g--color-principal-5 g--font-family-principal text-sm mt-10">
          <svg class="fill-current mr-2 g--color-principal-5 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continua llenando la Cesta
        </button>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="g--font-family-principal g--color-principal-5 text-2xl border-b pb-8">Resumen del pedido
      </h1>
        <div class="flex justify-between mt-10 mb-5">
          <span id="resumenArticulos" class="g--font-family-principal text-sm uppercase">0 Articulos</span>
          <span class="g--font-family-principal text-sm" id="precioTotal">0€</span>
        </div>
        <div>
          <label class="g--font-family-principal inline-block mb-3 text-sm uppercase">Metodo de envio</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Envio Standard  - €10.00</option>
          </select>
          <p class="g--font-family-principal g--color-principal-5" >Entrega Martes, 14 de Octubre</p>
        </div>
        <div class="py-10">
          <label for="promo" class="g--font-family-principal inline-block mb-3 text-sm uppercase">Codigo Promocion</label>
          <input type="text" id="promo" placeholder="Introduce tu Codigo" class="p-2 text-sm w-full">
        </div>
        <button class="bg-amber-500 hover:bg-amber-400 px-5 rounded py-2 text-sm text-white uppercase">Probar Codigo</button>
        <div class="border-t mt-8">
          <div class="flex justify-between g--font-family-principal py-6 text-sm uppercase">
            <span>Coste Total</span>
            <span id="precioTotalResumen">€0</span>
          </div>
          <button id="compraBtn" class="g--background-color-principal-5 hover:bg-teal-700 py-3 text-sm text-white uppercase w-full rounded-md">Ir a pago</button>
        </div>
      </div>

    </div>
  </div>`;
      }
function buscarArticuloPorId(idArticulo) {
        getOne("articulos", idArticulo)
          .then((a) => {console.log(a);
            buscarSubcategoriaNombre(a);})
          .catch((e) => console.log(e));
      }
function buscarSubcategoriaNombre(articulo) {
        getOne("subcategorias", articulo.subcategoria)
          .then((a) => cargarProducto(articulo, a.nombre))
          .catch((e) => console.log(e));
      }
function cargarProducto(articulo, subcategoriaNombre) {
        let texto = "";
        texto += `<button id="cerrarProducto" class="flex outline-0 g--color-principal-5 g--font-family-principal text-sm ml-40">      
    <svg class="fill-current mr-2 g--color-principal-5 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
    Volver a lista de productos
  </button>  
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="./assets/img/${articulo.id}.jpg">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm g--color-principal-5 tracking-widest">${subcategoriaNombre}</h2>
        <h1 class="text-gray-900 text-3xl title-font mb-1">${articulo.nombre}</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class= g--color-principal-5 ml-3">Impacto Medioambiental</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-2 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-2 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed"></p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
          <div class="flex">
            <span class="mr-3"></span>
          </div>
          <div class="flex ml-6 items-center">
            <span class="mr-3"></span>
            <div class="relative">              
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">                
              </span>
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">${articulo.oferta==true ?      articulo.precio - (articulo.precio * (articulo.descuento / 100)):articulo.precio}€</span>

          <button id="${articulo.id}"class="flex ml-auto text-white g--background-color-principal-5 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-400 rounded">Añadir al Carrito</button>
        
          </div>
      </div>
      <div class="flex flex-col w-full">
        <div>
          <h5 class="mt-8 text-lg font-bold">Descripcion del Producto</h5>      
          <hr>   
        </div>
        <div class="mt-5">
          <ul>
          <li>${articulo.descripcion}</li>            
          </ul>
        </div>
      </div>
    </div>
  </div>`;
        let detalleProducto = document.getElementById("producto");
        detalleProducto.innerHTML = texto;
        Array.from(detalleProducto.getElementsByTagName("button"))[1].onclick = () =>
          isLogedCardToCarrito(articulo.id);
        document.getElementById("cerrarProducto").onclick = () => {
          document.getElementById("producto").close();
        };
        abrirProducto();
      }

function cargarContenido() {
        document.getElementById("contenedorTodo").innerHTML = `<section>
  <article class="flex flex-row-reverse items-center p-5 pl-40 pr-40 ">
      <div class="text-right w-1/2">
          <h1 class="text-4xl">Compra la tecnologia que ayuda al medioambiante</h1>
          <p class="my-5 mb-7 text-l">
              Nuestra tienda contiene los productos que siempre has querido pero ahora de forma
              sostenible y ofreciendo el mismo rendimiento.
          </p>
          <a class="c-button cursor-pointer">Saber más</a>
      </div>
      <div class="w-1/2">
          <img class="w-full" src="assets/img/refurbished.png" alt="Imagen reciclaje venta">
      </div>
  </article>
</section>
<hr>
<section class="p-5 pl-40 pr-40">
<p class="g--font-size-2xl g--margin-bottom-3">Ofertas</p>
<div class="l-horizontal-space-between" id="ofertasFlash">
 
</div>   
 
</section>

<div class="p-5 pl-40 pr-40">
  <p class="text-2xl g--margin-bottom-3">Categorias TOP</p>
  <div class="flex justify-between items-center space-x-4" id="categoriasTop">
  
  </div>
</div>`;
      }

function cargaPago() {
        document.getElementById("pago").innerHTML = `<div class="c-paymentform">
  <div class="c-paymentform__header">
    <h1 class="g--font-weight-3xl">Checkout</h1>
  </div>
  <div class="l-flex l-flex--direction-column g--gap-9">
    <h2 class="c-paymentform__title">Dirección de envio</h2>
    <div class="c-paymentform__address">
      Adam Johnson<br />
      403 Oakland Ave Street, A city, Florida, 32104,<br />
      United States of America
    </div>
    <h2 class="c-paymentform__title">
      Método de pago
    </h2>
    <div class="c-payment-item">
      <label for="visa"><img src="assets/img/visa.svg" width="30" />Tarjeta de credito</label>
      <input checked id="visa" name="payment-method" type="radio" />
    </div>
    <div class="c-paymentform__form">
      <form>
      <div class="l-flex l-flex--direction-column l-flex--horizontal-gap-5 l-flex--justify-items-center g--margin-left-10 g--margin-right-10">
          <label>Titular de la tarjeta</label>
          <input type="text"></input>
        <div class="l-flex l-flex--vertical-gap-10">
          <div>
            <label>Numero de la tarjeta</label><br>
            <input type="number" style="width: 300px;"></input><br>
          </div>
          <div>
            <label>Fecha de caducidad</label><br>
            <input type="number"></input><br>
          </div>
          <div>
            <label>CVC</label><br>
            <input type="number"></input>
          </div>
        </div>
        </div>

      </form>
    </div>
    <div class="c-payment-item">
      <label for="paypal"><img src="assets/img/paypal.svg" width="30" />PayPal</label>
      <input id="paypal" name="payment-method" type="radio" />
    </div>
    <h2 class="c-paymentform__title">Shopping Bill</h2>
    <table>
      <tbody>
        <tr>
          <td>IVA</td>
          <td align="right" id="tarifa">5.43€</td>
        </tr>
        <tr>
          <td>Descuento</td>
          <td align="right" id="descuento">0€</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td align="right" id="total">0€</td>
        </tr>
      </tfoot>
    </table>
    <div id="btn_pagar" class="c-button c-button--size-stretch g--margin-top-1">
      <a type="submit">Pagar</a>
    </div>
  </div>
</div>`;
      }