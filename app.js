// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let Amigo = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;

        //verificar si el campo no está vacío
    if (nuevoAmigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la ejecución si el campo está vacío
    }

    //verifica que el nombre del amigo es valido (solo letras y espacios)
    if (!/^[A-Za-z\s]+$/.test(nuevoAmigo)) {
        alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
        return; // Detener la ejecución si el nombre no es válido
    }

    //verifica que el nombre del amigo no esté repetido
    if (Amigo.includes(nuevoAmigo)) {
        alert("Este amigo ya está en la lista.");
        return; // Detener la ejecución si el amigo ya existe
    }

    Amigo.push(nuevoAmigo);
    document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
    mostrarAmigos(); // Mostrar la lista actualizada de amigos
}

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar los amigos
    for (let i = 0; i < Amigo.length; i++) {
        const li = document.createElement("li");
        li.textContent = Amigo[i];
        lista.appendChild(li);
    }
}

function reiniciarLista() {
    Amigo = [];
    mostrarAmigos(); // Actualizar la visualización de la lista
}

function sortearAmigo(){
    //Validar que haya amigos disponibles
    if (Amigo.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    } else if (Amigo.length === 1) {
        alert("Solo hay un amigo en la lista: " + Amigo[0]);
        return;
    }

    //Generar un índice aleatorio usando Math.random() y Math.floor()
    const indiceAleatorio = Math.floor(Math.random() * Amigo.length);
    
    //Obtener el nombre sorteado usando el índice aleatorio
    const amigoSorteado = Amigo[indiceAleatorio];
    
    //Mostrar el resultado usando document.getElementById() e innerHTML
    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = "El amigo sorteado es: " + amigoSorteado;
}
