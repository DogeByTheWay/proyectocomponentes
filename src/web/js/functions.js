function abrirCesta() {
    let cesta= document.getElementById("cesta");
    (cesta.open) ? cesta.close() : cesta.showModal();
}
function abrirProducto() {
    let producto= document.getElementById("producto");
    (producto.open) ? producto.close() : producto.showModal();
}
function abrirLogin() {
  let login= document.getElementById("login");
  (login.open) ? login.close() : login.showModal();
}

window.onload = () => {
    cargacesta();
    cargaproducto();
    cargaLogin();
    document.getElementById("c-barra").onclick = function () {
        let nav = document.getElementsByClassName("c-nav")[0];
        if(nav.style.display=="inline-block"){
            nav.style='display:none;'
            document.getElementsByTagName("body")[0].style="overflow:auto;";
        }else{
            nav.style = 'display:inline-block;';
            document.getElementsByTagName("body")[0].style="overflow:hidden;";
        } 
    }
    
    document.getElementById('cestaBtn').onclick = abrirCesta;   
    document.getElementById('loginBtn').onclick = abrirLogin;
    document.getElementById('ordenadoresBtn').onclick = mostrarOrdenadores;
    document.getElementById('cerrarCesta').onclick = () => {document.getElementById("cesta").close()};   
}

function mostrarOrdenadores(){
  document.getElementById("contenedorTodo").innerHTML=`
  <section class="p-5 pl-40 pr-60">
  <b class="g--font-size-xl">Ordenadores</b>
<div class="l-horizontal-space-between">
 <div class="c-card">
    
     <img src="assets/img/14.jpg" class="c-card__img" >
     <div class="c-card__body">
       <h5 class="g--font-size-s">Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6</h5>
       <b>429€ PVPR  <del>400€</del></b>
       <a href="#" class="c-button c-button--size-stretch g--margin-top-1">Comprar</a>
     </div>
    
 </div>
 <div class="c-card">
    
     <img src="assets/img/12.jpg" class="c-card__img" >
     <div class="c-card__body">
       <h5 class="g--font-size-s">Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6</h5>
       <b>429€ PVPR  <del>400€</del></b>
       <a href="#" class="c-button c-button--size-stretch g--margin-top-1">Comprar</a>
     </div>
    
 </div>
 <div class="c-card">
    
     <img src="assets/img/14.jpg" class="c-card__img" >
     <div class="c-card__body">
       <h5 class="g--font-size-s">Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6</h5>
       <b>429€ PVPR  <del>400€</del></b>
       <a href="#" class="c-button c-button--size-stretch g--margin-top-1">Comprar</a>
     </div>
    
 </div>  <div class="c-card">
    
     <img src="assets/img/11.jpg" class="c-card__img" >
     <div class="c-card__body">
       <h5 class="g--font-size-s">Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6</h5>
       <b>429€ PVPR  <del>400€</del></b>
       <a href="#" class="c-button c-button--size-stretch g--margin-top-1">Comprar</a>
     </div>
    
 </div>
</div>   
 
</section>`
  ;
}

function cargaLogin() {
  document.getElementById("login").innerHTML += `
  <div class="l-container">
    <div class="c-login">
      <div class="l-login-tarjeta">
        <form class="c-form">
          <div class="c-form__input">
            <i class="c-form__icon fas fa-user"></i>
            <input type="text" class="c-form__text" placeholder="Email">
          </div>
          <div class="c-form__input">
            <i class="c-form__icon fas fa-lock"></i>
            <input type="password" class="c-form__text" placeholder="Password">
          </div>
          <button class="c-button-login">
            <span class="c-button-text">Iniciar Sesión</span>
            <i class="c-button-icon fas fa-chevron-right"></i>
          </button>				
        </form>
        <div class="c-social">
          <h3 class="g--font-family-principal">log in via</h3>
          <div class="l-social">
            <a href="#" class="c-social__icon fab fa-instagram"></a>
            <a href="#" class="c-social__icon fab fa-facebook"></a>
            <a href="#" class="c-social__icon fab fa-twitter"></a>
          </div>
        </div>
      </div>
      <div class="l-tarjeta-background">
        <span class="c-tarjeta-background c-tarjeta-background--forma4"></span>
        <span class="c-tarjeta-background c-tarjeta-background--forma3"></span>		
        <span class="c-tarjeta-background c-tarjeta-background--forma2"></span>
        <span class="c-tarjeta-background c-tarjeta-background--forma1"></span>
      </div>		
    </div>
  </div>`;//g--color-principal-5 g--font-family-principal
}

