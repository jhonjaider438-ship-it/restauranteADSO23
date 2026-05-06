let contadorDeProductos = 0;                                
let botonesAgregar = document.querySelectorAll('.ordenboton'); // ← punto para clase
let mensajeToast = document.getElementById('men1');
let spanContador = document.getElementById('n2');


function agregarProducto() {
    // 1. Incrementar el contador
    contadorDeProductos = contadorDeProductos + 1;
    
    // 2. Actualizar el texto del span
    spanContador.textContent = contadorDeProductos;
    
    // 3. Mostrar el toast
    mensajeToast.classList.add('show');
    
    // 4. Ocultar el toast después de 3 segundos
    setTimeout(function() {
        mensajeToast.classList.remove('show');
    }, 3000);
}

for (let i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener('click', agregarProducto);
}