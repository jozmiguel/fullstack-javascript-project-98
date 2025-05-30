#!/usr/bin/env node

import logicaJuego from '../index.js';

const description = '¿Cuál es el resultado de la expresión?';

const juegoMental = () => {
    const numeroAleatorio1 = Math.floor(Math.random() * 51);
    const numeroAleatorio2 = Math.floor(Math.random() * 51);
    const signos = ['+', '-', '*'];
    const signoAleatorio = signos[Math.floor(Math.random() * signos.length)];
    const pregunta = numeroAleatorio1 + signoAleatorio + numeroAleatorio2;
    
    let respuestaCorrecta;
    switch (signoAleatorio) {
        case '+':
            respuestaCorrecta = numeroAleatorio1 + numeroAleatorio2;
            break;
        case '-':
            respuestaCorrecta = numeroAleatorio1 - numeroAleatorio2;
            break;
        case '*':
            respuestaCorrecta = numeroAleatorio1 * numeroAleatorio2;
            break;
        default:
            throw new Error(`Operador desconocido: ${signoAleatorio}`);
}

    return { pregunta, respuestaCorrecta: respuestaCorrecta.toString() };
};

const startBrainEven = () => {
    logicaJuego(description, juegoMental);
};

export default startBrainEven;logicaJuego(description, juegoMental);