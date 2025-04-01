
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
    console.log(turno);
    const time = 1.3;

//cube.addEventListener('click', () => {
    cube.style.transition = '';
    cube.style.transform = `translateY(50px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;

    setTimeout(() => {
        cube.style.transition = `transform ${time}s cubic-bezier(0.3, 1.5, 0.5, 1)`;
        cube.style.transform = `translateY(180px) rotateX(720deg) rotateY(720deg) rotateZ(720deg)`;

        // 🔹 2. Rebote grande
        setTimeout(() => {
            cube.style.transform = `translateY(180px) rotateX(1080deg) rotateY(1080deg) rotateZ(1080deg)`;

            // 🔹 3. Rebote más pequeño
            setTimeout(() => {
                cube.style.transform = `translateY(10px) rotateX(1440deg) rotateY(1440deg) rotateZ(1440deg)`;

                // 🔹 4. Sacudida y cara final
                setTimeout(() => {
                    cube.style.transition = `transform ${time / 3}s`;

                   // console.log(`randomValue: ${randomValue}`);

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
                        console.log('Partida terminada');
                        console.log('Player1: '  + player1 + ' puntos');
                        console.log('Player2: '  + player2 + ' puntos');
                        if(player1 == player2){
                            console.log('Empate');
                        }else if(player1 > player2){
                            console.log('Ganador: Player 1');
                        }else{
                            console.log('Ganador: Player 2');
                        }  
                    }

                }, time * 200); // Pequeño tiempo para la sacudida

            }, time * 200); // Segundo rebote

        }, time * 200); // Primer rebote

    }, time * 10); // Tiempo inicial de la caída
//});
}else{

}

});

function deshabilitarGiro(){
    let giro =  document.getElementById('giro');
    giro.disabled = true;
    setTimeout(() => {
     giro.disabled = false;
    }, 1000);
 }
 
 
 document.getElementById('btnReinicio').addEventListener('click', function(){
     location.reload();
 });