function cargacesta(){
    document.getElementById("cesta").innerHTML+=`<div class="container mx-auto mt-10">
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
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-40">
              <img class="h-24" src="./assets/img/1.jpg" alt="">
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="g--font-family-principal text-sm">Lenovo V15 Intel Core i5-1135G7/8GB/256GB SSD/15.6</span>
              <span class="g--color-principal-5 g--font-family-principal text-xs">Portatil</span>
              <a href="#" class="g--font-family-principal hover:text-red-500 text-gray-500 text-xs">Eliminar</a>
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
          <span class="text-center w-1/5 g--font-family-principal text-sm">$400.00</span>
          <span class="text-center w-1/5 g--font-family-principal text-sm">$400.00</span>
        </div>

        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-40">
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
          <span class="text-center w-1/5 g--font-family-principal text-sm">$40.00</span>
          <span class="text-center w-1/5 g--font-family-principal text-sm">$40.00</span>
        </div>

        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-40">
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
          <span class="text-center w-1/5 g--font-family-principal text-sm">$150.00</span>
          <span class="text-center w-1/5 g--font-family-principal text-sm">$150.00</span>
        </div>

        <button id="cerrarCesta" class="flex g--font-family-principal g--color-principal-5  text-sm mt-10">
      
          <svg class="fill-current mr-2 g--color-principal-5 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continua llenando la Cesta
        </button>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class=" g--font-family-principal g--color-principal-5 text-2xl border-b pb-8">Resumen del pedido
      </h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="g--font-family-principal text-sm uppercase">3 Articulos</span>
          <span class="g--font-family-principal text-sm">590$</span>
        </div>
        <div>
          <label class="g--font-family-principal inline-block mb-3 text-sm uppercase">Metodo de envio</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Envio Standard  - $10.00</option>
          </select>
          <p class="g--font-family-principal g--color-principal-5" >Entrega Martes, 14 de Octubre</p>
        </div>
        <div class="py-10">
          <label for="promo" class="g--font-family-principal inline-block mb-3 text-sm uppercase">Codigo Promocion</label>
          <input type="text" id="promo" placeholder="Introduce tu Codigo" class="p-2 text-sm w-full">
        </div>
        <button class="bg-amber-500 hover:bg-amber-600 px-5 py-2 text-sm text-white uppercase">Probar Codigo</button>
        <div class="border-t mt-8">
          <div class="flex g--font-family-principal justify-between py-6 text-sm uppercase">
            <span>Coste Total</span>
            <span>$600</span>
          </div>
          <button id="loginBtn" class="g--background-color-principal-5 g--font-family-principal hover:bg-amber-600 py-3 text-sm text-white uppercase w-full">Ir a pago</button>
        </div>
      </div>

    </div>
  </div>`;
}
function cargaproducto(){
    document.getElementById("producto").innerHTML+=`<div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="./assets/img/6.jpg">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm g--font-family-principal g--color-principal-5 tracking-widest">Tarjeta Grafica</h2>
        <h1 class="text-gray-900 text-3xl title-font g--font-family-principal mb-1">ASUS GeForce RTX 2060 Dual OC EVO Edition 6GB GDDR6</h1>
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
            <span class="g--font-family-principal g--color-principal-5 ml-3">Impacto Medioambiental</span>
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
          <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button class="flex ml-auto text-white g--background-color-principal-5 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded">Al Carrito</button>
        </div>
      </div>
      <div class="flex flex-col g--font-family-principal w-full">
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
