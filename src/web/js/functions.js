function abrirCesta() {
  let cesta = document.getElementById("cesta");
  cesta.open ? cesta.close() : cesta.showModal();
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
function abrirHistorial(){
  let historial=document.getElementById("listaCesta");
  historial.open ? historial.close() : historial.showModal();
}

function quitaMenu() {
  let nav = document.getElementsByClassName("c-nav")[0];
  nav.style = "display:none;";
  document.getElementsByTagName("body")[0].style = "overflow:auto;";
}

function activaFormulario(){
  let bloque=document.getElementsByClassName("c-paymentform__form")[0];
  bloque.style.display="block";
}

function desactivaFormulario(){
  let bloque=document.getElementsByClassName("c-paymentform__form")[0];
  bloque.style.display="none";
}

window.onload = () => {
  alreadyLoggedChecker();
  cargaHistorial();
  cargacesta();
  cargarProducto();
  cargaLogin();
  cargaLogout();
  cargarContenido();
  cargaPago();
  getAll("categorias")
    .then((a) => pintarCategorias(a))
    
    .catch((a) => console.log(a));
  getAll("ofertas")
    .then((of)=>pintarOfertas(of))
    .catch((of)=>console.log(of))
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
  document.getElementById("cestaBtn").onclick = abrirCesta;
  document.getElementById("loginBtn").onclick = abrirLogin;
  document.getElementById("compraBtn").onclick = abrirPago;
  document.getElementById("historyFeat").onclick=abrirHistorial;
  document.getElementById("volverMenu").onclick = function () {
    cargarContenido();
    getAll("categorias")
    .then((a) => pintarCategorias(a))
    
    .catch((a) => console.log(a));
  getAll("ofertas")
    .then((of)=>pintarOfertas(of))
    .catch((of)=>console.log(of))
  };
  document.getElementById("cerrarProducto").onclick = () => {
    document.getElementById("producto").close();
  };
};

function alreadyLoggedChecker(){
  getAll("usuarios").then(data => {let user=JSON.parse(data).find(u=>u.log==true); user!=null ? pintaDatosUsuario(user.nombre) : console.log("Nadie logeado")})
}
function pintaDatosUsuario(nombre){
  document.getElementById("loginBtn").innerHTML=`<i class="fa-solid fa-user mr-3"></i>${nombre}`;
  document.getElementById("historyFeat").style.display="block";
  document.getElementById("loginBtn").onclick=abrirLogout;
}
function recogeDatosLogin(){
  let user=document.getElementById("emailUser").value;
  let passwd=document.getElementById("passwdUser").value;
    getAll("usuarios").then(usuarios => compruebaDatosLogin(user,passwd,JSON.parse(usuarios)))
    .catch(error => console.log(error));
}
function compruebaDatosLogin(user,passwd,usuarios){
  let usuario=usuarios.find(u=> u.nombre ==user && u.password == passwd)
  if(usuario!=null){
    patch("usuarios",`${usuario.id}`,{'log':true}).then(document.location.reload());
  }else{
    alert("Error de credenciales")
  }
}

function pintarCategorias(a) {
  let c_nav = document.querySelector(".c-nav");
  let categoriasTop=document.getElementById("categoriasTop");
  c_nav.innerHTML = "";
  let texto = "";
  let res="";
  JSON.parse(a).forEach((cat) => {
    texto += `<li class="c-nav__item" id="${"c" + cat.id}"><a class="cursor-pointer">${cat.nombre}</a></li>`;
    res+=`<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-teal-700 dark:border-teal-300">
  <a id="${"c" + cat.id}"><img class="rounded-t-lg" src="assets/img/${cat.id}.jpg" alt="" /></a>
  <div class="p-5">
      <a id="${"c" + cat.id}"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">${cat.nombre}</h5></a>               
  </div>
</div>`;
  });
  c_nav.innerHTML = texto;
  categoriasTop.innerHTML=res;
  let items = document.getElementsByClassName("c-nav__item");
  Array.from(items).forEach((item) => {
    item.onclick = () => {
      console.log("saber item id"+item.id);
      console.log("saber text content "+item.textContent)

      obtenerArticulos(item.id, item.textContent);
    };
  });
  let botones=document.getElementsByTagName("a");
  Array.from(botones).forEach((bot) => {
    bot.onclick = () => {
      console.log("saber item id"+bot.id);
      console.log("saber text content "+bot.textContent);
      

      obtenerArticulos(bot.id, bot.textContent);
    };
  }
  );
  document.getElementById("c4").classList.add("c-nav__item--bottom");
}


function pintarOfertas(of){
  let ofertasFlash=document.getElementById("ofertasFlash");
  let resultado="";
 JSON.parse(of).forEach((ofertas)=>{
resultado+=`
<div class="c-card">
  
   <img src="assets/img/${ofertas.id}.jpg" class="c-card__img cursor-pointer" onclick="abrirProducto()">
   <div class="c-card__body">
     <h5 class="g--font-size-s">${ofertas.nombre}</h5>
     <p class="g--color-rojo-4">-${ofertas.descuento}%</p>
     <b>${ofertas.precio-(ofertas.precio*(ofertas.descuento/100))}€ PVPR  <del>${ofertas.precio}€</del></b>
     <a href="#" class="c-button c-button--size-stretch g--margin-top-1" id="${ofertas.id}">Añadir al carrito</a>
   </div>
  
</div>
`;
 })
 ofertasFlash.innerHTML=resultado;

 Array.from(document.getElementsByClassName("c-card__img")).forEach((e) =>
 e.addEventListener("click", cargarProducto(e.id))
);  
botones=document.getElementsByClassName("c-button");
		//console.log(botones);
				/*hay que hacer antes un ARRAY.FROM.BOTONES.FOREACH (bot=> bot.addEventListener('click',()=>{
				console.log("has pulsado");
			})) */
		
		Array.from(botones).forEach (bot=>bot.addEventListener('click',()=>{//console.log("has pulsado"+ bot.id)
      console.log("has pulsado "+bot.id)
      //hay que recorrer listaArticulos para acceder a esos datos
    JSON.parse(of).find(ofertas=>{
		if(ofertas.codigo==bot.id){
      
    }
  })
}));
			//console.log(art);
}
function obtenerArticulos(id, nombreCategoria) {
  if (id.substring(0, 1) === "c") {
    getOnePage(`articulos/categoriaPage`, id.substring(1)).then((articulos_headerArray) => {
      pintarPaginacion(articulos_headerArray, nombreCategoria)
    });
  } else {
    getAll(`articulos/subcategoria/${id.substring(1)}`).then(a => {
      pintarArticulos(JSON.parse(a), nombreCategoria);
    }
      )
  }
}

function obtenerArticulosDesdeUrlHeader(url, nombreCategoria) {
  getOnePageWithUrl(url).then((articulos_headerArray) => {
    pintarPaginacion(articulos_headerArray, nombreCategoria)
  });
}

function pintarPaginacion(articulos_headerArray, nombreCategoria) {
  let header = articulos_headerArray.pop();
  let prev = false;
  let next = false;
  let urlFirst, urlPrev, urlNext, urlLast;
  if(header.find(a => a.match(/.*prev.*/))) {
    prev = true;
  }
  if(header.find(a => a.match(/.*next.*/))) {
    next = true;
  }
  let textoPaginacion = `<div id="paginacion" class="m-2">
                  <ul class="pagination flex flex-row justify-center gap-4">`
  header.forEach( item => {
    if(item.match('first')) {
      let regex = /http.+=8/;
      let urlPageFirst = item.match(regex);
      textoPaginacion+=`<li  class="rounded-sm cursor-pointer g--background-color-principal-0 px-2 shadow-md"><button id="urlFirst">Primero</button></li> `;
      urlFirst = urlPageFirst[0];
      if(!prev) {
        textoPaginacion+=`<li class="rounded-sm px-2 shadow-md g--background-color-principal-0 opacity-25">&lt&lt</li>`;             
      }
    }    
    if(item.match('prev')) {
      let regex = /http.+=8/;
      let urlPagePrev = item.match(regex);
      textoPaginacion+=`<li  class="rounded-sm cursor-pointer g--background-color-principal-0 px-2 shadow-md"><button id="urlPrev">&lt&lt</button></li>`;
      urlPrev = urlPagePrev[0];
    }     
    if(item.match('next')) {
      let regex = /http.+=8/;
      let urlPageNext = item.match(regex);
      textoPaginacion+=`<li  class="rounded-sm cursor-pointer g--background-color-principal-0 px-2 shadow-md"><button id="urlNext">&gt&gt</button></li>`;
      urlNext = urlPageNext[0];
    }       
    if(item.match('last')) {
      if(!next) {
        textoPaginacion+=`<li class="rounded-sm px-2 shadow-md g--background-color-principal-0 opacity-25">&gt&gt</li>`;
      }       
      let regex = /http.+=8/;
      let urlPageLast = item.match(regex);
      textoPaginacion+=`<li class="rounded-sm cursor-pointer px-2 g--background-color-principal-0 shadow-md"><button id="urlLast">Último</button></li>`;
      urlLast = urlPageLast[0];
    }
  })
  textoPaginacion+=`</ul>
      </div>`
  pintarArticulos(articulos_headerArray, nombreCategoria, textoPaginacion, urlFirst, urlPrev, urlNext, urlLast);
}

function pintarArticulos(articulos, nombreCategoria, textoPaginacion, urlFirst, urlPrev, urlNext, urlLast) {
  let main = document.getElementById("contenedorTodo");
  main.innerHTML = "";
  let texto = `
    <section class="p-5 pl-40 pr-40">
    <b class="g--font-size-xl">${nombreCategoria}</b>
    <div class="l-horizontal-space-between">`;
    let itemPrecio2;
  articulos.forEach((item) => {
    itemPrecio2 = item.precio * 1.2;
    texto += `<div class="c-card">    
                <img src="assets/img/${item.id}.jpg" class="c-card__img">
                <div class="c-card__body">
                  <h5 class="g--font-size-s">${item.nombre}</h5>
                  <b>${item.precio}€ PVPR  <del>${itemPrecio2.toFixed(0)}</del></b>
                  <a id=${item.id} class="c-button c-button--size-stretch g--margin-top-1">Añadir al carrito</a>
                </div>   
              </div>`;
  });
  texto += "</section>";
  main.innerHTML = texto + textoPaginacion;  
  if(typeof urlFirst !== 'undefined') { 
  document.getElementById('urlFirst').addEventListener('click', ()=> {obtenerArticulosDesdeUrlHeader(urlFirst, nombreCategoria)});
  }
  if(typeof urlPrev !== 'undefined') {
    document.getElementById('urlPrev').addEventListener('click', ()=> obtenerArticulosDesdeUrlHeader(urlPrev, nombreCategoria));
  }
  if(typeof urlNext !== 'undefined') {
    document.getElementById('urlNext').addEventListener('click', ()=> obtenerArticulosDesdeUrlHeader(urlNext, nombreCategoria));
  }
  if(typeof urlLast !== 'undefined') {
  document.getElementById('urlLast').addEventListener('click', ()=> obtenerArticulosDesdeUrlHeader(urlLast, nombreCategoria));
  }
  Array.from(document.getElementsByClassName("c-card__img")).forEach((e) =>
    e.addEventListener("click", cargarProducto(e.id))
  );  
  Array.from(main.getElementsByTagName("a")).forEach((e) =>
    e.addEventListener("click", () => isLogedCardToCarrito(e.id))
  );
}

function isLogedCardToCarrito(articuloId) {
  getOne("usuarios/log", "true").then(usuario => usuario ? buscarCarritoAModificar(articuloId, usuario[0].id) : alert("               Usuario no ha iniciado sesion."))
                              
}
function buscarCarritoAModificar(idArticulo, idUsuario) {
  getOneRow("carritos/activo/usuario", true, idUsuario)
  .then( carrito => buscarArticuloEnProductos(carrito[0].id, idArticulo))
  .catch(e => console.log(e)) 
}

function buscarArticuloEnProductos(idCarrito, idArticulo) {   
  getOneRow("productos/idCarrito/idArticulo", idCarrito, idArticulo)
    .then( producto => producto[0] ? modificarProducto(producto[0]) : anyadirProducto(idCarrito, idArticulo))
  
}    
      
function anyadirProducto(idCarrito,idArticulo) {
  let body = { "idCarrito": idCarrito, "idArticulo": parseInt(idArticulo), "unidades": 1 };  
  post("productos", body).then(a => alert("Añadido al carrito")).catch(a => console.log(a))
}


function modificarProducto(producto) {
  console.log("DALE A OTRO BOTON QUE AUN NO MODIFICA");
}

function cargaHistorial(){
  document.getElementById("listaCesta").innerHTML=`
  <div>
    <b class="g--font-size-2xl">Lista de Carritos</b>
    <p><b class="g--font-size-xl">Pendientes</b></p>
    <div class="l-vertical">
    <div class="c-listaCarrito">
        <table class="c-listaCarrito__body" border=1 >
            <tr>
             <td><img src="./assets/img/11.jpg" width="80px" height="130px" /></td>
             <td class="g--font-size-m">Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6</td>
             <td class="g--font-size-m"> &nbsp;&nbsp;500€</td>
            </tr>
            <tr>
                <td><img src="./assets/img/12.jpg" width="80px" height="130px"/></td>
                <td class="g--font-size-m">Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6</td>
                <td class="g--font-size-m"> &nbsp;&nbsp;450€</td>
               </tr>            
        </table>
        <div class="c-listaCarrito__footer">
        <button class="c-button c-button--size-stretch">Seguir Comprando</button>
        <button class="c-button c-button--size-stretch">Realizar Pago</button>
        <b>Total:950€</b>
        </div> 
    </div>

    <div class="c-listaCarrito">
        <table class="c-listaCarrito__body" border=1 >
            <tr>
             <td><img src="./assets/img/13.jpg" width="80px" height="130px"/></td>
             <td class="g--font-size-m">Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6</td>
             <td class="g--font-size-m"> &nbsp;&nbsp;400€</td>
            </tr>
            <tr>
                <td><img src="./assets/img/11.jpg" width="80px" height="130px"/></td>
                <td class="g--font-size-m">Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6</td>
                <td class="g--font-size-m"> &nbsp;&nbsp;450€</td>
               </tr>            
        </table>
        <div class="c-listaCarrito__footer">
        <button class="c-button c-button--size-stretch">Seguir Comprando</button>
        <button class="c-button c-button--size-stretch">Realizar Pago</button>
        <b>Total:850€</b>
        </div>
    </div>
    </div>

    <p><b class="g--font-size-xl">Realizados</b></p>
    <div class="l-vertical">
        <div class="c-listaCarrito">
            <table class="c-listaCarrito__body" border=1 >
                <tr>
                 <td><img src="./assets/img/14.jpg" width="80px" height="130px"/></td>
                 <td class="g--font-size-m">Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6</td>
                 <td class="g--font-size-m"> &nbsp;&nbsp;600€</td>
                </tr>
                <tr>
                    <td><img src="./assets/img/15.jpg" width="80px" height="130px"/></td>
                    <td class="g--font-size-m">Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6</td>
                    <td class="g--font-size-m"> &nbsp;&nbsp;650€</td>
                   </tr>            
            </table>
            <div class="c-listaCarrito__footer">
            <p>Realizado 24 Septiembre 2022</p>
            <button class="c-button c-button--size-stretch">Volver a Comprar</button>
            <b>Total:1250€</b>
            </div>
            
        </div>
        <div class="c-listaCarrito">
            <table class="c-listaCarrito__body" border=1 >
                <tr>
                 <td><img src="./assets/img/11.jpg" width="80px" height="130px"/></td>
                 <td class="g--font-size-m">Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6</td>
                 <td class="g--font-size-m"> &nbsp;&nbsp;500€</td>
                </tr>
                <tr>
                    <td><img src="./assets/img/13.jpg" width="80px" height="130px"/></td>
                    <td class="g--font-size-m">Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6</td>
                    <td class="g--font-size-m"> &nbsp;&nbsp;450€</td>
                   </tr>            
            </table>
            <div class="c-listaCarrito__footer">
            <p>Realizado 20 Diciembre 2022</p>
            <button class="c-button c-button--size-stretch">Volver a Comprar</button>
            <b>Total:950€</b>
            </div>
            
        </div>
 
        </div>
    </div>
  `;
}
function cargaLogout() {
  document.getElementById("logout").innerHTML = `CIERRA SESIÓN`;
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

function cargacesta() {
  document.getElementById(
    "cesta"
  ).innerHTML += `<div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="g--font-family-principal g--color-principal-5 text-2xl">Cesta de la compra</h1>
          <h2 class="g--font-family-principal g--color-principal-5 text-2xl">3 Articulos</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="g--font-family-principal text-gray-600 text-xs uppercase w-2/5">Detalle Producto</h3>
          <h3 class="g--font-family-principal text-center text-gray-600 text-xs uppercase w-1/5 text-center">Cantidad</h3>
          <h3 class="g--font-family-principal text-center text-gray-600 text-xs uppercase w-1/5 text-center">Precio</h3>
          <h3 class="g--font-family-principal text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        <div class="flex items-center hover:bg-teal-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-40 min-w-max">
              <img class="h-24" src="./assets/img/1.jpg" alt="">
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="g--font-family-principal text-sm">Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6</span>
              <span class="g--font-family-principal g--color-principal-5 text-xs">Portatil</span>
              <a href="#" class="g--font-family-principal outline-0 hover:text-red-500 text-gray-500 text-xs">Eliminar</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input class="mx-2 border g--font-family-principal g--color-principal-5 text-center w-8" type="text" value="1">

            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span class="text-center w-1/5 g--font-family-principal text-sm">€400.00</span>
          <span class="text-center w-1/5 g--font-family-principal text-sm">€400.00</span>
        </div>

        <div class="flex items-center hover:bg-teal-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-40 min-w-max">
              <img class="h-24" src="./assets/img/2.jpg" alt="">
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="g--font-family-principal text-sm">PC Racing Ordenador Gaming AMD Ryzen 7 5700G/16GB/1TB SSD</span>
              <span class="g--color-principal-5 text-xs">PC</span>
              <a href="#" class="g--font-family-principal hover:text-red-500 text-gray-500 text-xs">Eliminar</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input class="mx-2 border text-center w-8 g--color-principal-5" type="text" value="1">

            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span class="text-center g--font-family-principal w-1/5 text-sm">€40.00</span>
          <span class="text-center g--font-family-principal w-1/5 text-sm">€40.00</span>
        </div>

        <div class="flex items-center hover:bg-teal-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-40 min-w-max">
              <img class="h-24" src="./assets/img/3.jpg" alt="">
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="g--font-family-principal text-sm">Placa base Asus TUF GAMING B450-PLUS II</span>
              <span class="g--font-family-principal g--color-principal-5 text-xs">Placa Base</span>
              <a href="#" class="g--font-family-principal hover:text-red-500 text-gray-500 text-xs">Eliminar</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
            <input class="mx-2 border text-center w-8 g--color-principal-5" type="text" value="1">

            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span class="text-center w-1/5 g--font-family-principal text-sm">€150.00</span>
          <span class="text-center w-1/5 g--font-family-principal text-sm">€150.00</span>
        </div>

        <button id="cerrarCesta" class="flex g--color-principal-5 g--font-family-principal text-sm mt-10">
      
          <svg class="fill-current mr-2 g--color-principal-5 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continua llenando la Cesta
        </button>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="g--font-family-principal g--color-principal-5 text-2xl border-b pb-8">Resumen del pedido
      </h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="g--font-family-principal text-sm uppercase">3 Articulos</span>
          <span class="g--font-family-principal text-sm">590€</span>
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
            <span>€600</span>
          </div>
          <button id="compraBtn" class="g--background-color-principal-5 hover:bg-teal-700 py-3 text-sm text-white uppercase w-full rounded-md">Ir a pago</button>
        </div>
      </div>

    </div>
  </div>`;
}
function cargarProducto() {
  document.getElementById("producto").innerHTML += `  
  <button id="cerrarProducto" class="flex outline-0 g--color-principal-5 g--font-family-principal text-sm ml-40">      
    <svg class="fill-current mr-2 g--color-principal-5 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
    Volver a lista de productos
  </button>  
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="./assets/img/6.jpg">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm g--color-principal-5 tracking-widest">Tarjeta Grafica</h2>
        <h1 class="text-gray-900 text-3xl title-font mb-1">ASUS GeForce RTX 2060 Dual OC EVO Edition 6GB GDDR6</h1>
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
          <span class="title-font font-medium text-2xl text-gray-900">€58.00</span>
          <button class="flex ml-auto text-white g--background-color-principal-5 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-400 rounded">Añadir al Carrito</button>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div>
          <h5 class="mt-8 text-lg font-bold">Descripcion del Producto</h5>      
          <hr>   
        </div>
        <div class="mt-5">
          <ul>
            <li>Familia de procesadores de gráficos: NVIDIA</li>
            <li>Procesador gráfico: GeForce RTX 2060</li>
            <li>Máxima resolución: 7680 x 4320 Pixeles</li>
            <li>CUDA: Si</li>
            <li>Frecuencia del procesador: 1365 MHz</li>
            <li>Soporte para proceso paralelo: No compatible</li>
            <li>FireStream: No</li>
            <li>Núcleos CUDA: 1920</li>
            <li>Aumento de la velocidad de reloj del procesador: 1755 MHz</li>
            <li>Frecuencia del procesador (modo OC): 1365 MHz</li>
            <li>Velocidad de aceleración del reloj del procesador (modo OC): 1785 MHz</li>
            <li>Capacidad memoria de adaptador gráfico: 6 GB</li>
            <li>Tipo de memoria de adaptador gráfico: GDDR6</li>
            <li>Ancho de datos: 192 bit</li>
            <li>Velocidad de memoria del reloj: 14000 MHz</li>
            <li> Puertos e Interfaces</li>
            <li> Tipo de interfaz: PCI Express x16 3.0</li>
            <li> Número de puertos HDMI: 2</li>
            <li> Cantidad de puertos DVI-D: 1</li>
            <li> Cantidad de DisplayPorts: 1</li>
            <li> Versión HDMI: 2.0b</li>
            <li>Versión de DisplayPort: 1.4</li>
          </ul>
        </div>
      </div>
    </div>
  </div>`;
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
          <td>Shipping fee</td>
          <td align="right">5.43€</td>
        </tr>
        <tr>
          <td>Discount 10%</td>
          <td align="right">-1.89€</td>
        </tr>
        <tr>
          <td>Price Total</td>
          <td align="right">84.82€</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td align="right">88.36€</td>
        </tr>
      </tfoot>
    </table>
    <div class="c-button c-button--size-stretch g--margin-top-1">
      <a type="submit">Pagar</a>
    </div>
  </div>
</div>`;
}
