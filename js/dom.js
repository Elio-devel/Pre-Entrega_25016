
let nodoH1 = document.getElementById('mi_identificador');//.querySelector("h1");

//console.log(nodoH1.innerHTML); // Muestra el nodo h1 en la consola

nodoH1.innerText = 'Hola, soy un texto modificado desde JavaScript'; // Modifica el contenido del nodo h1

nodoH1.innerHTML = '<strong>Hola, soy un texto modificado desde JavaScript con HTML</strong> <span>Soy un elemento span</span>'; // Modifica el contenido del nodo h1 con HTML


let productos = document.querySelector('ul');

let lis = document.createElement('li');
lis.textContent = "Otro Producto";

//productos.appendChild(lis);
document.querySelector('ul').appendChild(lis);

//console.log(productos); // Muestra el contenido de la lista en la consola

//productos.innerHTML = "<li>Nuevo producto</li><li>Nuevo producto</li><li>Nuevo producto</li>";
//productos.remove();

function mostrarValorFormulario() {
   let formulario = document.forms['formulario'];
   let texto = '';

   for (let elemento of formulario) {
      texto += elemento.value + ' ';
   }

   //console.log('Hola ' + texto); // Muestra el contenido del formulario en la consola

   document.getElementById('saludo').innerText = `Hola ${texto}`; // Modifica el contenido del nodo saludo con el texto del formulario
   document.getElementById('saludo').classList.add('text-end'); // Añade la clase text-end al nodo saludo para alinear el texto a la derecha
   //document.getElementById('saludo').innerHTML = `<div style="text-align: end;">Hola ${texto}</div>`; // Modifica el contenido del nodo saludo con el texto del formulario en HTML
}
