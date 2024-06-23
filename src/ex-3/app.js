//Dado que el usuario se encuentra en una pagina con el formulario
//Cuandorellena el cmpo de formulario con su nombre y valida haciendo click en el boton validar
//Entonces se renderiza en pantalla el texto "Hola <nombre de usuario>"

//click de boton = evento
// recuperar el nombre de usuario
//renderizar en un contenedor html el texto "Hola pepe"

//Criterio 2
//comprobar si el input esta vacio




/*const inputUsername = document.getElementById('username')
const btnValidate = document.getElementById('btn-validate')
const mainBlock = document.getElementById('main')

btnValidate.addEventListener('click' , () => {
    const username = inputUsername.value
    render(username)
});

function render(username) {

    if (isEmpty(username)) {
        mainBlock.innerHTML = `
            <span>Debe introducir su nombre </span>`
        return
    }
    mainBlock.innerHTML = `<span>Hola ${username}</span>`;
}

function isEmpty(username) {
    const stringLength = username.length 
    return (stringLength === 0) ? true : false
}*/
const inputUsername = document.getElementById('username');
const btnValidate = document.getElementById('btn-validate');
const mainBlock = document.querySelector('main');

// Asegurarse de que todos los elementos existen
if (!inputUsername || !btnValidate || !mainBlock) { // dice si "!inputUsername" es null o undefined
    console.error('Uno o más elementos no se encontraron en el DOM.');
} else {
    btnValidate.addEventListener('click', () => { //como estan todos en DOM entonces eventListener al boton 'btnValidate'
        const username = inputUsername.value.trim();  //no me funciona sin trim, que evita espacios en blanco antes y despues    
        render(username);                           //'value' es lo que va a ingresar el usuario en your name
    });  //llamada a la funcion render
}

function render(username) {
    if (isEmpty(username)) {
        mainBlock.innerHTML = `<span>Debe introducir su nombre</span>`;
        return;
    }
    mainBlock.innerHTML = `<span>Hola ${username}</span>`;
}

function isEmpty(username) {
    return username.length === 0;
}
