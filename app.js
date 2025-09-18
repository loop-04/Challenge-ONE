// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array - Nombres
let amigos = [];

//Función - agregar amigos
function agregarAmigo() {
    //Valor- entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    //Validar - campo vacío
    if (input.value === "") {
        alert("Campo vacío. Por favor, inserte un nombre.");
        return;
    }
    //Agregar - nombre al array
    amigos.push(nombre);

    //Actualizar  - lista amigos
    mostrarLista();
    
    //Limpiar - Campo de entrada
    input.value = "";
}

//Función - mostrar lista
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    //Limpiar - lista actual
    lista.innerHTML = "";
    amigos.forEach(function (amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Función - Amigo aleatorio
function amigoAleatorio() {
    const resultado = document.getElementById("resultado");
    //Limpiar resultado anterior
    resultado.innerHTML = "";

    //Validación - amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }
    //Indice - aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Mostrar - amigo seleccionado
    const amigoSeleccionado = amigos[indiceAleatorio];

    //mensaje - amigo seleccionado
    const li = document.createElement("li");
    li.textContent = "Tu amigo seleccionado es: " + amigoSeleccionado;
    resultado.appendChild(li);
}

    