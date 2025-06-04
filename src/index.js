#!/usr/bin/env node

import readlineSync from 'readline-sync';

const logicaJuego = (description, juegoMental) => {

    console.log('¡Bienvenido a Brain Games!');

    const userName = readlineSync.question('¿Cuál es tu nombre? ');

    console.log(`¡Hola, ${userName}!`);

    console.log(description);

    let partidasGanadas = 0;

    do {
        let resultado = [];
        const { pregunta, respuestaCorrecta } = juegoMental ()
            console.log(`Pregunta: ${pregunta}`);
            const respuestaUsuario = readlineSync.question('Tu respuesta: ').toLowerCase();
            
            if (respuestaCorrecta === respuestaUsuario) {
                console.log('¡Correcto!');
                partidasGanadas += 1;
            } else {
                console.log(`'${respuestaUsuario}' es una respuesta incorrecta ;(. La respuesta correcta era '${respuestaCorrecta}'`);
                console.log(`¡Intentémoslo de nuevo, ${userName}!`);
                break;
                
            }
        } while (partidasGanadas < 3);

    if (partidasGanadas === 3) {
        return console.log(`¡Felicidades, ${userName}!`);
    }
};

export default logicaJuego;