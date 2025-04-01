
let turno =0;
let repeticion = 0;
let player1 = 0;
let player2 = 0;


document.querySelector('.btn').addEventListener('click', () => {
    repeticion = 1 + repeticion;
    turno = 1- turno;
    let cube;
if(repeticion <= 6){
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

    if(repeticion == 6){
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
                            cube.style.transform = `translateY(180px) rotateX(2160deg) rotateY(2160deg) rotateZ(2160deg)`;
                            break;
                        case 2:
                            cube.style.transform = `translateY(180px) rotateX(2520deg) rotateY(2160deg) rotateZ(2160deg)`;
                            break;
                        case 3:
                            cube.style.transform = `translateY(180px) rotateX(2160deg) rotateY(2520deg) rotateZ(2160deg)`;
                            break;
                        case 4:
                            cube.style.transform = `translateY(180px) rotateX(2160deg) rotateY(1350deg) rotateZ(2160deg)`;
                            break;
                        case 5:
                            cube.style.transform = `translateY(180px) rotateX(1350deg) rotateY(2160deg) rotateZ(2160deg)`;
                            break;
                        case 6:
                            cube.style.transform = `translateY(180px) rotateX(2160deg) rotateY(990deg) rotateZ(2160deg)`;
                            break;
                    }

                }, time * 200); // Pequeño tiempo para la sacudida

            }, time * 200); // Segundo rebote

        }, time * 200); // Primer rebote

    }, time * 10); // Tiempo inicial de la caída
//});
}
});
