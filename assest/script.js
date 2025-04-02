
let turno =0;
let repeticion = 0;
let player1 = 0;
let player2 = 0;

let sonido = new Audio("assest/Audio/dado.mp3")

let td1p1 = document.getElementById('ronda1-p1');
let td1p2 = document.getElementById('ronda1-p2');
let td2p1 = document.getElementById('ronda2-p1');
let td2p2 = document.getElementById('ronda2-p2');
let td3p1 = document.getElementById('ronda3-p1');
let td3p2 = document.getElementById('ronda3-p2');

let totalp1 = document.getElementById('totalp1');
let totalp2 = document.getElementById('totalp2');

let player1Name = '';
let player2Name = '';

let turno1 = document.getElementById('turnop1');
let turno2 = document.getElementById('turnop2')
//Para los nombres de los jugadores

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        event.preventDefault(); 
        document.querySelector('.btn').click(); 
    }
});

document.querySelector('.btn').addEventListener('click', function() {
    repeticion = 1 + repeticion;
    turno = 1- turno;
    let cube;
if(repeticion <= 6){
    deshabilitarGiro();
    sonido.play();
    const randomValue = Math.floor((Math.random() * 6) + 1);

    if (turno == 1){
        cube = document.querySelector('.cube1');
        player1 = randomValue + player1;
    }else{
        cube = document.querySelector('.cube2');
        player2 = randomValue + player2;
    }


    const time = 1.6;
    cube.style.transition = '';
    cube.style.transform = `translateY(50px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;

    setTimeout(() => {
        cube.style.transition = `transform ${time}s cubic-bezier(0.3, 1.5, 0.5, 1)`;
        cube.style.transform = `translateY(180px) rotateX(720deg) rotateY(720deg) rotateZ(720deg)`;

        setTimeout(() => {
            cube.style.transform = `translateY(180px) rotateX(1080deg) rotateY(1080deg) rotateZ(1080deg)`;

            //  Rebote más pequeño
            setTimeout(() => {
                cube.style.transform = `translateY(10px) rotateX(1440deg) rotateY(1440deg) rotateZ(1440deg)`;

                // Sacudida y cara final
                setTimeout(() => {
                    cube.style.transition = `transform ${time / 3}s`;

                    switch (randomValue) {
                        case 1:
                            cube.style.transform = `translateY(180px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
                            break;
                        case 2:
                            cube.style.transform = `translateY(180px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
                            break;
                        case 3:
                            cube.style.transform = `translateY(180px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
                            break;
                        case 4:
                            cube.style.transform = `translateY(180px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
                            break;
                        case 5:
                            cube.style.transform = `translateY(180px) rotateX(2430deg) rotateY(2430deg) rotateZ(3600deg)`;
                            break;
                        case 6:
                            cube.style.transform = `translateY(180px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
                            break;
                    }

                    if(repeticion == 1){
                        td1p1.innerHTML= randomValue;
                    }else if(repeticion == 2){ 
                        td1p2.innerHTML= randomValue;
                    }else if(repeticion == 3){
                        td2p1.innerHTML= randomValue;
                    }else if(repeticion == 4){
                        td2p2.innerHTML= randomValue;
                    }else if((repeticion == 5)){
                        td3p1.innerHTML= randomValue;
                    }else{
                        td3p2.innerHTML= randomValue;
                        totalp1.innerHTML= player1;
                        totalp2.innerHTML = player2;

                        let res = document.getElementById('res');
                        let comen = document.getElementById('ganador');
                        if(player1 == player2){
                            res.innerHTML = '¡Empate!';
                            comen.innerHTML= '¡Empate! La suerte está bien repartida esta vez 🍀😮'
                        }else if(player1 > player2){
                            res.innerHTML = '¡Victoria!';
                            comen.innerHTML = '¡Enhorabuena, ' + player1Name + '! ¡Has ganado con ' + player1 + ' puntos!'
                        }else{
                            res.innerHTML = '¡Victoria!';
                            comen.innerHTML = '¡Enhorabuena, ' + player2Name + '! ¡Has ganado con ' + player2 + ' puntos!'
                        }  
                        //Metodos a ejecutar el finalizar partida.
                        abrirModal();
                        guardarPartida(player1Name,player1,player2Name,player2);
                        cargarEnTabla();

                    }
                    if(turno == 1){
                        turno1.innerHTML = '...'
                        turno2.innerHTML = 'Tu Turno'
                    }else{
                        turno2.innerHTML = '...'
                        if(repeticion != 6){
                            turno1.innerHTML = 'Tu Turno'
                        }
                       
                    

                    }

                }, time * 200); // Pequeño tiempo para la sacudida

            }, time * 200); // Rebote

        }, time * 200); 

    }, time * 10); // Tiempo inicial de la caída
