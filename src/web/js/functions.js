function abrirCesta() {
    let cesta= document.getElementById("cesta");
    (cesta.open) ? cesta.close() : cesta.showModal();
}
function abrirProducto() {
    let producto= document.getElementById("producto");
    (producto.open) ? producto.close() : producto.showModal();
}

window.onload = () => {
    document.getElementById("c-barra").onclick = function () {
        let nav = document.getElementsByClassName("c-nav")[0];
        if(nav.style.display=="block"){
            nav.style='display:none;'
        }else{
            nav.style = 'display:block;';
        } 
    }
    
    document.getElementById('cestaBtn').onclick = abrirCesta;
    document.getElementById('productoBtn').onclick = abrirProducto;
}
