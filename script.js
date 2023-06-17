const selectProdComprar = document.querySelector("select");
const DetallesProductos = document.querySelector("#contenedor-productos");

const CANT_INICIAL_PROD = 100;
const CANT_UNIDADES_COMPRA = 1;

const cantProductos = [CANT_INICIAL_PROD, CANT_INICIAL_PROD, CANT_INICIAL_PROD];


function comprarProducto() {
    actualizaCantInicial();
    actualizaDetallesProd();
}


function actualizaCantInicial() {
    cantProductos[selectProdComprar.value] -= CANT_UNIDADES_COMPRA;
}


function actualizaDetallesProd() {
    let posicionProducto = parseInt(selectProdComprar.value);
    document.querySelector(`#cant-prod-${posicionProducto +1}`).innerHTML = `
    Cantidad : ${cantProductos[posicionProducto]}
    `;
    
}