//});
}

});

function deshabilitarGiro(){  //Boton deshabilitado mientras gira el dado
    let giro =  document.getElementById('giro');
    giro.disabled = true;
    setTimeout(() => {
     giro.disabled = false;
    }, 1600);
 }

 function dhabilitarGiro(){ //Boton deshabilitado antes de ingresar nombres 
    let giro =  document.getElementById('giro');
    giro.disabled = true;
 }

 function habilitarGiro(){ //Boton habilitado
    let giro =  document.getElementById('giro');
    giro.disabled = false;
 }
 
 
 //Boton de reinicio de pagina
 document.getElementById('btnReinicio').addEventListener('click', function(){
     location.reload();
 });

 
 document.getElementById('nameInputForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario

     player1Name = document.getElementById('player1').value;
     player2Name = document.getElementById('player2').value;
    

    // Actualizar los nombres en la interfaz del juego
    document.getElementById('namePlayer1').innerHTML = player1Name;
    document.getElementById('namePlayer2').innerHTML = player2Name;
    document.getElementById('player11').innerHTML = player1Name;
    document.getElementById('player22').innerHTML = player2Name;


    document.getElementById('gameModal').classList.add('hidden');
    habilitarGiro();
});

function abrirModal() {
    let overlay = document.getElementById("modal-overlay");
    if (overlay) { 
        overlay.classList.remove("hidden"); // Muestra el modal correctamente
    }
}

function cerrarModal() {
    let overlay = document.getElementById("modal-overlay");
    if (overlay) {
        overlay.classList.add("hidden"); // Oculta el modal
    }
}

document.getElementById('btnCierre').addEventListener('click', function(){
    cerrarModal();
    location.reload(); 
});


document.getElementById('btnContinuar').addEventListener('click', function(){
     turno =0;
     repeticion = 0;
     player1 = 0;
     player2 = 0;

    td1p1.innerHTML= 0;
    td1p2.innerHTML= 0;
    td2p1.innerHTML= 0;
    td2p2.innerHTML= 0;
    td3p1.innerHTML= 0;
    td3p2.innerHTML= 0;
    totalp1.innerHTML = 0;
    totalp2.innerHTML = 0;
    cerrarModal();
});

//Para guardar de localStorage
function guardarPartida(jugador1, puntaje1, jugador2, puntaje2) {
    let nuevaPartida = {
        fecha: new Date().toLocaleString(),
        jugador1: jugador1,
        puntaje1: puntaje1,
        jugador2: jugador2,
        puntaje2: puntaje2
        
    };

    // Obtener las partidas almacenadas o inicializar un array vacío
    let partidas = JSON.parse(localStorage.getItem("partidas")) || [];

    // Agregar la nueva partida al array
    partidas.push(nuevaPartida);

    // Guardar el array actualizado en localStorage
    localStorage.setItem("partidas", JSON.stringify(partidas));
}

function cargarEnTabla() {
    let partidas = JSON.parse(localStorage.getItem("partidas")) || [];

    let tabla = document.getElementById("tablaPartida");

    // Limpia la tabla antes de agregar nuevas filas
    tabla.innerHTML = "";

    // Recorre cada partida  o elemento y agregar una fila a la tabla
    partidas.forEach((partida) => {
        let fila = `<tr>
                        <td>${partida.fecha}</td>
                        <td>${partida.jugador1}</td>
                        <td>${partida.puntaje1}</td>
                        <td>${partida.jugador2}</td>
                        <td>${partida.puntaje2}</td>
                    </tr>`;
        tabla.innerHTML += fila; //Permite concatenar o agregar fila de informacion a la tabla 
    });
}


window.onload = function() {
    cargarEnTabla();
    dhabilitarGiro();
};