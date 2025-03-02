// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let inputNombre = document.querySelector(".input-name");
let botonAgregar = document.querySelector(".button-add");
let botonSortear = document.querySelector(".button-draw");
let listaNombres = document.querySelector("#listaAmigos");

let resultadoSorteo = document.querySelector("#resultado")
let nombres = [];

// Evento para agregar nombres
botonAgregar.addEventListener("click", function () {
    let nombre = inputNombre.value.trim();
    if (nombre === "") {
        alert(" ⚠️ Ingresa un nombre valido.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    inputNombre.value = "";

    // Habilitar el boton "Sortear" si hay nombres
    botonSortear.disabled = false;
});

// Evento para sortear sin borrar nombres
botonSortear.addEventListener("click", function () {
    if (nombres.length === 0) {
        alert(" ⚠️ La lista esta vacia. Agrega nombres antes de sortear.");
        return;
    }

    // Elegir ganador
    let ganador = nombres[Math.floor(Math.random() * nombres.length)];
    resultadoSorteo.textContent = `🎉 El amigo secreto es: ${ganador}🎉 `;

    // Asegurar que el mensaje se inserte correctamente
    botonSortear.parentNode.insertBefore(resultadoSorteo, botonSortear);

    // Ocultar la lista de nombres temporalmente
    listaNombres.style.display = "none";
});

// Función para actualizar la lista en pantalla
function actualizarLista() {
    listaNombres.innerHTML = "";
    nombres.forEach(function (nombre) {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
    listaNombres.style.display = "block";
}
